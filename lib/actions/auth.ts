"use server"

import { z } from "zod"
import db from "../db"
import { auth } from "@/auth"
import { APIError } from "better-auth/api"
import { redirect } from "next/navigation"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"

type BaseState = {
  errors?: BaseError | null
  message?: string | null
}

const SignInSchema = z.object({
  email: z.string().email("邮件格式不正确"),
  password: z.string().min(8, "密码至少8位"),
  verificationToken: z.string().length(6, "验证码必须是6位"),
})

const SignInSchemaWithPassword = SignInSchema.omit({
  verificationToken: true,
})

type BaseError = {
  email?: string[]
  password?: string[]
  verificationToken?: string[]
  confirm_password?: string[]
  credentials?: string[]
  database?: string[]
}

export type AuthState = BaseState & {
  formData?: {
    email?: string
    password?: string
    verificationToken?: string
    confirm_password?: string
  }
}

export async function signInWithPassword(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
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
          credentials: ["邮箱或密码错误"],
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
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
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
          credentials: ["邮箱或验证码错误"],
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

export async function signUp(prevState: AuthState, formData: FormData): Promise<AuthState> {
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
  redirect("/sign-in")
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

export async function resetPassword(prevState: AuthState, formData: FormData): Promise<AuthState> {
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
  redirect("/sign-in")
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

export type UserInfoState = {
  errors?: {
    userName?: string[]
    gender?: string[]
    avatarUrl?: string[]
    database?: string[]
    newPassword?: string[]
  }
  message?: string | null
  formData?: {
    userName: string
    avatarUrl: string
    gender: string
  }
}

const UserInfoSchema = z.object({
  userName: z.string().min(1, "姓名不能为空"),
  avatarUrl: z.string().url("头像链接格式不正确"),
  gender: z.enum(["MALE", "FEMALE", "UNKNOWN"], {
    errorMap: () => ({ message: "请选择正确的性别" }),
  }),
  newPassword: z
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
    })
    .optional(),
})

export async function updateUserInfoByEmail(
  userEmail: string,
  prevState: UserInfoState,
  formData: FormData
): Promise<UserInfoState> {
  const userInfo = {
    userName: formData.get("userName") as string,
    avatarUrl: formData.get("avatarUrl") as string,
    gender: formData.get("gender") as string,
  }

  const validatedFields = UserInfoSchema.safeParse({
    ...userInfo,
    newPassword: formData.get("newPassword") || undefined,
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "",
      formData: userInfo,
    }
  }

  const { userName, avatarUrl, gender, newPassword } = validatedFields.data

  try {
    const user = await db.user.update({
      where: { email: userEmail },
      data: {
        name: userName,
        image: avatarUrl,
        gender: gender,
      },
    })
    if (newPassword) {
      try {
        const ctx = await auth.$context
        const hashedPassword = await ctx.password.hash(newPassword)
        await ctx.internalAdapter.updatePassword(user.id, hashedPassword)
      } catch (error) {
        console.error("Error updating password:", error)
        return {
          errors: {
            database: [(error as Error).message],
          },
          message: "更新密码失败",
          formData: userInfo,
        }
      }
    }
  } catch (error) {
    return {
      errors: {
        database: ["更新用户信息失败"],
      },
      message: "更新用户信息失败",
      formData: userInfo,
    }
  }
  revalidatePath("/dashboard")
  if (newPassword) {
    return {
      errors: {},
      message: "password_success",
      formData: userInfo,
    }
  }
  return {
    errors: {},
    message: "更新用户信息成功",
    formData: userInfo,
  }
}
