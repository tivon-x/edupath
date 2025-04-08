import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Search, ShoppingCart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { auth } from "@/auth" // path to your Better Auth server instance
import { headers } from "next/headers"
import db from "@/lib/db"
import Header from "@/components/header"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  })
  const user = session?.user
  const userName = user?.name || "李华"
  const userEmail = user?.email || ""
  const avatarUrl = user?.image || "https://avatar.iran.liara.run/public/42"
  const userInfo = await db.user.findFirst({
    where: { id: user?.id },
    select: {
      gender: true,
    },
  })

  const gender = userInfo?.gender || "UNKNOWN"

  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar userName={userName} userEmail={userEmail} avatarUrl={avatarUrl} gender={gender} />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header userName={userName} />
        <main className='flex-1 overflow-auto py-6 pl-6 pr-18'>{children}</main>
      </div>
    </div>
  )
}
