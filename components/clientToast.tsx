"use client"
import { useEffect, useRef } from "react"
import { toast } from "sonner"

export default function ClientToast({
  message,
  type = "default",
}: {
  message: string | null
  type?: "success" | "error" | "default"
}) {
  const isHandled = useRef(false)

  useEffect(() => {
    if (message && !isHandled.current) {
      isHandled.current = true
      switch (type) {
        case "success":
          toast.success(message)
          break
        case "error":
          toast.error(message)
          break
        default:
          toast(message)
          break
      }
    }
  }, [message])

  return <></>
}
