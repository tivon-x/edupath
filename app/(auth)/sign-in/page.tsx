import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import QQLogo from "@/components/qq-logo"
import WechatLogo from "@/components/wechat-logo"
import Link from "next/link"
import SignInAccountForm from "@/components/signin-account-form"
import SignInEmailForm from "@/components/signin-email-form"
import SignFormHeader from "@/components/sign-form-header"

export default function SignIn() {
  return (
    <>
      <SignFormHeader text='请快登录你的账号吧~' />

      <div className='mt-8'>
        <div className='space-y-4'>
          {/* Social login buttons */}
          <div className='grid gap-4'>
            <Button
              variant='outline'
              className='w-full py-6 rounded-xl bg-gray-100 text-zinc-700 text-base font-normal leading-snug'
              disabled
            >
              <QQLogo className='h-6 w-6' />
              QQ登录
            </Button>
            <Button
              variant='outline'
              className='w-full py-6 rounded-xl bg-gray-100 text-zinc-700 text-base font-normal leading-snug'
              disabled
            >
              <WechatLogo className='h-6 w-6' />
              微信登录
            </Button>
          </div>

          {/* Login tabs */}
          <Tabs
            defaultValue='verification'
            className='mt-8 text-zinc-800 text-base font-normal leading-snug'
          >
            <TabsList className='grid w-full h-11 grid-cols-2 rounded-full '>
              <TabsTrigger value='verification' className='rounded-full'>
                密码登录
              </TabsTrigger>
              <TabsTrigger value='email' className='rounded-full'>
                验证码登录
              </TabsTrigger>
            </TabsList>

            <TabsContent value='verification' className='space-y-4 mt-4'>
              <SignInAccountForm />
            </TabsContent>

            <TabsContent value='email' className='space-y-4 mt-4'>
              <SignInEmailForm />
            </TabsContent>
          </Tabs>

          <div className='text-center mt-4 text-base font-normal leading-snug'>
            <span className='text-zinc-500'>没有账号？</span>{" "}
            <Link href='/sign-up' className='text-primary hover:underline'>
              注册一个
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
