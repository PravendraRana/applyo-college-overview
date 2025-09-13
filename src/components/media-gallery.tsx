"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MediaGallery() {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-2 relative">
          <img
            src="/college-campus-aerial.jpg"
            alt="college aerial view"
            className="w-full h-64 object-cover rounded-lg"
          />
          <Button variant="secondary" size="sm" className="absolute bottom-4 left-4 bg-white/90 hover:bg-white">
            <Play className="w-4 h-4 mr-2" />
            Show all media
          </Button>
        </div>
        <div className="space-y-4">
          <img src="/college-building.gif" alt="College building" className="w-full h-28 object-cover rounded-lg" />
          <img src="/library.jpg" alt="Library" className="w-full h-28 object-cover rounded-lg" />
        </div>
        <div className="space-y-4">
          <img src="/library.jpg" alt="Classroom" className="w-full h-28 object-cover rounded-lg" />
          <img src="/placeholder-0mpcs.png" alt="Auditorium" className="w-full h-28 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  )
}
