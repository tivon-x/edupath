import HistoryCard from "@/components/history-card"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, ChevronRight, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResumePage() {
  const resumes = [
    {
      type: "产品岗位",
      date: "2025-03-17",
      status: ["已保存", "已编辑"],
      link: "/resume",
    },
    {
      type: "算法工程师",
      date: "2025-03-17",
      status: ["已保存", "已编辑"],
      link: "/resume",
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center'>
        <Image src='/resume.png' alt='Resume illustration' width={254} height={205} />
      </div>

      <Card className='w-150 h-40 bg-primary-400 rounded-[45px] shadow-[15px_15px_30px_0px_rgba(0,0,0,0.18)] flex items-center justify-center'>
        <CardContent className='p-8 flex items-center gap-8'>
          <div className='rounded-full p-4'>
            <FileText className='h-15 w-15 text-white' />
          </div>

          <div className='flex-1'>
            <h2 className='text-5xl font-bold leading-[89.60px] tracking-[11.52px] text-white'>
              简历优化
            </h2>
          </div>

          <Link
            href={"/resume/optimize"}
            className='bg-white text-primary-500 rounded-full w-14 h-14 flex items-center justify-center hover:bg-primary-100'
          >
            <ArrowRight className='h-8 w-8' />
          </Link>
        </CardContent>
      </Card>

      <div className='w-150 mt-4 space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='bg-primary rounded-3xl w-32 h-8 text-center flex items-center justify-center'>
            <div className='text-base font-bold text-white leading-7 tracking-wide'>
              简历优化历史
            </div>
          </div>
          <Link href={"/resume"} className='text-gray-800 text-base flex items-center leading-7'>
            查看全部
            <ChevronRight />
          </Link>
        </div>

        <div className='space-y-4'>
          {resumes.map((resume, index) => (
            <HistoryCard
              key={index}
              type={resume.type}
              status={resume.status}
              link={resume.link}
              date={resume.date}
              leftIcon={<Briefcase className='w-5 h-5 text-primary-500' />}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
