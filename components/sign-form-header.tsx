import { EduPathLogo } from "./edupath-logo"

export default function SignFormHeader({ text }: { text: string }) {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='flex items-center mb-2'>
        <EduPathLogo size='lg' />
      </div>
      <h2 className='mt-4 text-lg font-medium text-black leading-relaxed'>{text}</h2>
    </div>
  )
}
