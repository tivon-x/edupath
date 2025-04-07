"use client"

import { useState } from "react"
import { Check, Pencil } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export default function AvatarSelector({
  avatars,
  selectedAvatar,
  setSelectedAvatar,
}: {
  avatars: string[]
  selectedAvatar: number
  setSelectedAvatar: (index: number) => void
}) {
  return (
    <div className='flex items-center justify-center'>
      <Popover>
        <PopoverTrigger asChild>
          <div className='relative cursor-pointer'>
            <Avatar className='h-24 w-24'>
              <AvatarImage src={avatars[selectedAvatar]} alt='Profile' />
              <AvatarFallback>李华</AvatarFallback>
            </Avatar>
            <div className='absolute bottom-0 right-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-violet-100 text-primary'>
              <Pencil className='h-4 w-4' />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className='w-full p-3'>
          <div className='space-y-2'>
            <h4 className='font-medium'>选择头像</h4>
            <div className='grid grid-cols-4 gap-2'>
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-md p-1}`}
                  onClick={() => setSelectedAvatar(index)}
                >
                  <Avatar className='w-14 h-14'>
                    <AvatarImage src={avatar} alt={`Avatar option ${index + 1}`} />
                    <AvatarFallback>{index + 1}</AvatarFallback>
                  </Avatar>
                  {selectedAvatar === index && (
                    <div className='absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                      <Check className='h-3 w-3' />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
