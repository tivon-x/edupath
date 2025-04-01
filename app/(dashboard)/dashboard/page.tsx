import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, ArrowRight, BookOpen, Plus, Check } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className='space-y-8'>
      {/* Academic/Career Planning Banner */}
      <div className='bg-primary-500 rounded-xl p-8 text-white relative overflow-hidden'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-bold mb-4'>学业/职业规划</h2>
          <p className='text-white/80 mb-6'>有时，选择比努力更重要</p>
          <Button variant='secondary' className='bg-white text-primary-500 hover:bg-gray-100'>
            再次测试
          </Button>
        </div>

        {/* Illustration on the right */}
        <div className='absolute right-8 bottom-0'>
          {/* This would be an image in a real implementation */}
          <div className='w-64 h-48 opacity-80'></div>
        </div>
      </div>

      {/* Ability Profile and Calendar Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Left Column */}
        <div className='md:col-span-2 space-y-6'>
          {/* My Ability Profile */}
          <div>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-xl font-bold'>我的能力画像</h2>
              <Button variant='ghost' className='text-gray-500'>
                查看全部
              </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between pb-2'>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center'>
                      <span className='text-orange-500'>👤</span>
                    </div>
                    <div className='grid gap-0.5'>
                      <CardTitle className='text-sm font-medium'>
                        &quot;埋头猛冲的学术达人&quot;
                      </CardTitle>
                      <p className='text-xs text-gray-500'>3.17日更新</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className='w-4 h-4' fill='#FFD700' color='#FFD700' />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm font-medium'>综合得分</p>
                    <p className='text-3xl font-bold text-orange-500'>
                      89<span className='text-sm'>分</span>
                    </p>
                  </div>
                  <div className='flex justify-end mt-2'>
                    <Button variant='ghost' size='sm' className='text-xs text-gray-500'>
                      点击查看 <ArrowRight className='ml-1 h-3 w-3' />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between pb-2'>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
                      <span className='text-blue-500'>👤</span>
                    </div>
                    <div className='grid gap-0.5'>
                      <CardTitle className='text-sm font-medium'>
                        &quot;技能超强的就业人才&quot;
                      </CardTitle>
                      <p className='text-xs text-gray-500'>2.17日更新</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className='w-4 h-4' fill='#FFD700' color='#FFD700' />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm font-medium'>综合得分</p>
                    <p className='text-3xl font-bold text-blue-500'>
                      90<span className='text-sm'>分</span>
                    </p>
                  </div>
                  <div className='flex justify-end mt-2'>
                    <Button variant='ghost' size='sm' className='text-xs text-gray-500'>
                      点击查看 <ArrowRight className='ml-1 h-3 w-3' />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* My Career Planning */}
          <div>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-xl font-bold'>我的职业规划</h2>
              <Button variant='ghost' className='text-gray-500'>
                查看全部
              </Button>
            </div>

            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center'>
                    <BookOpen className='w-5 h-5 text-primary-500' />
                  </div>
                  <div>
                    <h3 className='font-medium'>学业规划</h3>
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
                  <Button className='ml-auto rounded-full' size='icon'>
                    <ArrowRight className='h-5 w-5' />
                  </Button>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center'>
                    <BookOpen className='w-5 h-5 text-primary-500' />
                  </div>
                  <div>
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
                  <Button className='ml-auto rounded-full' size='icon'>
                    <ArrowRight className='h-5 w-5' />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Calendar */}
        <div>
          <div className='mb-4'>
            <h2 className='text-xl font-bold'>我的日程表</h2>
          </div>

          <Card>
            <CardContent className='p-4'>
              {/* Calendar Header */}
              <div className='flex items-center justify-between mb-4'>
                <Button variant='ghost' size='icon' className='rounded-full'>
                  <ChevronLeft className='h-5 w-5' />
                </Button>
                <h3 className='font-medium'>10月 2025</h3>
                <Button variant='ghost' size='icon' className='rounded-full'>
                  <ChevronRight className='h-5 w-5' />
                </Button>
              </div>

              {/* Calendar Days */}
              <div className='grid grid-cols-7 gap-1 text-center mb-2'>
                <div className='text-gray-500 text-xs'>一</div>
                <div className='text-gray-500 text-xs'>二</div>
                <div className='text-gray-500 text-xs'>三</div>
                <div className='text-gray-500 text-xs'>四</div>
                <div className='text-gray-500 text-xs'>五</div>
                <div className='text-gray-500 text-xs'>六</div>
                <div className='text-gray-500 text-xs'>日</div>
              </div>

              {/* Calendar Dates */}
              <div className='grid grid-cols-7 gap-1'>
                {/* Previous month */}
                <div className='h-8 flex items-center justify-center text-gray-400 text-sm'>29</div>
                <div className='h-8 flex items-center justify-center text-gray-400 text-sm'>30</div>
                <div className='h-8 flex items-center justify-center text-gray-400 text-sm'>31</div>

                {/* Current month */}
                <div className='h-8 flex items-center justify-center text-sm'>1</div>
                <div className='h-8 flex items-center justify-center text-sm'>2</div>
                <div className='h-8 flex items-center justify-center text-sm'>3</div>
                <div className='h-8 flex items-center justify-center text-sm'>4</div>
                <div className='h-8 flex items-center justify-center text-sm'>5</div>
                <div className='h-8 flex items-center justify-center text-sm'>6</div>
                <div className='h-8 flex items-center justify-center text-sm'>7</div>
                <div className='h-8 flex items-center justify-center text-sm'>8</div>
                <div className='h-8 flex items-center justify-center bg-primary-500 text-white rounded-full text-sm'>
                  9
                </div>
                <div className='h-8 flex items-center justify-center text-sm'>10</div>
                <div className='h-8 flex items-center justify-center text-sm'>11</div>
                {/* More dates would go here */}
              </div>

              {/* Schedule */}
              <div className='mt-6 space-y-4'>
                <div>
                  <h4 className='text-sm font-medium mb-2'>09:00 AM</h4>
                  <Button variant='outline' size='icon' className='rounded-full'>
                    <Plus className='h-4 w-4' />
                  </Button>
                </div>

                <div>
                  <h4 className='text-sm font-medium mb-2'>10:00 AM</h4>
                  <div className='bg-primary-100 p-3 rounded-lg'>
                    <div className='flex items-center justify-between'>
                      <h5 className='text-sm font-medium text-primary-700'>文献阅读</h5>
                      <Button variant='ghost' size='sm' className='h-6 w-6 p-0'>
                        <svg
                          width='16'
                          height='4'
                          viewBox='0 0 16 4'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z'
                            fill='currentColor'
                          />
                          <path
                            d='M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2Z'
                            fill='currentColor'
                          />
                          <path
                            d='M16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2C12 0.895431 12.8954 0 14 0C15.1046 0 16 0.895431 16 2Z'
                            fill='currentColor'
                          />
                        </svg>
                      </Button>
                    </div>
                    <p className='text-xs text-primary-600 mt-1'>完成10篇英文文献阅读</p>
                    <div className='flex items-center mt-2'>
                      <div className='flex items-center gap-1 text-xs text-primary-600'>
                        <Check className='h-3 w-3' />
                        <span>完成</span>
                      </div>
                      <div className='text-xs text-gray-500 ml-auto'>10:00 AM - 12:00 PM</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className='text-sm font-medium mb-2'>12:00 PM</h4>
                  <Button variant='outline' size='icon' className='rounded-full'>
                    <Plus className='h-4 w-4' />
                  </Button>
                </div>

                <div>
                  <h4 className='text-sm font-medium mb-2'>01:00 PM</h4>
                  <Button variant='outline' size='icon' className='rounded-full'>
                    <Plus className='h-4 w-4' />
                  </Button>
                </div>

                <div>
                  <h4 className='text-sm font-medium mb-2'>02:00 AM</h4>
                  <Button variant='outline' size='icon' className='rounded-full'>
                    <Plus className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
