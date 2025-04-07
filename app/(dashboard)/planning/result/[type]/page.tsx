import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, MoreVertical, Share, Save, ArrowDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ReturnButton from "@/components/return-button"
import CustomeRadarChart from "@/components/radar-chart"
import Link from "next/link"

export default async function AbilityAnalysisPage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params

  const chartData: { [key: string]: string | number }[] = [
    { character: "学术素养", score: 86 },
    { character: "科研技能", score: 70 },
    { character: "实践认知", score: 90 },
    { character: "个性特质", score: 80 },
    { character: "创新思维", score: 75 },
  ]

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 pb-4'>
        <div className='space-y-8'>
          <ReturnButton href={`/planning/create/${type}`} />
          <div className='px-14'>
            <Card className='rounded-[20px] shadow-[5px_15px_15px_10px_rgba(0,0,0,0.06)] gap-4 py-4'>
              <CardHeader className='flex items-center justify-end'>
                <div className='flex'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon'>
                        <MoreVertical className='h-5 w-5' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem className='hover:bg-gray-300 rounded-xl outline-0 cursor-pointer'>
                        <Share className='mr-2 h-4 w-4' />
                        <span>分享</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className='hover:bg-gray-300 rounded-xl outline-0 cursor-pointer'>
                        <Save className='mr-2 h-4 w-4' />
                        <span>保存</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                {/* Radar Chart - In a real implementation, this would be a proper chart */}
                <CustomeRadarChart data={chartData} axisDataKey='character' radarDataKey='score' />

                <div className='flex justify-center'>
                  <Button
                    variant='outline'
                    className='rounded-full bg-primary-500 hover:bg-primary-600 w-12 h-12'
                  >
                    <ArrowDown className='text-white' size={32} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className='rounded-2xl shadow-[6px_6px_8px_6px_rgba(0,0,0,0.11)] border mr-12 pt-0'>
          <div className='grid grid-cols-4'>
            {/* 左边 */}
            <div className='rounded-tl-2xl h-1/2 bg-primary-400 relative z-10'></div>
            {/* 中间 */}
            <div className='bg-primary-400 pb-4 pt-2 col-span-2 rounded-b-[99px] relative z-20 -mx-2.5 px-4'>
              <div className='text-2xl font-bold text-center text-primary-800 leading-[52.16px] tracking-[4.80px]'>
                能力矩阵分析
              </div>
            </div>
            {/* 右边 */}
            <div className='h-1/2 bg-primary-400 rounded-tr-2xl'></div>
          </div>
          <CardContent className='p-6'>
            {/* This would contain the ability analysis content */}
            <div className='h-96 flex items-center justify-center'>
              <p className='text-gray-500'>能力分析内容将显示在这里</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='flex justify-center'>
        <Link
          href={`/planning/result/${type}/plan`}
          className='bg-primary-500 hover:bg-primary-600 px-8 rounded-[60px] w-90 h-14 text-white flex items-center justify-center gap-1 text-xl font-bold leading-10 tracking-[3.60px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
        >
          一键生成规划建议 <ArrowRight width={24} height={24} />
        </Link>
      </div>
    </>
  )
}
