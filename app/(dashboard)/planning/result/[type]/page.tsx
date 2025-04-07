import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, MoreVertical, Share, Save } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ReturnButton from "@/components/return-button"

export default async function AbilityAnalysisPage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
          <ReturnButton href={`/planning/create/${type}`} />
          <Card className='rounded-[20px] shadow-[5px_15px_15px_10px_rgba(0,0,0,0.06)]'>
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
            <CardContent className='p-6'>
              {/* Radar Chart - In a real implementation, this would be a proper chart */}
              <div className='aspect-square relative'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-3/4 h-3/4 border-2 border-gray-200 rounded-full'></div>
                  <div className='absolute w-2/4 h-2/4 border-2 border-gray-200 rounded-full'></div>
                  <div className='absolute w-1/4 h-1/4 border-2 border-gray-200 rounded-full'></div>
                </div>

                {/* Chart Labels */}
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <span className='text-sm'>学术素养</span>
                </div>
                <div className='absolute top-1/4 right-0 translate-x-1/2'>
                  <span className='text-sm'>科研技能</span>
                </div>
                <div className='absolute bottom-1/4 right-0 translate-x-1/2'>
                  <span className='text-sm'>实践认知</span>
                </div>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
                  <span className='text-sm'>个性特质</span>
                </div>
                <div className='absolute bottom-1/4 left-0 -translate-x-1/2'>
                  <span className='text-sm'>创新思维</span>
                </div>

                {/* Radar Plot - This would be a proper SVG in a real implementation */}
                <div className='absolute inset-0'>
                  <svg viewBox='0 0 100 100' className='w-full h-full'>
                    <polygon
                      points='50,10 85,35 75,80 25,80 15,35'
                      fill='rgba(124, 92, 252, 0.2)'
                      stroke='#7C5CFC'
                      strokeWidth='2'
                    />
                  </svg>
                </div>
              </div>

              <div className='flex justify-center mt-8'>
                <Button variant='outline' className='rounded-full'>
                  <ArrowDown className='h-5 w-5' />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=''>
          <Card className='shadow-lg'>
            <CardContent className='p-6'>
              <div className='bg-primary-100 rounded-t-xl py-4 px-6 -mx-6 -mt-6 mb-6'>
                <h2 className='text-xl font-bold text-center text-primary-700'>能力矩阵分析</h2>
              </div>

              {/* This would contain the ability analysis content */}
              <div className='h-96 flex items-center justify-center'>
                <p className='text-gray-500'>能力分析内容将显示在这里</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        <Button className='bg-primary-500 hover:bg-primary-600 px-8'>
          一键生成规划建议 <ArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </div>
    </>
  )
}

// This component is not in the original images but needed for the UI
function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 5v14' />
      <path d='m19 12-7 7-7-7' />
    </svg>
  )
}
