"use client"

import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/40 bg-opacity-50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-lg">applyo</div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>

          <nav className="space-y-6">
            <a href="#" className="block text-lg font-medium text-gray-900">
              Home
            </a>
            <a href="#" className="block text-lg font-medium text-gray-900">
              Dashboard
            </a>
            <a href="#" className="block text-lg font-medium text-gray-900">
              Colleges
            </a>
            <a href="#" className="block text-lg font-medium text-gray-900">
              Quiz
            </a>
          </nav>

          <div className="mt-8 space-y-3">
            <Button className="w-full bg-blue-600 text-white">Create Account</Button>
            <Button variant="outline" className="w-full bg-transparent">
              Log in
            </Button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}
