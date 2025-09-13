"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { placementData } from "@/data/placements"

export function PlacementTrendsChart() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Placement trends (last 4 year)</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Highest ctc</span>
            <span className="font-semibold">1.1 cpa</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Avg ctc</span>
            <span className="font-semibold">9 lpa</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Median ctc</span>
            <span className="font-semibold">11 lpa</span>
          </div>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={placementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="highest" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="median" stroke="#82ca9d" strokeWidth={2} />
              <Line type="monotone" dataKey="average" stroke="#ffc658" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Company Logos */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">Top recruiters</div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold">PwC</div>
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold">KPMG</div>
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold">MS</div>
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold">Adobe</div>
        </div>
      </CardContent>
    </Card>
  )
}
