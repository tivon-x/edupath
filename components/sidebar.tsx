"use client"

import { EduPathLogo } from "@/components/edupath-logo"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, FileText, Users, HelpCircle, Settings, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  userName: string
  userPhone: string
}

export function Sidebar({ userName, userPhone }: SidebarProps) {
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
          icon: <BookOpen className='h-5 w-5' />,
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
      title: "OTHER",
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
    <div className='flex flex-col h-full bg-primary-500 text-white rounded-r-3xl w-60'>
      <div className='p-6'>
        <EduPathLogo className='text-white' />
      </div>

      <div className='flex-1 overflow-auto px-4'>
        {menuItems.map((section, i) => (
          <div key={i} className='mb-6'>
            <h3 className='text-sm font-medium text-white/70 mb-3 px-2'>{section.title}</h3>
            <div className='space-y-1'>
              {section.items.map((item, j) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={j}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                      isActive
                        ? "bg-white text-primary-500 font-medium"
                        : "text-white hover:bg-white/10"
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

      <div className='p-4 mt-auto'>
        <div className='bg-primary-600 rounded-xl p-4'>
          <div className='flex items-center gap-3'>
            <Avatar className='border-2 border-white'>
              <AvatarImage src='/placeholder-user.jpg' />
              <AvatarFallback>李华</AvatarFallback>
            </Avatar>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium truncate'>{userName}</p>
              <p className='text-xs text-white/70 truncate'>{userPhone}</p>
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
