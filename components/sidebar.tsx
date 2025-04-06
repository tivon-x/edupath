"use client"

import { EduPathLogo } from "@/components/edupath-logo"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  FileText,
  Users,
  HelpCircle,
  Settings,
  ChevronRight,
  BookOpenText,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  userName: string
  userEmail: string
  avatarUrl: string
}

export function Sidebar({ userName, userEmail, avatarUrl }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "学途工具",
      items: [
        {
          name: "学业规划",
          icon: <BookOpen className='h-5 w-5' />,
          href: "/academic-planning",
        },
        {
          name: "简历优化",
          icon: <FileText className='h-5 w-5' />,
          href: "/resume-optimization",
        },
      ],
    },
    {
      title: "社区活动",
      items: [
        {
          name: "My Courses",
          icon: <BookOpenText className='h-5 w-5' />,
          href: "/my-courses",
        },
        {
          name: "Discover",
          icon: <Users className='h-5 w-5' />,
          href: "/discover",
        },
      ],
    },
    {
      title: "其他",
      items: [
        {
          name: "支持",
          icon: <HelpCircle className='h-5 w-5' />,
          href: "/support",
        },
        {
          name: "设定",
          icon: <Settings className='h-5 w-5' />,
          href: "/settings",
        },
      ],
    },
  ]

  return (
    <div className='mr-12 flex flex-col h-full bg-primary text-white rounded-r-[66px] shadow-[10px_5px_6px_4px_rgba(0,0,0,0.23)] w-60'>
      <div className='p-6'>
        <Link href={"/dashboard"}>
          <EduPathLogo className='text-white text-2xl' />
        </Link>
      </div>

      <div className='flex-1 overflow-auto px-4'>
        {menuItems.map((section, i) => (
          <div key={i} className='mb-6'>
            <h3 className='text-base font-medium text-white mb-3 px-2 self-stretch leading-7'>
              {section.title}
            </h3>
            <div className='space-y-1'>
              {section.items.map((item, j) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={j}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-[50px] leading-7 text-base text-black ${
                      isActive ? "bg-white text-primary-500 font-medium" : "hover:bg-white/10"
                    }`}
                  >
                    <div className='flex items-center justify-center w-8 h-8'>{item.icon}</div>
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-auto mb-16'>
        <div className='bg-violet-400 p-4 rounded-[55px]'>
          <div className='flex items-center gap-3'>
            <Avatar className='w-14 h-14'>
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>李华</AvatarFallback>
            </Avatar>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium truncate'>{userName}</p>
              <p className='text-xs text-white/70 truncate'>{userEmail}</p>
            </div>
            <Button
              variant='ghost'
              size='icon'
              className='text-white hover:bg-primary-700 rounded-full'
            >
              <ChevronRight className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
