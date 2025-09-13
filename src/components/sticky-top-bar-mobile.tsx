"use client"

import { Bell, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StickyTopBarMobileProps {
  isNotified: boolean
  onNotifyToggle: () => void
  activeTab: string
  onTabChange: (tab: string) => void
  tabs: string[]
}

export function StickyTopBarMobile({
  isNotified,
  onNotifyToggle,
  activeTab,
  onTabChange,
  tabs,
}: StickyTopBarMobileProps) {
  return (
    <div className="md:hidden sticky top-16 z-40 bg-white border-b border-gray-200">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Quick Apply
          </Button>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onNotifyToggle}
              className={isNotified ? "text-green-600" : "text-gray-600"}
            >
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md ${
                activeTab === tab ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
