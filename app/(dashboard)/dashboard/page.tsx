import Scheduler from "@/components/scheduler"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SchedulterItem } from "@/lib/data"
import { Star, ArrowRight, BookOpen, User, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
  const abilityImages = [
    {
      description: "埋头猛冲的学术达人",
      date: "2025-03-17",
      score: 89,
      link: "/ability-profile/academic",
    },
    {
      description: "技能超强的就业人才",
      date: "2025-02-17",
      score: 90,
      link: "/ability-profile/career",
    },
  ]

  const plans = [
    {
      type: "学业规划",
      date: "2025-03-17",
      status: ["已保存", "已编辑"],
      link: "/career-planning/academic",
    },
    {
      type: "职业规划",
      date: "2025-03-17",
      status: ["已保存", "已编辑"],
      link: "/career-planning/career",
    },
  ]

  const schedulerItems: SchedulterItem[] = [
    {
      title: "文献阅读",
      description: "阅读相关文献，了解最新研究动态",
      status: "已完成",
      from: "09:00 AM",
      to: "10:00 AM",
      date: "2025-03-17",
    },
    {
      title: "项目进展会议",
      description: "与团队成员讨论项目进展",
      status: "进行中",
      from: "10:00 AM",
      to: "11:00 AM",
      date: "2025-03-17",
    },
    {
      title: "论文写作",
      description: "撰写论文初稿",
      status: "未开始",
      from: "13:00 PM",
      to: "15:00 PM",
      date: "2025-03-17",
    },
  ]

  return (
    <div className='flex flex-col md:flex-row md:space-x-8'>
      {/* Left Column */}
      <div className='flex-1 space-y-8'>
        {/* Academic/Career Planning Banner */}
        <div className='bg-primary-500 rounded-3xl shadow-[inset_8px_8px_20px_8px_rgba(255,255,255,0.23)] p-12 text-white relative overflow-hidden w-2xl'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl mb-4 font-medium leading-10'>学业/职业规划</h2>
            <Button
              variant='secondary'
              className='w-48 h-14 px-5 py-3.5 bg-white text-primary-500 hover:bg-gray-100 rounded-xl text-xl font-semibold tracking-[3.60px]'
            >
              再次测试
            </Button>
          </div>

          {/* Illustration on the right */}
          <div className='absolute right-8 bottom-0'>
            {/* This would be an image in a real implementation */}
            <Image src='/banner-img.png' alt='Illustration' width={320} height={224} />
          </div>
        </div>

        {/* Ability Profile */}
        <div className='gap-6'>
          <div className='space-y-6'>
            {/* My Ability Profile */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-bold'>我的能力画像</h2>
                <Link href={"/dashboard"} className='text-gray-500 text-sm'>
                  查看全部
                </Link>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {abilityImages.map((image, index) => (
                  <Card className='pt-0 pb-6' key={index}>
                    <div
                      className={`h-5 ${index % 2 === 0 ? "bg-orange-400" : "bg-blue-400"} rounded-tl-2xl rounded-tr-2xl`}
                    />
                    <CardHeader className='flex flex-row items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <User
                          className={`w-8 h-8 rounded-full ${index % 2 === 0 ? "bg-orange-100 text-orange-500" : "bg-blue-100 text-blue-500"} flex items-center justify-center`}
                        />
                        <div className='grid gap-0.5'>
                          <CardTitle className='text-sm font-medium'>
                            &quot;{image.description}&quot;
                          </CardTitle>
                          <p className='text-xs text-gray-500'>{image.date}日更新</p>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        {[1, 2, 3, 4, 5].slice(0, Math.ceil(image.score / 20)).map((star) => (
                          <Star key={star} className='w-4 h-4' fill='#FFD700' color='#FFD700' />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium'>综合得分</p>
                        <p className='text-3xl font-bold text-orange-500'>
                          {image.score}
                          <span className='text-sm'>分</span>
                        </p>
                      </div>
                      <div className='flex justify-end mt-2'>
                        <Link href={image.link} className='text-xs text-gray-500'>
                          点击查看
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* My Career Planning */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-bold'>我的职业规划</h2>
                <Link href={"/dashboard"} className='text-gray-500 text-sm'>
                  查看全部
                </Link>
              </div>
              <div className='space-y-4'>
                {plans.map((plan, index) => (
                  <Card key={index}>
                    <CardContent className=''>
                      <div className='flex items-center gap-4'>
                        <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center'>
                          {plan.type === "学业规划" ? (
                            <BookOpen className='w-5 h-5 text-primary-500' />
                          ) : (
                            <Briefcase className='w-5 h-5 text-primary-500' />
                          )}
                        </div>
                        <div className='space-y-1'>
                          <div className='flex items-center justify-between gap-2'>
                            <p className='font-medium text-base leading-loose'>{plan.type}</p>
                            <span className='text-xs bg-primary-500 text-white px-2 py-0.5 rounded-full'>
                              {plan.date}
                            </span>
                          </div>

                          <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1 text-xs text-gray-500'>
                              <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                              {plan.status[0]}
                            </div>
                            <div className='flex items-center gap-1 text-xs text-gray-500'>
                              <span className='w-2 h-2 rounded-full bg-gray-300'></span>
                              {plan.status[1]}
                            </div>
                          </div>
                        </div>
                        <Link
                          href={plan.link}
                          className='h-8.5 w-8.5 ml-auto rounded-full bg-primary items-center justify-center flex hover:bg-primary-600 transition duration-200'
                        >
                          <ArrowRight className='h-6 w-6 text-white ' />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column - Calendar and Schedule */}
      <div className='flex-1 space-y-8 mt-8 md:mt-0'>
        <Scheduler schedulerItems={schedulerItems} />
      </div>
    </div>
  )
}
