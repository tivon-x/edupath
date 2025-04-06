"use server"

import { z } from "zod"
import db from "../db"
import { auth } from "@/auth"
import { APIError } from "better-auth/api"
import { redirect } from "next/navigation"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import { toast } from "sonner"
import { headers } from "next/headers"

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
    await auth.api.signInEmail({
      body: {
        email: validatedFields.data.email,
        password: validatedFields.data.password,
      },
    })
  } catch (error) {
    if (error instanceof APIError) {
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
    } else {
      return {
        errors: {
          database: ["登录失败，请稍后再试"],
        },
        message: "登录失败，请稍后再试",
        formData: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        },
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
  try {
    await auth.api.signInEmailOTP({
      body: {
        email: validatedFields.data.email,
        otp: validatedFields.data.verificationToken,
      },
    })
  } catch (error) {
    if (error instanceof APIError) {
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
    } else {
      return {
        errors: {
          database: ["登录失败，请稍后再试"],
        },
        message: "登录失败，请稍后再试",
        formData: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        },
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
  // verificationToken: z.string().length(6, "验证码必须是6位"),
})

export async function signUp(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = SingUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    // verificationToken: formData.get("verificationToken"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to sign up.",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        // verificationToken: formData.get("verificationToken") as string,
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

  const { email, password } = validatedFields.data

  try {
    const response = await auth.api.signUpEmail({
      body: {
        email: email,
        password: password,
        name: email.split("@")[0],
      },
      asResponse: true,
    })
    if (!response.ok) {
      return {
        errors: {
          database: ["用户已存在"],
        },
        message: "用户已存在",
        formData: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          confirm_password: formData.get("confirm_password") as string,
          verificationToken: formData.get("verificationToken") as string,
        },
      }
    }
  } catch (error) {
    return {
      errors: {
        verificationToken: ["系统错误，请稍后再试"],
      },
      message: "系统错误，请稍后再试",
      formData: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        confirm_password: formData.get("confirm_password") as string,
        verificationToken: formData.get("verificationToken") as string,
      },
    }
  }

  toast("注册成功，请登录")
  // 2s后跳转到登录页面，以便用户查看提示信息
  setInterval(() => {
    redirect("/sign-in")
  }, 2000)
  return {
    errors: null,
    message: "注册成功，请登录",
  }
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

  try {
    const response = await auth.api.resetPasswordEmailOTP({
      body: {
        email: email,
        otp: verificationToken,
        password: password,
      },
      asResponse: true,
    })
    if (!response.ok) {
      return {
        errors: {
          database: ["用户不存在"],
        },
        message: "用户不存在",
        formData: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          confirm_password: formData.get("confirm_password") as string,
          verificationToken: formData.get("verificationToken") as string,
        },
      }
    }
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

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailAction(
  userEmail: string,
  verificationToken: string,
  description: string
) {
  // try {
  //   const { data, error } = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: [userEmail],
  //     subject: "您好，欢迎使用EduPath！",
  //     react: EmailTemplate({
  //       userEmail,
  //       verificationToken: verificationToken,
  //       description: description,
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
