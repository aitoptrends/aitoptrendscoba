"use client"

import { useState } from "react"
import Link from "next/link"

interface BaseHeaderProps {
  variant: "home" | "secondary"
}

export default function BaseHeader({ variant }: BaseHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHome = variant === "home"

  return (
    <header
      className={`relative min-h-[100px] ${
        isHome
          ? "bg-gradient-to-r from-[#0F172A] via-[#314A88] to-[#334F90] text-white py-6 px-6"
          : "bg-gradient-to-r from-[#0F172A] via-[#314A88] to-[#334F90] text-white py-6 px-6"
      }`}
    >
      {/* Vector background */}
      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: "url('/images/vector-waves.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10 h-full">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-purple-300">
            AI Top Trends
          </Link>

          <div className="hidden md:flex items-center space-x-2 ml-8">
            <Link href="/category" className="px-4 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Category
            </Link>
            <div className="relative group">
              <Link
                href="/products"
                className="px-4 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20 flex items-center"
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
            <Link href="/ranking" className="px-4 py-2 text-sm bg-black rounded-full hover:bg-black/80">
              Ranking
            </Link>
            <Link href="/blog" className="px-4 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Blog
            </Link>
            <Link href="/submit" className="px-4 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Submit
            </Link>
            <Link href="/tutorial" className="px-4 py-2 text-sm bg-white/10 rounded-full hover:bg-white/20">
              Tutorial
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isHome && (
            <button className="p-2 rounded-full hover:bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          )}

          <button className="hidden md:inline-flex p-2 rounded-full hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button className="hidden md:inline-flex p-2 rounded-full hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          <Link
            href="/signup"
            className="hidden md:inline-flex px-5 py-2 bg-white text-blue-900 rounded-md text-sm font-medium hover:bg-gray-100"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="hidden md:inline-flex px-5 py-2 border border-white/30 rounded-md text-sm font-medium hover:bg-white/10"
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
        <div className="md:hidden mt-2 py-3 px-4 bg-blue-800 rounded-lg relative z-10">
          <nav className="flex flex-col space-y-3">
            <Link href="/category" className="px-4 py-2 hover:bg-blue-700 rounded-md">
              Category
            </Link>
            <Link href="/products" className="px-4 py-2 hover:bg-blue-700 rounded-md">
              Products
            </Link>
            <Link href="/ranking" className="px-4 py-2 hover:bg-blue-700 rounded-md">
              Ranking
            </Link>
            <Link href="/blog" className="px-4 py-2 hover:bg-blue-700 rounded-md">
              Blog
            </Link>
            <Link href="/submit" className="px-4 py-2 hover:bg-blue-700 rounded-md">
              Submit
            </Link>
            <Link href="/tutorial" className="px-4 py-2 hover:bg-blue-700 rounded-md">
              Tutorial
            </Link>
            <div className="flex space-x-3 pt-3 border-t border-blue-700">
              <Link href="/signup" className="flex-1 px-4 py-2 bg-white text-blue-900 rounded-md text-center">
                Sign Up
              </Link>
              <Link href="/login" className="flex-1 px-4 py-2 border border-white/30 rounded-md text-center">
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
