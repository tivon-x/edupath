import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { EduPathLogo } from "@/components/edupath-logo"
import { Eye, EyeOff, Smartphone, Lock } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className='flex min-h-screen'>
      {/* Left side - Purple background */}
      <div className='hidden md:block w-1/2 bg-primary-500 rounded-r-3xl'></div>

      {/* Right side - Registration form */}
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md space-y-8'>
          <div className='flex flex-col items-center text-center'>
            <div className='flex items-center mb-2'>
              <EduPathLogo size='lg' />
            </div>
            <h2 className='mt-4 text-xl font-medium'>来注册你的账号吧~</h2>
          </div>

          <div className='mt-8'>
            <div className='space-y-4'>
              <div className='text-center'>
                <h3 className='text-lg font-medium'>账号密码注册</h3>
              </div>

              <div className='space-y-4 mt-4'>
                <div className='relative'>
                  <Smartphone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                  <Input type='text' placeholder='请输入手机号' className='pl-10 py-6' />
                </div>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                  <Input
                    type='password'
                    placeholder='密码（8-20字，数字/字母/符号组合）'
                    className='pl-10 py-6'
                  />
                  <Button
                    variant='ghost'
                    className='absolute right-0 top-0 h-full px-3 text-gray-400'
                  >
                    <Eye className='h-5 w-5' />
                  </Button>
                </div>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                  <Input type='password' placeholder='确认密码' className='pl-10 py-6' />
                  <Button
                    variant='ghost'
                    className='absolute right-0 top-0 h-full px-3 text-gray-400'
                  >
                    <EyeOff className='h-5 w-5' />
                  </Button>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                  <Input type='text' placeholder='请输入短信验证码' className='col-span-2 py-6' />
                  <Button variant='outline' className='h-full'>
                    获取验证码
                  </Button>
                </div>

                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    勾选已阅读同意{" "}
                    <Link href='/terms' className='text-primary'>
                      《用户隐私协议》
                    </Link>
                  </label>
                </div>

                <Button className='w-full py-6 bg-primary hover:bg-primary-600'>注册</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 text-center text-gray-500 text-sm'>
          EduPath助你精准规划升学与就业之路，让每一步都迈向成功!
        </div>
      </div>
    </div>
  )
}
