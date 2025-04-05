"use client"

import { Key, Mail } from "lucide-react"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { toast } from "sonner"
import {
  generateToken,
  sendEmailAction,
  signInWithVerificationToken,
  State,
} from "@/lib/actions/auth"
import { useActionState, useState } from "react"

export default function SignInEmailForm() {
  const [email, setEmail] = useState("")
  const handleTokenClick = async () => {
    const verificationToken = await generateToken(email)
    if (verificationToken === null) {
      toast.error("验证码发送失败，请稍后再试")
      return
    } else {
      const res = await sendEmailAction(email, verificationToken)
      if (res.error) {
        toast.error("验证码发送失败，请稍后再试")
        return
      }
      toast.success("验证码已发送，请注意查收")
    }
  }

  const initialState: State = {
    errors: {},
    message: null,
    formData: {
      email: email,
      verificationToken: "",
    },
  }
  const [state, formAction, isPending] = useActionState(signInWithVerificationToken, initialState)

  return (
    <form className='space-y-4' action={formAction}>
      <div className='relative'>
        <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='text'
          placeholder='请输入邮箱'
          className='pl-10 py-6 placeholder:text-stone-300'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {state?.errors?.email && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.email[0]}</div>
      )}
      <div className='relative'>
        <Key className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='text'
          placeholder='请输入验证码'
          className='pl-10 py-6 pr-24 placeholder:text-stone-300'
          name='verificationToken'
          value={state?.formData?.verificationToken || ""}
        />
        <div className='absolute right-0 top-0 h-full px-3 flex items-center'>
          <Separator
            orientation='vertical'
            className='w-0 bg-primary data-[orientation=vertical]:h-1/2'
          />
          <Button variant='link' className='text-primary' onClick={handleTokenClick}>
            获取验证码
          </Button>
        </div>
      </div>
      {state?.errors?.verificationToken && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.verificationToken[0]}</div>
      )}
      {state?.errors?.credentials && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.credentials[0]}</div>
      )}
      <Button
        className='w-full py-6 bg-primary hover:bg-primary-600 rounded-2xl shadow-[1px_2px_12px_0px_rgba(0,0,0,0.04)] text-white text-base font-semibold leading-snug'
        type='submit'
        disabled={isPending}
      >
        登录
      </Button>
    </form>
  )
}
