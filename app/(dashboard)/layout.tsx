import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Search, ShoppingCart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar userName='李华' userPhone='13795938663' />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <header className='bg-white border-b h-16 flex items-center justify-between px-6'>
          <div>
            <h1 className='text-xl font-bold'>欢迎回来，李华同学!</h1>
            <p className='text-sm text-gray-500'>以梦为马，不负韶华</p>
          </div>

          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <Search className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <ShoppingCart className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <Bell className='h-5 w-5' />
            </Button>
          </div>
        </header>

        <main className='flex-1 overflow-auto p-6'>{children}</main>
      </div>
    </div>
  )
}
