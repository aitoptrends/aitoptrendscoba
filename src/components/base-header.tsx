"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)

  const productFilters = [
    { name: "New", slug: "new" },
    { name: "Most Saved", slug: "most-saved" },
    { name: "Most Visit", slug: "most-visit" },
    { name: "Most Used", slug: "most-used" },
    { name: "Submit", slug: "submit" },
  ]

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-3 px-4 border-b border-blue-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-xl font-bold text-purple-300">
            AI Top Trends
          </Link>

          <div className="hidden md:flex items-center space-x-1 ml-6">
            <Link href="/category" className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Category
            </Link>

            <div className="relative">
              <button
                className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20 flex items-center"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {productFilters.map((filter) => (
                      <Link
                        key={filter.slug}
                        href={`/products/${filter.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsProductsDropdownOpen(false)}
                      >
                        {filter.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/ranking" className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Ranking
            </Link>
            <Link href="/blog" className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Blog
            </Link>
            <Link href="/submit" className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Submit
            </Link>
            <Link href="/tutorial" className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Tutorial
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full hover:bg-white/10">
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/signup"
            className="hidden md:inline-flex px-4 py-1.5 bg-white text-blue-900 rounded-md text-sm font-medium hover:bg-gray-100"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="hidden md:inline-flex px-4 py-1.5 border border-white/30 rounded-md text-sm font-medium hover:bg-white/10"
          >
            Login
          </Link>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
        <div className="md:hidden mt-2 py-2 px-4 bg-blue-800 rounded-lg">
          <nav className="flex flex-col space-y-2">
            <Link href="/category" className="px-3 py-2 hover:bg-blue-700 rounded-md">
              Category
            </Link>

            <div>
              <button
                className="flex justify-between items-center w-full px-3 py-2 hover:bg-blue-700 rounded-md"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProductsDropdownOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {productFilters.map((filter) => (
                    <Link
                      key={filter.slug}
                      href={`/products/${filter.slug}`}
                      className="block px-3 py-1.5 text-sm hover:bg-blue-700 rounded-md"
                      onClick={() => {
                        setIsProductsDropdownOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      {filter.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/ranking" className="px-3 py-2 hover:bg-blue-700 rounded-md">
              Ranking
            </Link>
            <Link href="/blog" className="px-3 py-2 hover:bg-blue-700 rounded-md">
              Blog
            </Link>
            <Link href="/submit" className="px-3 py-2 hover:bg-blue-700 rounded-md">
              Submit
            </Link>
            <Link href="/tutorial" className="px-3 py-2 hover:bg-blue-700 rounded-md">
              Tutorial
            </Link>
            <div className="flex space-x-2 pt-2 border-t border-blue-700">
              <Link href="/signup" className="flex-1 px-3 py-2 bg-white text-blue-900 rounded-md text-center">
                Sign Up
              </Link>
              <Link href="/login" className="flex-1 px-3 py-2 border border-white/30 rounded-md text-center">
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
