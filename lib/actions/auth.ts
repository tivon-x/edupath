"use server"

import { z } from "zod"
import db from "../db"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"
// import { Resend } from "resend"
// import { EmailTemplate } from "@/components/email-template"
import { toast } from "sonner"

const SignInSchema = z.object({
  email: z.string().email("邮件格式不正确"),
  password: z.string().min(8, "密码至少8位"),
  verificationToken: z.string().length(6, "验证码必须是6位"),
})

const SignInSchemaWithPassword = SignInSchema.omit({
  verificationToken: true,
})

type Error = {
  email?: string[]
  password?: string[]
  verificationToken?: string[]
  confirm_password?: string[]
  credentials?: string[]
  database?: string[]
}

export type State = {
  errors?: Error | null
  message?: string | null
  formData?: {
    email?: string
    password?: string
    verificationToken?: string
    confirm_password?: string
  }
}

export async function signInWithPassword(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = SignInSchemaWithPassword.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to sign in.",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    }
  }

  try {
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      isVerificationToken: false,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            errors: {
              credentials: [error.message],
            },
            message: "Invalid credentials.",
            formData: {
              email: formData.get("email") as string,
              password: formData.get("password") as string,
            },
          }
        default:
          return {
            errors: {
              credentials: ["登录失败，请稍后再试"],
            },
            message: "Failed to sign in.",
            formData: {
              email: formData.get("email") as string,
              password: formData.get("password") as string,
            },
          }
      }
    }
  }
  redirect("/dashboard")
}

export async function signInWithVerificationToken(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = SignInSchema.safeParse({
    email: formData.get("email"),
    verificationToken: formData.get("verificationToken"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to sign in.",
      formData: {
        email: formData.get("email") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }
  verifyToken(validatedFields.data.email, validatedFields.data.verificationToken).then((res) => {
    if (!res) {
      return {
        errors: {
          verificationToken: ["验证码错误或已过期"],
        },
        message: "验证码错误或已过期",
        formData: {
          email: formData.get("email") as string,
          verificationToken: formData.get("verificationToken") as string,
        },
      }
    }
  })

  try {
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.verificationToken,
      isVerificationToken: true,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            errors: {
              credentials: [error.message],
            },
            message: "Invalid credentials.",
            formData: {
              email: formData.get("email") as string,
              verificationToken: formData.get("verificationToken") as string,
            },
          }
        default:
          return {
            errors: {
              credentials: ["登录失败"],
            },
            message: "Failed to sign in.",
            formData: {
              email: formData.get("email") as string,
              verificationToken: formData.get("verificationToken") as string,
            },
          }
      }
    }
  }
  redirect("/dashboard")
}

const SingUpSchema = z.object({
  email: z.string().email("邮件格式不正确"),
  password: z
    .string()
    .min(8, "密码至少8位")
    .regex(/[a-zA-Z]/, {
      message: "密码必须包含至少一个字母",
    })
    .regex(/\d/, {
      message: "密码必须包含至少一个数字",
    })
    .regex(/[@$!%*?&]/, {
      message: "密码必须包含至少一个符号",
    }),
  confirm_password: z.string().min(8, "密码至少8位"),
  verificationToken: z.string().length(6, "验证码必须是6位"),
})

export async function signUp(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = SingUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    verificationToken: formData.get("verificationToken"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to sign up.",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }

  if (validatedFields.data.password !== validatedFields.data.confirm_password) {
    return {
      errors: {
        confirm_password: ["两次输入的密码不一致"],
      },
      message: "两次输入的密码不一致",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }

  const { email, password, verificationToken } = validatedFields.data

  verifyToken(email, verificationToken).then((res) => {
    if (!res) {
      return {
        errors: {
          verificationToken: ["验证码错误或已过期"],
        },
        message: "验证码错误或已过期",
        formData: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          confirm_password: formData.get("confirm_password") as string,
          verificationToken: formData.get("verificationToken") as string,
        },
      }
    }
  })

  try {
    const isSigned = await db.user.findFirst({
      where: {
        email,
      },
    })
    if (isSigned) {
      return {
        errors: {
          email: ["该邮箱已被注册"],
        },
        message: "该邮箱已被注册",
        formData: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          confirm_password: formData.get("confirm_password") as string,
          verificationToken: formData.get("verificationToken") as string,
        },
      }
    }
    await db.user.create({
      data: {
        email,
        password,
        name: email.split("@")[0],
      },
    })
  } catch (error) {
    return {
      errors: {
        database: ["注册失败，请稍后再试"],
      },
      message: "注册失败，请稍后再试",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }
  toast.success("注册成功，请登录")
  // 2s后跳转到登录页面，以便用户查看提示信息
  setInterval(() => {
    redirect("/sign-in")
  }, 2000)
  return {
    errors: null,
    message: "注册成功，请登录",
  }
}

export async function generateToken(email: string, length = 6) {
  return "123456" // for test

  // const characters = "0123456789"
  // let result = ""
  // for (let i = 0; i < length; i++) {
  //   result += characters.charAt(Math.floor(Math.random() * characters.length))
  // }
  // try {
  //   await db.verificationToken.create({
  //     data: {
  //       identifier: email,
  //       token: result,
  //       expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
  //     },
  //   })
  // } catch (error) {
  //   return null
  // }
  // return result
}

export async function verifyToken(email: string, token: string) {
  return token === "123456" // for test

  // const verifiedToken = await db.verificationToken.findFirst({
  //   where: {
  //     identifier: email,
  //     token,
  //     expires: {
  //       gte: new Date(),
  //     },
  //   },
  // })

  // if (!verifiedToken) {
  //   return false
  // }

  // await db.verificationToken.delete({
  //   where: {
  //     id: verifiedToken.id,
  //   },
  // })
  // return true
}

const ResetPasswordSchema = z.object({
  email: z.string().email("邮件格式不正确"),
  password: z
    .string()
    .min(8, "密码至少8位")
    .regex(/[a-zA-Z]/, {
      message: "密码必须包含至少一个字母",
    })
    .regex(/\d/, {
      message: "密码必须包含至少一个数字",
    })
    .regex(/[@$!%*?&]/, {
      message: "密码必须包含至少一个符号",
    }),
  confirm_password: z.string().min(8, "密码至少8位"),
  verificationToken: z.string().length(6, "验证码必须是6位"),
})

export async function resetPassword(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = ResetPasswordSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    verificationToken: formData.get("verificationToken"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to sign up.",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }

  if (validatedFields.data.password !== validatedFields.data.confirm_password) {
    return {
      errors: {
        confirm_password: ["两次输入的密码不一致"],
      },
      message: "两次输入的密码不一致",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }

  const { email, password, verificationToken } = validatedFields.data

  verifyToken(email, verificationToken).then((res) => {
    if (!res) {
      return {
        errors: {
          verificationToken: ["验证码错误或已过期"],
        },
        message: "验证码错误或已过期",
        formData: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          confirm_password: formData.get("confirm_password") as string,
          verificationToken: formData.get("verificationToken") as string,
        },
      }
    }
  })

  try {
    await db.user.update({
      where: {
        email,
      },
      data: {
        password,
      },
    })
  } catch (error) {
    return {
      errors: {
        database: ["重置密码失败，请稍后再试"],
      },
      message: "重置密码失败，请稍后再试",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }
  toast.success("重置密码成功，请登录")
  // 2s后跳转到登录页面，以便用户查看提示信息
  setInterval(() => {
    redirect("/sign-in")
  }, 2000)
  return {
    errors: null,
    message: "重置密码成功，请登录",
  }
}

// const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailAction(userEmail: string, verificationToken: string) {
  return {
    error: null,
  } // for test

  // try {
  //   const { data, error } = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: [userEmail],
  //     subject: "您好，欢迎使用EduPath！",
  //     react: EmailTemplate({
  //       userEmail,
  //       verificationToken: verificationToken,
  //     }),
  //   })

  //   if (error) {
  //     return { error }
  //   }

  //   return { data }
  // } catch (error: any) {
  //   return { error: error.message }
  // }
}
