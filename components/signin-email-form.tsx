"use client"

import { Key, Mail } from "lucide-react"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

export default function SignInEmailForm() {
  return (
    <form className='space-y-4'>
      <div className='relative'>
        <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='text'
          placeholder='请输入邮箱'
          className='pl-10 py-6 placeholder:text-stone-300'
          name='email'
        />
      </div>
      <div className='relative'>
        <Key className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='text'
          placeholder='请输入验证码'
          className='pl-10 py-6 pr-24 placeholder:text-stone-300'
          name='verificationCode'
        />
        <div className='absolute right-0 top-0 h-full px-3 flex items-center'>
          <Separator
            orientation='vertical'
            className='w-0 bg-primary data-[orientation=vertical]:h-1/2'
          />
          <Button variant='link' className='text-primary'>
            获取验证码
          </Button>
        </div>
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
