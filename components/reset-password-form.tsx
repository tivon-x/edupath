"use client"

import { Smartphone, Lock } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SignUpForm() {
  return (
    <form className='space-y-4 mt-4'>
      <div className='relative'>
        <Smartphone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='email'
          placeholder='请输入邮箱账号'
          required
          className='pl-10 py-6 placeholder:text-stone-300'
          name='email'
        />
      </div>
      <div className='relative'>
        <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='password'
          placeholder='密码（8-20字，数字/字母/符号组合）'
          className='pl-10 py-6 placeholder:text-stone-300'
          required
          name='password'
        />
      </div>
      <div className='relative'>
        <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='password'
          placeholder='确认密码'
          className='pl-10 py-6 placeholder:text-stone-300'
          name='confirm_password'
          required
        />
      </div>
      <div className='grid grid-cols-4 gap-20'>
        <Input
          type='text'
          placeholder='请输入验证码'
          className='col-span-2 py-6 placeholder:text-stone-300'
          required
          name='sms_code'
        />
        <Button
          variant='outline'
          className='h-full col-span-2 text-zinc-700 text-base font-normal leading-snug'
        >
          获取验证码
        </Button>
      </div>

      <Button className='w-full py-6 bg-primary hover:bg-primary-600 rounded-4xl shadow-[1px_2px_12px_0px_rgba(0,0,0,0.04)] text-base text-white font-normal leading-snug'>
        重置密码
      </Button>
    </form>
  )
}
