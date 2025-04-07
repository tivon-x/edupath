import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GraduationCap, FileText } from "lucide-react"
import Link from "next/link"

export default function AcademicPlanningPage() {
  return (
    <div className='space-y-12'>
      <div className='bg-indigo-500/75 rounded-3xl px-14 py-4 text-white space-y-2 shadow-[15px_15px_10px_0px_rgba(0,0,0,0.09)]'>
        <h1 className='text-3xl font-bold leading-[48px] tracking-wide'>Step.1</h1>
        <h2 className='text-3xl font-bold leading-[48px] tracking-[6px]'>
          请选择你的学业/职业规划之路
        </h2>
        <p className='text-white/80 leading-7 tracking-[3.60px] pl-20'>有时，选择比努力更重要</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-36 px-32'>
        <Card className='rounded-[50px] shadow-[15px_15px_10px_10px_rgba(0,0,0,0.21)] hover:shadow-xl transition-shadow pt-0'>
          <div className='bg-primary-400 h-24 flex items-center justify-center rounded-tl-[50px] rounded-tr-[50px]'>
            <GraduationCap className='h-16 w-20 text-white' />
          </div>

          <CardContent className='p-4 flex flex-col justify-center items-center'>
            <h3 className='text-4xl font-bold text-center leading-14 tracking-wide'>升学</h3>
            <p className='text-center text-violet-950 mb-4 leading-loose tracking-[4.20px]'>
              保研、考研
            </p>

            <Link
              href={"/planning/create/academic"}
              className='rounded-[999px] w-1/2 h-8 flex items-center justify-center text-white font-bold bg-primary-500 hover:bg-primary-600'
            >
              <ArrowRight className='h-5 w-7' />
            </Link>
          </CardContent>
        </Card>

        <Card className='rounded-[50px] shadow-[15px_15px_10px_10px_rgba(0,0,0,0.21)] hover:shadow-xl transition-shadow pt-0'>
          <div className='bg-blue-400 h-24 flex items-center justify-center rounded-tl-[50px] rounded-tr-[50px]'>
            <FileText className='h-16 w-20 text-white' />
          </div>
          <CardContent className='p-4 flex flex-col justify-center items-center '>
            <h3 className='text-4xl font-bold text-center leading-14 tracking-wide'>就业</h3>
            <p className='text-center text-violet-950 mb-4 leading-loose tracking-[4.20px]'>工作</p>

            <Link
              href={"/planning/create/career"}
              className='w-1/2 bg-blue-500 hover:bg-blue-600 rounded-[999px] h-8 flex items-center justify-center text-white font-bold'
            >
              <ArrowRight className='h-5 w-7' />
            </Link>
          </CardContent>
        </Card>
      </div>

      <p className='text-center text-gray-500 mt-8'>这次选择之后还有机会进行再次选择滴~</p>
    </div>
  )
}
