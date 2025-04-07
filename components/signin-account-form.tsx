"use client"

import { Key, Smartphone } from "lucide-react"
import { Input } from "./ui/input"
import Link from "next/link"
import { Button } from "./ui/button"
import { useActionState } from "react"
import { signInWithPassword, AuthState } from "@/lib/actions/auth"
import Form from "next/form"

export default function SignInAccountForm() {
  const initialState: AuthState = {
    message: null,
    errors: {},
    formData: { email: "", password: "" },
  }

  const [state, formAction, isPending] = useActionState(signInWithPassword, initialState)

  return (
    <Form action={formAction} className='space-y-4'>
      <div className='relative'>
        <Smartphone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='text'
          placeholder='请输入邮箱'
          className='pl-10 py-6 placeholder:text-stone-300'
          required
          name='email'
          defaultValue={state?.formData?.email || ""}
        />
      </div>
      {state?.errors?.email && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.email[0]}</div>
      )}
      <div className='relative'>
        <Key className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
        <Input
          type='password'
          placeholder='请输入密码'
          className='pl-10 py-6 placeholder:text-stone-300'
          required
          name='password'
          defaultValue={state?.formData?.password || ""}
        />
      </div>
      {state?.errors?.password && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.password[0]}</div>
      )}
      <div className='flex justify-end'>
        <Link
          href='/reset-password'
          className='text-indigo-500 text-sm font-normal hover:underline'
        >
          忘记密码？
        </Link>
      </div>
      {state?.errors?.credentials && (
        <div className='text-red-500 text-sm font-normal'>{state.errors?.credentials[0]}</div>
      )}

      <Button
        className='w-full py-6 bg-primary hover:bg-primary-600 rounded-2xl shadow-[1px_2px_12px_0px_rgba(0,0,0,0.04)] text-white text-base font-semibold leading-snug'
        type='submit'
        disabled={isPending}
      >
        {isPending ? "登录中..." : "登录"}
      </Button>
    </Form>
  )
}
