"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Search, X, ChevronDown } from "lucide-react"

export default function BaseHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Focus the search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchInputRef.current?.value
    if (query) {
      // You can implement the actual search functionality here
      console.log(`Searching for: ${query}`)
      // For now, we'll just close the search bar
      setIsSearchOpen(false)
    }
  }

  const handleLanguageChange = (lang: string) => {
    console.log(`Language changed to: ${lang}`)
    setIsLangOpen(false)
  }

  const handleProfileAction = (action: string) => {
    console.log(`Profile action: ${action}`)
    setIsProfileOpen(false)
  }

  return (
    <header className="relative bg-gradient-to-r from-[#0A1233] to-[#1A2B5F] text-white py-6 px-4">
      {/* Vector background - wavy lines */}
      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: "url('/images/vector-waves.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Regular header content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold text-purple-300">
              AI Top Trends
            </Link>

            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/category"
                className="px-5 py-2 text-sm bg-black rounded-full hover:bg-black/80 border border-white/20"
              >
                Category
              </Link>
              <div className="relative group">
                <Link
                  href="/products"
                  className="px-5 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20 flex items-center border border-white/20"
                >
                  Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <Link
                href="/ranking"
                className="px-5 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20 border border-white/20"
              >
                Ranking
              </Link>
              <Link
                href="/blog"
                className="px-5 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20 border border-white/20"
              >
                Blog
              </Link>
              <Link
                href="/submit"
                className="px-5 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20 border border-white/20"
              >
                Submit
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3 relative z-30">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for AI tools..."
                  className="flex-1 max-w-[200px] h-8 px-3 py-1 text-sm text-gray-800 bg-white rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-8 px-3 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            )}

            <div ref={langRef} className="relative">
              <button 
                className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-1"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span className="font-bold">EN</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => handleLanguageChange('fr')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            <div ref={profileRef} className="relative">
              <button 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleProfileAction('profile')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => handleProfileAction('settings')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={() => handleProfileAction('logout')}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 px-4 bg-blue-800 rounded-lg relative z-10">
            <nav className="flex flex-col space-y-2">
              <Link href="/category" className="px-3 py-2 hover:bg-blue-700 rounded-md">
                Category
              </Link>
              <Link href="/products" className="px-3 py-2 hover:bg-blue-700 rounded-md">
                Products
              </Link>
              <Link href="/ranking" className="px-3 py-2 hover:bg-blue-700 rounded-md">
                Ranking
              </Link>
              <Link href="/blog" className="px-3 py-2 hover:bg-blue-700 rounded-md">
                Blog
              </Link>
              <Link href="/submit" className="px-3 py-2 hover:bg-blue-700 rounded-md">
                Submit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
