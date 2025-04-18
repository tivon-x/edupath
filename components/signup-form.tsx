"use client"

import { Smartphone, Lock } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import Link from "next/link"
import { useActionState, useState } from "react"
import { signUp, AuthState } from "@/lib/actions/auth"
// import { toast } from "sonner"
import Form from "next/form"
// import { authClient } from "@/lib/auth-client"

export default function SignUpForm() {
  const [email, setEmail] = useState("")
  // const handleTokenClick = async () => {
  //   const { data, error } = await authClient.emailOtp.sendVerificationOtp({
  //     email: email,
  //     type: "sign-in", // or "email-verification", "forget-password"
  //   })
  //   if (error) {
  //     console.error("Error sending verification token:", error)
  //     toast.error("验证码发送失败，请稍后再试")
  //   } else {
  //     toast.success("验证码已发送到您的电子邮件")
  //   }
  // }

  const initialState: AuthState = {
    errors: {},
    message: "",
    formData: {},
  }
  const [state, formAction, isPending] = useActionState(signUp, initialState)

  return (
    <Form className='space-y-4 mt-4' action={formAction}>
      <div className='relative'>
        <Smartphone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='email'
          placeholder='请输入邮箱账号'
          required
          className='pl-10 py-6 placeholder:text-stone-300'
          name='email'
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {state?.errors?.email && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.email[0]}</div>
      )}
      <div className='relative'>
        <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='password'
          placeholder='密码（8-20字，数字/字母/符号组合）'
          className='pl-10 py-6 placeholder:text-stone-300'
          required
          name='password'
          defaultValue={state?.formData?.password || ""}
        />
      </div>
      {state?.errors?.password && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.password[0]}</div>
      )}
      <div className='relative'>
        <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='password'
          placeholder='确认密码'
          className='pl-10 py-6 placeholder:text-stone-300'
          name='confirm_password'
          defaultValue={state?.formData?.confirm_password || ""}
          required
        />
      </div>
      {state?.errors?.confirm_password && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.confirm_password[0]}</div>
      )}
      {/* <div className='grid grid-cols-4 gap-20'>
        <Input
          type='text'
          placeholder='请输入验证码'
          className='col-span-2 py-6 placeholder:text-stone-300'
          required
          name='verificationToken'
          defaultValue={state?.formData?.verificationToken || ""}
        />
        <Button
          variant='outline'
          className='h-full col-span-2 text-zinc-700 text-base font-normal leading-snug'
          onClick={(e) => {
            e.preventDefault()
            handleTokenClick()
          }}
          type='button'
          disabled={isPending}
        >
          获取验证码
        </Button>
      </div> */}
      {/* {state?.errors?.verificationToken && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.verificationToken[0]}</div>
      )} */}
      {state?.errors?.database && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.database[0]}</div>
      )}
      <Button
        className='w-full py-6 bg-primary hover:bg-primary-600 rounded-4xl shadow-[1px_2px_12px_0px_rgba(0,0,0,0.04)] text-base text-white font-normal leading-snug'
        type='submit'
        disabled={isPending}
      >
        {isPending ? "注册中..." : "注册"}
      </Button>
      <div className='flex justify-center items-center space-x-4'>
        <Checkbox id='terms' checked required value='term' name='terms' />
        <label
          htmlFor='terms'
          className='text-base font-medium leading-sung peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          <span className='text-stone-400'>默认已阅读同意 </span>
          <Link href='/terms' className='text-sky-500 leading'>
            《用户隐私协议》
          </Link>
        </label>
      </div>
    </Form>
  )
}
