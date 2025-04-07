"use client"

import { useState } from "react"
import Timeline from "./timeline"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

type props = {
  plans: {
    period: string
    description: string
  }[]
}

export default function PlanShower({ plans }: props) {
  const [currentPlan, setCurrentPlan] = useState(plans[0])

  const handleClick = (index: number) => {
    setCurrentPlan(plans[index])
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentPlan((prev) => ({ ...prev, description: e.target.value }))
  }

  return (
    <>
      {/* Career Timeline */}
      <div className='flex items-center justify-center'>
        <Timeline
          handleClick={handleClick}
          activeIndex={plans.findIndex((plan) => plan.period === currentPlan.period)}
        />
      </div>

      {/* Content Editor */}
      <div className='flex justify-center items-center'>
        <div className='w-250 bg-white rounded-3xl shadow-[-10px_10px_15px_15px_rgba(0,0,0,0.19)]'>
          <div className='min-h-[300px] p-4'>
            <Textarea
              className='h-[200px]'
              value={currentPlan.description}
              onChange={handleTextChange}
            />
          </div>
          <div className='flex justify-center items-center mt-4 mb-4'>
            <Button className='bg-primary-400 hover:bg-primary-600 rounded-3xl w-36 text-white text-base font-bold'>
              保存
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
