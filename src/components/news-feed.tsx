"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { newsData } from "@/data/news"

export function NewsFeed() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Latest News</h3>
        <Button variant="link" className="text-blue-600">
          Newest first
        </Button>
      </div>
      <div className="space-y-4">
        {newsData.map((news, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{news.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{news.date}</p>
                  <p className="text-sm text-gray-700">{news.description}</p>
                  <Button variant="link" className="p-0 text-gray-500 text-sm mt-2">
                    Read more...
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Button variant="link" className="text-blue-600">
          ...   View all Updates
        </Button>
      </div>
    </div>
  )
}
