"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PlacementTrendsChart } from "./placement-trends-chart"

export function StickyInfoBox() {
  return (
    <div className="hidden lg:block lg:col-span-3">
      <div className="sticky top-24 space-y-6">
        {/* Application Progress */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Complete Application</h3>
              <span className="text-blue-600 font-semibold">27%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "27%" }}></div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Your chances</span>
                <Badge variant="secondary" className="bg-white text-blue-600 border-blue-600">Predict Chances of Shortlisting</Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">NIRF Ranking</span>
                <span className="font-semibold">#7</span>
              </div>

              <div className="text-sm text-gray-600 mb-2">Available courses</div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">PGDM</Badge>
                <Badge variant="outline">PGPM</Badge>
                <Badge variant="outline">GMP</Badge>
                <Badge variant="outline">+2 more</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Placement Trends Chart */}
        <PlacementTrendsChart />
      </div>
    </div>
  )
}
