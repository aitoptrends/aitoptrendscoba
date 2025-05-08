"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Expanded header for home page */}
      <header className="relative bg-gradient-to-r from-[#0F172A] via-[#314A88] to-[#334F90] text-white py-3 px-4">
         

        <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-xl font-bold text-purple-300">
              AI Top Trends
            </Link>

            <div className="hidden md:flex items-center space-x-1 ml-6">
              <Link href="/category" className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20">
                Category
              </Link>
              <div className="relative group">
                <Link
                  href="/products"
                  className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20 flex items-center"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#314A88] to-[#334F90] py-16 px-4 relative overflow-hidden">
        {/* Vector background */}
        <div
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            backgroundImage: "url('/images/vector-waves.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold italic text-white mb-8 [text-shadow:_3px_3px_0px_#8B5CF6,_6px_6px_10px_rgba(139,92,246,0.6)]">
            Find & Review the Top AI Tools of Today
          </h1>
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for AI tool"
              className="w-full py-3 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>
    </>
  )
}
