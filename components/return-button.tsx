import { ChevronsLeft } from "lucide-react"
import Link from "next/link"

export default function ReturnButton({
  href,
  returnedText = "返回上一步",
}: {
  href: string
  returnedText?: string
}) {
  return (
    <div className='flex items-center'>
      <Link
        href={href}
        className='w-36 h-10 flex items-center justify-center gap-1 rounded-4xl border bg-white/80 border-gray-100 text-neutral-500 leading-loose tracking-tighter hover:bg-gray-100 transition-all duration-200 ease-in-out shadow-sm'
      >
        <ChevronsLeft className='h-6 w-6' />
        {returnedText}
      </Link>
    </div>
  )
}
