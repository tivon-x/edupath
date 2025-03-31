import { cn } from "@/lib/utils"
import Link from "next/link"

interface EduPathLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  withText?: boolean
}

const Logo: React.FC<EduPathLogoProps> = ({ size = 38, className }) => {
  const numericSize = typeof size === "number" ? size : size === "sm" ? 24 : size === "md" ? 38 : 48
  const height = numericSize * (47 / 38) // Maintain aspect ratio
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      viewBox='0 0 38 47'
      fill='none'
      className={cn(className)}
      style={
        {
          "--size": `${numericSize}px`, // You can use this in CSS if needed
          "--height": `${height}px`,
        } as React.CSSProperties
      }
    >
      <path
        d='M0.499878 4.8711C0.499878 2.45701 2.45689 0.5 4.87098 0.5H28.912C31.3261 0.5 33.2831 2.45701 33.2831 4.8711V46.178H4.87098C2.45689 46.178 0.499878 44.221 0.499878 41.8069V4.8711Z'
        fill='#725DFF'
      />
      <path
        d='M0.499878 4.8711C0.499878 2.45701 2.45689 0.5 4.87098 0.5H28.912C31.3261 0.5 33.2831 2.45701 33.2831 4.8711V46.178H4.87098C2.45689 46.178 0.499878 44.221 0.499878 41.8069V4.8711Z'
        fill='#725DFF'
      />
      <path
        d='M5.96326 40.5361C5.96326 39.2105 7.03789 38.1359 8.36351 38.1359H34.3754V42.9364H8.36351C7.03789 42.9364 5.96326 41.8617 5.96326 40.5361Z'
        fill='#725DFF'
        stroke='white'
        strokeWidth='2.18555'
      />
      <path
        d='M4.32617 45.1042H30.0064C32.4205 45.1042 34.3775 43.1472 34.3775 40.7331V8.56177'
        stroke='white'
        strokeWidth='2.18555'
        strokeLinecap='round'
      />
      <path
        d='M4.32617 45.1042H32.1919C34.606 45.1042 36.563 43.1472 36.563 40.7331V8.56177'
        stroke='#725DFF'
        strokeWidth='2.18555'
        strokeLinecap='round'
      />
    </svg>
  )
}

export function EduPathLogo({ className = "", size = "md", withText = true }: EduPathLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href='/dashboard' className={`flex items-center gap-2 ${className}`}>
      <div className='relative'>
        <Logo size={size} className={cn(sizeClasses[size], "text-primary")} />
      </div>
      {withText && (
        <span className={`font-bold ${textSizeClasses[size]} text-primary`}>EduPath</span>
      )}
    </Link>
  )
}
