import ResumeOptimizeForm from "@/components/resume-optimize-form"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResumeBuilderPage() {
  return (
    <div className='space-y-5'>
      <ResumeOptimizeForm />
      <div className='flex justify-center'>
        {/* 这个要做一个检验是否有数据的功能，如果没有数据就不显示这个按钮 */}
        <Link
          href={"/resume/template"}
          className='h-10 gap-2 bg-primary-500 hover:bg-primary-600 px-8 rounded-[60px] flex justify-center items-center text-white text-xl leading-6 font-medium tracking-wide shadow-[4px_4px_2px_3px_rgba(0,0,0,0.25)]'
        >
          <div>下一步：选择简历模板</div>
          <ArrowRight className='h-6 w-6' />
        </Link>
      </div>
    </div>
  )
}
