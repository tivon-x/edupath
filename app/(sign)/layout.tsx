export default function SignLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='hidden md:block w-1/2 bg-primary-500 rounded-r-3xl'></div>
      {children}
    </div>
  )
}
