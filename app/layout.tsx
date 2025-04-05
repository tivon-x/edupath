import type { Metadata } from "next"
import { Spline_Sans, Spline_Sans_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

// this font is used for the whole app
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// })

// this font is used for code blocks
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// })

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
