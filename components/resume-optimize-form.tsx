"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ResumeOptimizeForm() {
  const optimizationOptions = [
    {
      name: "target_school",
      label: "目标院校",
    },
    {
      name: "rank",
      label: "学业排名",
    },
    {
      name: "major",
      label: "专业",
    },
    {
      name: "grade",
      label: "年级",
    },
    {
      name: "English",
      label: "英语水平",
    },
    {
      name: "school",
      label: "本科院校",
    },
    {
      name: "academic",
      label: "科研经历",
    },
    {
      name: "competition",
      label: "竞赛经历",
    },
    {
      name: "interest",
      label: "个人兴趣",
    },
    {
      name: "future",
      label: "未来发展区域",
    },
    {
      name: "skills",
      label: "个人技能",
    },
    {
      name: "awards",
      label: "荣誉称号与奖学金",
    },
    {
      name: "other",
      label: "其它补充",
    },
  ]
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionChange = (value: string) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(value)
        ? prevOptions.filter((option) => option !== value)
        : [...prevOptions, value]
    )
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='bg-primary-100 rounded-2xl shadow-[8px_20px_10px_10px_rgba(164,151,255,0.15)] border border-violet-600 px-8 py-6'>
        <div className='space-y-2'>
          {optimizationOptions.map((option, index) => (
            <div className='flex items-center space-x-4' key={option.name}>
              <Checkbox
                id={option.name}
                className='data-[state=checked]:bg-primary-500 border-violet-600 data-[state=unchecked]:bg-white'
                onCheckedChange={() => handleOptionChange(option.name)}
              />
              <label htmlFor={option.name} className='text-xl font-medium tracking-[3.60px]'>
                {index + 1}. {option.label}
              </label>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-6'>
          <Button
            className='bg-white text-primary-500 hover:bg-gray-100 rounded-[60px] shadow-[4px_4px_2px_3px_rgba(0,0,0,0.25)] w-54 text-xl leading-6 font-medium tracking-wide'
            type='submit'
            form='resumeOptimizeForm'
          >
            自动优化选中内容
          </Button>
        </div>
      </div>

      <div className='bg-white px-8 py-6 rounded-2xl shadow-[8px_20px_10px_10px_rgba(164,151,255,0.15)] border border-violet-600'>
        <form id='resumeOptimizeForm' className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div>
              <label htmlFor='resumeName' className='text-lg font-medium mb-2'>
                姓名
              </label>
              <Input
                type='text'
                id='resumeName'
                className='w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:border-primary-500 mt-1'
                placeholder='请输入姓名'
                name='resumeName'
                required
              />
            </div>

            <div>
              <label htmlFor='resumePhone' className='text-lg font-medium mb-2'>
                联系方式
              </label>
              <Input
                type='text'
                id='resumePhone'
                className='w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:border-primary-500 mt-1'
                placeholder='请输入联系方式'
                name='resumePhone'
              />
            </div>
          </div>

          <div>
            {/* <h3 className='text-lg font-medium mb-2'>教育经历</h3>
            <div className='h-10 border-b border-gray-300'></div> */}
            <label htmlFor='resumeEducation' className='text-lg font-medium mb-2'>
              教育经历
            </label>
            <Textarea
              id='resumeEducation'
              className='w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:border-primary-500 mt-1'
              placeholder='请输入教育经历'
              name='resumeEducation'
            />
          </div>

          <div>
            <label htmlFor='resumeExperience' className='text-lg font-medium mb-2'>
              实习经历
            </label>
            <Textarea
              id='resumeExperience'
              className='w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:border-primary-500 mt-1'
              placeholder='请输入实习经历'
              name='resumeExperience'
            />
          </div>

          <div>
            <label htmlFor='resumeProject' className='text-lg font-medium mb-2'>
              项目经历
            </label>
            <Textarea
              id='resumeProject'
              className='w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:border-primary-500 mt-1'
              placeholder='请输入项目经历'
              name='resumeProject'
            />
          </div>

          <div>
            <label htmlFor='resumeSkills' className='text-lg font-medium mb-2'>
              技能
            </label>
            <Textarea
              id='resumeSkills'
              className='w-full h-10 border border-gray-300 rounded-md px-3 focus:outline-none focus:border-primary-500 mt-1'
              placeholder='请输入技能'
              name='resumeSkills'
            />
          </div>
        </form>
      </div>
    </div>
  )
}
