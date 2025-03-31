import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EduPathLogo } from "@/components/edupath-logo"
import { Smartphone, Lock, User } from "lucide-react"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className='w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12'>
      <div className='w-full max-w-md space-y-8'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex items-center mb-2'>
            <EduPathLogo size='lg' />
          </div>
          <h2 className='mt-4 text-xl font-medium'>请快登录你的账号吧~</h2>
        </div>

        <div className='mt-8'>
          <div className='space-y-4'>
            {/* Social login buttons */}
            <div className='grid gap-4'>
              <Button variant='outline' className='w-full py-6 rounded-xl bg-gray-100'>
                <User className='mr-2 h-5 w-5' />
                QQ登录
              </Button>
              <Button variant='outline' className='w-full py-6 rounded-xl bg-gray-100'>
                <User className='mr-2 h-5 w-5' />
                微信登录
              </Button>
            </div>

            {/* Login tabs */}
            <Tabs defaultValue='phone' className='mt-8'>
              <TabsList className='grid w-full grid-cols-2 rounded-full'>
                <TabsTrigger value='phone' className='rounded-full'>
                  账号密码登录
                </TabsTrigger>
                <TabsTrigger value='verification' className='rounded-full'>
                  手机验证码登录
                </TabsTrigger>
              </TabsList>

              <TabsContent value='phone' className='space-y-4 mt-4'>
                <div className='space-y-4'>
                  <div className='relative'>
                    <Smartphone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input type='text' placeholder='请输入手机号' className='pl-10 py-6' />
                  </div>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input
                      type='password'
                      placeholder='请输入验证码'
                      className='pl-10 py-6 pr-24'
                    />
                    <Button
                      variant='ghost'
                      className='absolute right-0 top-0 h-full px-3 text-primary'
                    >
                      获取验证码
                    </Button>
                  </div>
                  <div className='flex justify-end'>
                    <Link href='/forgot-password' className='text-sm text-primary hover:underline'>
                      忘记密码？
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value='verification' className='space-y-4 mt-4'>
                <div className='space-y-4'>
                  <div className='relative'>
                    <Smartphone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input type='text' placeholder='请输入手机号' className='pl-10 py-6' />
                  </div>
                  <div className='relative'>
                    <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <Input type='text' placeholder='请输入验证码' className='pl-10 py-6 pr-24' />
                    <Button
                      variant='ghost'
                      className='absolute right-0 top-0 h-full px-3 text-primary'
                    >
                      获取验证码
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Button className='w-full py-6 bg-primary hover:bg-primary-600'>登录</Button>

            <div className='text-center mt-4'>
              <span className='text-gray-600'>没有账号？</span>{" "}
              <Link href='/register' className='text-primary hover:underline'>
                注册一个
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16 text-center text-gray-500 text-sm'>
        EduPath助你精准规划升学与就业之路，让每一步都迈向成功!
      </div>
    </div>
  )
}
