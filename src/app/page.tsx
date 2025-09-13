"use client"

import { useState } from "react"
import { ChevronRight, Share, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { Navbar } from "@/components/navbar"
import { MobileMenu } from "@/components/mobile-menu"
import { StickyTopBarMobile } from "@/components/sticky-top-bar-mobile"
import { StickyInfoBox } from "@/components/sticky-info-box"
import { KeepMeNotifiedButton } from "@/components/keep-me-notified-button"
import { MediaGallery } from "@/components/media-gallery"
import { NewsFeed } from "@/components/news-feed"
import { FAQAccordion } from "@/components/faq-accordion"
import { Footer } from "@/components/footer"

export default function CollegeOverview() {
  const [isNotified, setIsNotified] = useState(false)
  const [activeTab, setActiveTab] = useState("Overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = ["Overview", "Programs", "Placements", "Fees & Financial Aid", "Admissions", "Campus & More"]

  return (
    <div className="min-h-screen bg-white">
      <Navbar onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-gray-700">
            Colleges
          </a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">S.P. Jain Institute of Management & Research</span>
        </div>
      </div>

      {/* <StickyTopBarMobile
        isNotified={isNotified}
        onNotifyToggle={() => setIsNotified(!isNotified)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      /> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <StickyInfoBox />

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {/* College Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    S.P. Jain Institute of Management & Research
                  </h1>
                  <p className="text-gray-600">Est. 1981 • Mumbai, Maharashtra</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>15+ Programs offered</span>
                  <span>•</span>
                  <span>Private Institute</span>
                  <span>•</span>
                  <span>45 Acres</span>
                  <span>•</span>
                  <Badge variant="outline">AACSB</Badge>
                  <Badge variant="outline">AMBA</Badge>
                  <Badge variant="outline">NAAC</Badge>
                  <span>+3 more</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 mb-6">
                <Button className="hidden md:block bg-blue-600 text-white">Continue Application</Button>
                <KeepMeNotifiedButton isNotified={isNotified} onToggle={() => setIsNotified(!isNotified)} />
              </div>
            </div>

            <MediaGallery />
            <StickyTopBarMobile
              isNotified={isNotified}
              onNotifyToggle={() => setIsNotified(!isNotified)}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabs={tabs}
            />

            {/* Desktop Navigation Tabs */}
            <div className="hidden md:block mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                SP Jain Institute of Management and Research, founded in 1981, is a premier B-school situated on a
                sprawling <strong>45-acre campus</strong> in Andheri (Mumbai). Renowned for its rigorous PGDM & PGPM
                programs, SPJIMR delivers excellent career outcomes, boasting an impressive{" "}
                <strong>average placement of ₹22.9 LPA</strong>. Students enjoy vibrant campus life, modern hostels,
                extensive...
              </p>
              <Button variant="link" className="p-0 text-gray-500">
                Show more
              </Button>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Hostel Available</Badge>
                <Badge variant="secondary">Private</Badge>
                <Badge variant="secondary">Marketing</Badge>
                <Badge variant="secondary">Finance</Badge>
                <Badge variant="secondary">Entrepreneurship</Badge>
                <Badge variant="secondary">+3 more</Badge>
              </div>
            </div>

            {/* Accreditations */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Accreditations</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">AACSB</Badge>
                <Badge variant="outline">AMBA</Badge>
                <Badge variant="outline">NAAC</Badge>
                <Badge variant="outline">+3 more</Badge>
              </div>
            </div>

            <NewsFeed />

            <FAQAccordion />

            {/* Download Brochure */}
            <div className="mb-8">
              <Card className="bg-gray-50">
                <CardContent className="p-6 flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    All you need to know about the college—just one click away!
                  </h4>
                  <Button variant="outline">Download Brochure</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
