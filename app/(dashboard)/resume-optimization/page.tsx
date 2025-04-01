import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText } from "lucide-react"
import Image from "next/image"

export default function ResumeOptimizationPage() {
  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold'>准备好开启简历优化之旅了吗</h1>

      <div className='flex justify-end'>
        <Image
          src='/placeholder.svg?height=200&width=300'
          alt='Resume illustration'
          className='w-64 h-auto'
        />
      </div>

      <Card className='bg-primary-500 text-white shadow-lg hover:shadow-xl transition-shadow'>
        <CardContent className='p-8 flex items-center gap-8'>
          <div className='bg-white rounded-full p-4'>
            <FileText className='h-12 w-12 text-primary-500' />
          </div>

          <div className='flex-1'>
            <h2 className='text-3xl font-bold'>简历优化</h2>
          </div>

          <Button className='bg-white text-primary-500 hover:bg-gray-100 rounded-full w-12 h-12 p-0'>
            <ArrowRight className='h-6 w-6' />
          </Button>
        </CardContent>
      </Card>

      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>简历优化历史</h2>

        <div className='space-y-4'>
          <Card>
            <CardContent className='p-6 flex items-center gap-4'>
              <div className='bg-primary-100 rounded-lg p-3'>
                <FileText className='h-6 w-6 text-primary-500' />
              </div>

              <div className='flex-1'>
                <h3 className='font-medium'>产品岗位</h3>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='text-xs bg-primary-100 text-primary-500 px-2 py-0.5 rounded-full'>
                    3.17
                  </span>
                  <div className='flex items-center gap-1 text-xs text-gray-500'>
                    <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                    已保存
                  </div>
                  <div className='flex items-center gap-1 text-xs text-gray-500'>
                    <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                    已编辑
                  </div>
                </div>
              </div>

              <Button className='rounded-full' size='icon'>
                <ArrowRight className='h-5 w-5' />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6 flex items-center gap-4'>
              <div className='bg-primary-100 rounded-lg p-3'>
                <FileText className='h-6 w-6 text-primary-500' />
              </div>

              <div className='flex-1'>
                <h3 className='font-medium'>职业规划</h3>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='text-xs bg-primary-100 text-primary-500 px-2 py-0.5 rounded-full'>
                    3.17
                  </span>
                  <div className='flex items-center gap-1 text-xs text-gray-500'>
                    <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                    已保存
                  </div>
                  <div className='flex items-center gap-1 text-xs text-gray-500'>
                    <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                    已编辑
                  </div>
                </div>
              </div>

              <Button className='rounded-full' size='icon'>
                <ArrowRight className='h-5 w-5' />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
