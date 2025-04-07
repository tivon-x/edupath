import { Save } from "lucide-react"
import { Button } from "./ui/button"
import { DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"
import AvatarSelector from "./avatar-selector"
import { useActionState, useEffect, useState } from "react"
import { updateUserInfoByEmail, UserInfoState } from "@/lib/actions/auth"
import Form from "next/form"
import FieldError from "./field-error"
import { toast } from "sonner"
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation"

export function ProfileEditor({
  userName,
  userEmail,
  avatarUrl,
  gender,
}: {
  userName: string
  userEmail: string
  avatarUrl: string
  gender: string
}) {
  const initialState: UserInfoState = {
    errors: {},
    message: "",
    formData: {
      userName: userName,
      avatarUrl: avatarUrl,
      gender: gender,
    },
  }

  const updateUserInfo = updateUserInfoByEmail.bind(null, userEmail)

  const [state, formAction, isPending] = useActionState(updateUserInfo, initialState)

  useEffect(() => {
    const handleUserSignOut = async () => {
      if (state.message === "password_success") {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              redirect("/sign-in")
            },
          },
        })
      }
      // if (state.message) {
      //   toast.success(state.message)
      // }
    }

    handleUserSignOut()
  }, [state.message])

  const avatars = [
    "https://avatar.iran.liara.run/public/42",
    "https://avatar.iran.liara.run/public/32",
    "https://avatar.iran.liara.run/public/50",
    "https://avatar.iran.liara.run/public/1",
    "https://avatar.iran.liara.run/public/77",
    "https://avatar.iran.liara.run/public/59",
    "https://avatar.iran.liara.run/public/100",
    "https://avatar.iran.liara.run/public/94",
  ]
  const avatarIndex = avatars.findIndex((avatar) => avatar === avatarUrl)
  const [selectedAvatar, setSelectedAvatar] = useState(avatarIndex == -1 ? 0 : avatarIndex)

  return (
    <Form action={formAction}>
      <DialogHeader>
        <DialogTitle className='text-zinc-700 font-semibold leading-snug tracking-tight'>
          编辑信息
        </DialogTitle>
      </DialogHeader>
      <div className='space-y-2 mb-5 mt-4'>
        {/* Avatar Section */}
        <div className='space-y-2'>
          <Label htmlFor='avatar' className='text-sm text-gray-500 leading-tight tracking-tight'>
            我的头像
          </Label>
          <AvatarSelector
            avatars={avatars}
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
          <Input name='avatarUrl' type='hidden' value={avatars[selectedAvatar]} required />
        </div>

        {/* Name Field */}
        <div className='space-y-2'>
          <Label htmlFor='userName' className='text-sm text-gray-500 leading-tight tracking-tight'>
            姓名
          </Label>
          <Input name='userName' defaultValue={state.formData?.userName} type='text' required />
        </div>
        <FieldError errors={state.errors?.userName} />

        {/* Gender Field */}
        <div className='space-y-2'>
          <Label htmlFor='gender' className='text-sm text-gray-500 leading-tight tracking-tight'>
            性别
          </Label>
          <Select defaultValue={state.formData?.gender} name='gender'>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='选择性别' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='MALE'>男</SelectItem>
              <SelectItem value='FEMALE'>女</SelectItem>
              <SelectItem value='UNKNOWN'>未知</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Email Field */}
        {/* <div className='space-y-2'>
          <Label htmlFor='userEmail' className='text-sm text-gray-500 leading-tight tracking-tight'>
            邮件
          </Label>
          <Input
            name='userEmail'
            type='email'
            defaultValue={state.formData?.userEmail}
            placeholder='请填写邮箱'
            required
          />
        </div>
        <FieldError errors={state.errors?.userEmail} /> */}

        {/* Phone Field */}

        {/* New Password Field */}

        <div className='space-y-2'>
          <Label
            htmlFor='new_password'
            className='text-sm text-gray-500 leading-tight tracking-tight'
          >
            新密码
          </Label>
          <div className='relative'>
            <Input
              name='newPassword'
              type='password'
              placeholder='请填写新密码，修改密码后需要重新登陆'
            />
          </div>
        </div>
        <FieldError errors={state.errors?.newPassword} />
        <FieldError errors={state.errors?.database} />

        {/* Confirm Password Field */}
      </div>
      <DialogFooter>
        <Button
          className='w-full font-semibold leading-tight tracking-tight'
          type='submit'
          disabled={isPending}
        >
          <Save className='w-5 h-5' />
          {isPending ? "保存中..." : "保存编辑"}
        </Button>
      </DialogFooter>
    </Form>
  )
}
