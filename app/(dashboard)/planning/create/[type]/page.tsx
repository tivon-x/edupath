import ReturnButton from "@/components/return-button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default async function BasicInfoPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params

  const planningItems: {
    [key: string]: string[]
  } = {
    academic: [
      "目标院校",
      "学业排名",
      "专业",
      "年级",
      "英语水平",
      "本科院校",
      "科研经历",
      "竞赛经历",
      "个人兴趣",
      "未来发展方向",
      "个人技能",
      "荣誉称号与奖学金",
      "其它补充",
    ],
    career: [
      "目标公司",
      "目标岗位",
      "年级",
      "英语水平",
      "本科院校",
      "实习经历",
      "竞赛经历",
      "个人兴趣",
      "未来发展方向",
      "个人技能",
      "荣誉称号与奖学金",
      "其它补充",
    ],
  }

  return (
    <div className='space-y-6'>
      <ReturnButton href={"/planning"} />

      <div className='px-30'>
        <div className='bg-primary-500 px-8 pt-10 pb-4 text-white rounded-tr-[77px] shadow-[inset_20px_20px_10px_10px_rgba(255,255,255,0.10)] flex flex-col'>
          <h1 className='text-3xl font-bold text-center leading-10 tracking-[3.24px]'>
            Step.2 请填写你的基本信息
          </h1>
          <p className='text-white/80 ml-auto text-xs leading-none tracking-widest'>
            了解你，才能帮助你
          </p>
        </div>

        <div className='bg-white p-8 shadow-sm border-[6px] border-gray-400'>
          <ol className='list-decimal pl-20 space-y-4'>
            {planningItems[type].map((item, index) => (
              <li key={index} className='text-lg font-semibold text-gray-700'>
                {item}
              </li>
            ))}
          </ol>

          <div className='flex justify-end mt-4'>
            <Link
              href={`/planning/result/${type}`}
              className='bg-primary-500 hover:bg-primary-600 w-36 h-10 flex items-center justify-center rounded-[60px] text-white'
            >
              <ArrowRight className='h-6 w-6' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
