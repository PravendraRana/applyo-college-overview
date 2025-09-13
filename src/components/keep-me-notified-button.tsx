"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface KeepMeNotifiedButtonProps {
  isNotified: boolean
  onToggle: () => void
}

export function KeepMeNotifiedButton({ isNotified, onToggle }: KeepMeNotifiedButtonProps) {
  return (
    <Button
      variant={isNotified ? "default" : "outline"}
      onClick={onToggle}
      className={isNotified ? "bg-green-600 hover:bg-green-700" : ""}
    >
      <Bell className="w-4 h-4 mr-2" />
      {isNotified ? "We'll notify you" : "Keep me notified"}
    </Button>
  )
}
