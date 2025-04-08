"use client"

import { Search, ShoppingCart, Bell } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

export default function Header({ userName }: { userName: string }) {
  return (
    <header className='h-16 flex items-center justify-between px-6 mt-6'>
      <div className='inline-flex flex-col justify-start items-start'>
        <h1 className='text-xl font-bold self-stretch leading-9'>欢迎回来，{userName}同学!</h1>
        <p className='self-stretch text-base text-gray-400 leading-7'>以梦为马，不负韶华</p>
      </div>

      <div className='flex items-center gap-4'>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full'
          onClick={() => toast.success("Hello")}
        >
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
  )
}
