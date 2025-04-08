import type { Metadata } from "next"
import { Spline_Sans, Spline_Sans_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const splineSans = Spline_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "EduPath - 学习规划平台",
  description: "EduPath helps students plan their academic and career paths",
  generator: "edupath team",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh'>
      <body className={`${splineSans.variable} ${splineSansMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
