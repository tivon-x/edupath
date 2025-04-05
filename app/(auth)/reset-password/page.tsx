import ResetPasswordForm from "@/components/reset-password-form"
import SignFormHeader from "@/components/sign-form-header"

export default function ResetPasswordPage() {
  return (
    <>
      <SignFormHeader text='重置账号密码' />
      <div className='mt-8'>
        <div className='space-y-4'>
          <ResetPasswordForm />
        </div>
      </div>
    </>
  )
}
