import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Search, ShoppingCart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { auth } from "@/auth" // path to your Better Auth server instance
import { headers } from "next/headers"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  })
  const user = session?.user
  const userName = user?.name || "李华"
  const userEmail = user?.email || ""
  const avatarUrl = user?.image || "./default.png"

  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar userName={userName} userEmail={userEmail} avatarUrl={avatarUrl} />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <header className='h-16 flex items-center justify-between px-6 mt-6'>
          <div className='inline-flex flex-col justify-start items-start'>
            <h1 className='text-xl font-bold self-stretch leading-9'>欢迎回来，{userName}同学!</h1>
            <p className='self-stretch text-base text-gray-400 leading-7'>以梦为马，不负韶华</p>
          </div>

          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <Search className='h-6 w-6' />
            </Button>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <ShoppingCart className='h-6 w-6' />
            </Button>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <Bell className='h-6 w-6' />
            </Button>
          </div>
        </header>
        <main className='flex-1 overflow-auto p-6'>{children}</main>
      </div>
    </div>
  )
}
