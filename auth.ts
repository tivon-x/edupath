import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { emailOTP } from "better-auth/plugins"
import db from "./lib/db"
import { sendEmailAction } from "./lib/actions/auth"

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  plugins: [
    nextCookies(),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // Implement the sendVerificationOTP method to send the OTP to the user's email address
        if (type === "sign-in") {
          const decription = `请使用以下验证码登录您的帐户：`
          sendEmailAction(email, otp, decription)
        } else if (type === "email-verification") {
          const decription = `感谢您注册EduPath！请使用以下验证码来验证您的电子邮件地址并完成注册过程。`
          sendEmailAction(email, otp, decription)
        } else {
          // Send the OTP for password reset
          const decription = `请使用以下验证码重置您的密码：`
          sendEmailAction(email, otp, decription)
        }
        console.log("otp: ", otp)
      },
    }),
  ],
})
