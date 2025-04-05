import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./lib/db"
import bcrypt from "bcryptjs"
import { createId } from "@paralleldrive/cuid2"
import { encode as defaultEncode } from "next-auth/jwt"

const adapter = PrismaAdapter(db)
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials || !credentials.email) {
          return null
        }

        const { email, password, isVerificationToken } = credentials as {
          email: string
          password?: string
          isVerificationToken?: boolean
        }

        const user = await fetchUserByEmail(email)
        if (!user) throw new Error("邮件名称错误")

        if (!isVerificationToken && password && user.password) {
          const passwordMatch = await bcrypt.compare(password, user.password)
          if (!passwordMatch) {
            throw new Error("密码错误")
          }
        }
        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.credentials = true
      }
      return token
    },
  },

  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = createId()

        if (!params.token.sub) {
          throw new Error("No user ID found in token")
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        })

        if (!createdSession) {
          throw new Error("Failed to create session")
        }

        return sessionToken
      }
      return defaultEncode(params)
    },
  },
})

async function fetchUserByEmail(email: string) {
  const user = await db.user.findFirst({
    where: { email },
  })
  if (!user) return null
  return user
}
