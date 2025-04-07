import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import { ArrowRight } from "lucide-react"

type Props = {
  type: string
  date: string
  status: string[]
  link: string
  leftIcon?: React.ReactNode
}

export default function HistoryCard({ type, date, status, link, leftIcon }: Props) {
  return (
    <Card>
      <CardContent className=''>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center'>
            {leftIcon}
          </div>
          <div className='space-y-1'>
            <div className='flex items-center justify-between gap-2'>
              <p className='font-medium text-base leading-loose'>{type}</p>
              <span className='text-xs bg-primary-500 text-white px-2 py-0.5 rounded-full'>
                {date}
              </span>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1 text-xs text-gray-500'>
                <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                {status[0]}
              </div>
              <div className='flex items-center gap-1 text-xs text-gray-500'>
                <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                {status[1]}
              </div>
            </div>
          </div>
          <Link
            href={link}
            className='h-8.5 w-8.5 ml-auto rounded-full bg-primary items-center justify-center flex hover:bg-primary-600 transition duration-200'
          >
            <ArrowRight className='h-6 w-6 text-white ' />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
