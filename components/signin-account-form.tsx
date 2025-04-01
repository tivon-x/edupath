"use client"

import { Key, Smartphone } from "lucide-react"
import { Input } from "./ui/input"
import Link from "next/link"
import { Button } from "./ui/button"

export default function SignInAccountForm() {
  return (
    <form className='space-y-4'>
      <div className='relative'>
        <Smartphone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='text'
          placeholder='请输入账号'
          className='pl-10 py-6 placeholder:text-stone-300'
          required
          name='account'
        />
      </div>
      <div className='relative'>
        <Key className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='password'
          placeholder='请输入密码'
          className='pl-10 py-6 placeholder:text-stone-300'
          required
          name='password'
        />
      </div>
      <div className='flex justify-end'>
        <Link
          href='/reset-password'
          className='text-indigo-500 text-sm font-normal hover:underline'
        >
          忘记密码？
        </Link>
      </div>
      <Button
        className='w-full py-6 bg-primary hover:bg-primary-600 rounded-2xl shadow-[1px_2px_12px_0px_rgba(0,0,0,0.04)] text-white text-base font-semibold leading-snug'
        type='submit'
      >
        登录
      </Button>
    </form>
  )
}
