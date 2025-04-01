export default function SignLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex min-h-screen'>
      <div className='hidden md:block w-1/2 bg-primary-500 rounded-r-3xl'></div>
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md space-y-8'>{children}</div>
        <div className='mt-14 text-center text-neutral-400 text-lg font-normal leading-snug'>
          EduPath助你精准规划升学与就业之路，让每一步都迈向成功!
        </div>
      </div>
    </div>
  )
}
