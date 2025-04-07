"use client"

import { SquareCheck, Plus, SquareMinus, Square } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import { zhCN } from "date-fns/locale"
import { SchedulterItem } from "@/lib/data"

export default function Scheduler({ schedulerItems }: { schedulerItems: SchedulterItem[] }) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <>
      {/* Calendar */}
      <Card className='py-0 px-0 rounded-3xl'>
        <Calendar
          locale={zhCN}
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md flex items-center justify-center'
        />
      </Card>
      {/* Schedule */}
      <Card className='gap-0 rounded-3xl'>
        <CardHeader className='flex items-center justify-between'>
          <div className='text-base font-semibold leading-relaxed'>我的日程表</div>
          <Button className='h-6 w-6 flex items-center justify-center rounded-full bg-primary text-white'>
            <Plus className='h-4 w-4' />
          </Button>
        </CardHeader>
        <CardContent className='mt-4 space-y-4'>
          {schedulerItems.map((item, index) => (
            <div key={index} className='flex items-center rounded-lg space-x-3'>
              {/* from and to */}
              <div className='flex flex-col justify-between space-y-13 w-22 text-zinc-400 text-sm leading-snug'>
                <div>{item.from}</div>
                <div>{item.to}</div>
              </div>
              <div className='px-3 py-4 w-full bg-[#F1EFFF] rounded-2xl gap-3'>
                <div className='self-stretch justify-start text-violet-400 text-sm font-normal leading-tight'>
                  {item.title}
                </div>
                <div className='self-stretch justify-start text-indigo-500 text-sm font-semibold leading-snug'>
                  {item.description}
                </div>
                <div className='flex items-center space-x-2 my-2'>
                  {item.status === "已完成" && <SquareCheck className='h-5 w-5 text-primary-500' />}
                  {item.status === "进行中" && <SquareMinus className='h-5 w-5 text-yellow-500' />}
                  {item.status === "未开始" && <Square className='h-5 w-5 text-red-500' />}
                  <div className='justify-start text-black text-sm font-normal leading-snug'>
                    {item.status}
                  </div>
                </div>
                <div className='self-stretch justify-start text-zinc-400 text-sm font-normal leading-tight'>
                  {item.from} - {item.to}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  )
}
