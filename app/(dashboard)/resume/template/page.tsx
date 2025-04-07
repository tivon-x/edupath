import ReturnButton from "@/components/return-button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResumeTemplatePage() {
  return (
    <div className='space-y-5'>
      <ReturnButton href='/resume/optimize' />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <div className="text-center text-zinc-800 text-4xl font-normal font-['STCaiyun'] leading-[58.68px] tracking-[5.40px]">
            简历模版选择
          </div>
          <Card>
            <CardContent className=''>
              <ScrollArea className='h-[400px] w-full md:h-113'>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <Image src='/pdf.png' width={114} height={136.5} alt='简历模板' key={index} />
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        <Card className='py-6 shadow-[8px_20px_10px_10px_rgba(164,151,255,0.15)] border border-primary-600'>
          <div className='text-center text-zinc-800 text-3xl font-normal leading-10'>简历</div>
          <ScrollArea className='h-[400px] w-full md:h-112'>
            <div className='space-y-4 px-10'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <label htmlFor='resumeName' className='text-lg font-medium'>
                    姓名：
                  </label>
                  <div className='text-lg font-medium'>李华</div>
                </div>

                <div className='flex items-center gap-2'>
                  <label htmlFor='resumePhone' className='text-lg font-medium'>
                    联系方式
                  </label>
                  <div className='text-lg font-medium'>12345678901</div>
                </div>
              </div>

              <div>
                {/* <h3 className='text-lg font-medium mb-2'>教育经历</h3>
            <div className='h-10 border-b border-gray-300'></div> */}
                <label htmlFor='resumeEducation' className='text-lg font-medium'>
                  教育经历
                </label>
                <div>
                  小学：希望小学（2010.09-2016.06）
                  <br />
                  中学：希望中学（2016.09-2019.06）
                  <br />
                  高中：希望高中（2019.09-2022.06）
                  <br />
                  大学：希望大学（2022.09-2026.06）
                </div>
              </div>

              <div>
                <label htmlFor='resumeExperience' className='text-lg font-medium'>
                  实习经历
                </label>
                <div>
                  2023.07-2023.08：希望公司（实习生）
                  <br />
                  2023.09-2023.10：希望公司（实习生）
                </div>
              </div>

              <div>
                <label htmlFor='resumeProject' className='text-lg font-medium'>
                  项目经历
                </label>
                <div>
                  2023.01-2023.02：希望项目（项目经理）
                  <br />
                  2023.03-2023.04：希望项目（项目经理）
                </div>
              </div>

              <div>
                <label htmlFor='resumeSkills' className='text-lg font-medium'>
                  技能
                </label>
                <div>
                  英语：六级
                  <br />
                  计算机：C++、Python、Java
                  <br />
                  其他：PPT、Word、Excel
                </div>
              </div>
            </div>
          </ScrollArea>
        </Card>
      </div>

      <div className='flex justify-center'>
        {/* 这个要做一个检验是否有数据的功能，如果没有数据就不显示这个按钮 */}
        <Link
          href={"/resume/template"}
          className='h-10 gap-2 bg-primary-500 hover:bg-primary-600 px-8 rounded-[60px] flex justify-center items-center text-white text-xl leading-6 font-medium tracking-wide shadow-[4px_4px_2px_3px_rgba(0,0,0,0.25)]'
        >
          <div>一键生成简历</div>
          <ArrowRight className='h-6 w-6' />
        </Link>
      </div>
    </div>
  )
}
