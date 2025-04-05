import { Separator } from "@/components/ui/separator"
import SignUpForm from "@/components/signup-form"
import SignFormHeader from "@/components/sign-form-header"

export default function SignUpPage() {
  return (
    <>
      <SignFormHeader text='来注册你的账号吧~' />

      <div className='mt-8'>
        <div className='space-y-4'>
          <div className='w-full inline-flex justify-start items-center gap-3'>
            <Separator className='flex-1 h-0  outline-1 outline-offset-[-0.50px] outline-gray-200'></Separator>
            <div className='text-center justify-start text-zinc-800 text-base font-normal leading-snug'>
              账号密码注册
            </div>
            <Separator className='flex-1 h-0 outline-1 outline-offset-[-0.50px] outline-gray-200'></Separator>
          </div>

          <SignUpForm />
        </div>
      </div>
    </>
  )
}
