"use client"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface NavbarProps {
  onMobileMenuToggle: () => void
}

export function Navbar({ onMobileMenuToggle }: NavbarProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-lg">applyo</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Daily Challenge
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search college / degree / exam" className="pl-10 w-80" />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm" className="bg-blue-600 text-white">Create Account</Button>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={onMobileMenuToggle}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
