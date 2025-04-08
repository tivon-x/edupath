"use client"

import { EduPathLogo } from "@/components/edupath-logo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  FileText,
  Users,
  HelpCircle,
  Settings,
  BookOpenText,
  ArrowRight,
  UserPen,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authClient } from "@/lib/auth-client"
import { Dialog, DialogContent } from "./ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { ProfileEditor } from "./profile-editor"
import { toast } from "sonner"

interface SidebarProps {
  userName: string
  userEmail: string
  avatarUrl: string
  gender: string
}

export function Sidebar({ userName, userEmail, avatarUrl, gender }: SidebarProps) {
  const pathname = usePathname()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/sign-in")
        },
        onError: (error) => {
          toast.error("退出登录失败，请稍后再试")
          console.error("Error signing out:", error)
        },
      },
    })
  }
  const menuItems = [
    {
      title: "学途工具",
      items: [
        {
          name: "规划",
          icon: <BookOpen className='h-5 w-5' />,
          href: "/planning",
        },
        {
          name: "简历",
          icon: <FileText className='h-5 w-5' />,
          href: "/resume",
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
                const isActive = pathname.startsWith(item.href)
                return (
                  <Link
                    key={j}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-[50px] leading-7 text-base text-black ${
                      isActive
                        ? "bg-white text-primary-500 shadow-[15px_15px_6px_0px_rgba(0,0,0,0.25)]"
                        : "hover:bg-white/10"
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
              <AvatarFallback>{userName}</AvatarFallback>
            </Avatar>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium truncate'>{userName}</p>
              <p className='text-xs text-white/70 truncate'>{userEmail}</p>
            </div>
            <Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger className='hover:bg-primary-700 rounded-full outline-0 cursor-pointer h-10 w-10 flex items-center justify-center'>
                  <ArrowRight className='w-7 h-7' />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side='right'
                  className='w-30 bg-purple-50 rounded-[20px] shadow-[4px_4px_10px_4px_rgba(0,0,0,0.16)] space-y-2'
                >
                  <DialogTrigger asChild>
                    <DropdownMenuItem className='hover:bg-gray-300 rounded-xl text-stone-500 text-base font-normal leading-7 cursor-pointer'>
                      <UserPen />
                      编辑信息
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DropdownMenuItem
                    className='hover:bg-gray-300 rounded-xl text-stone-500 text-base font-normal leading-7 cursor-pointer'
                    onClick={handleSignOut}
                  >
                    <LogOut />
                    退出登录
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DialogContent>
                <ProfileEditor
                  userName={userName}
                  userEmail={userEmail}
                  avatarUrl={avatarUrl}
                  gender={gender}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}
