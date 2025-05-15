"use client"

import Image from "next/image"
import Link from "next/link"
import { Bookmark, Star, Search } from "lucide-react"
import BaseHeader from "@/components/base-header"
import Footer from "@/components/Footer"

// This would typically come from a database
const products = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/placeholder.svg?height=40&width=40",
    rating: 4,
    reviews: 207,
    description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
    isFree: true,
    isLimited: true,
  },
  {
    id: "claudeai",
    name: "ClaudeAI",
    logo: "/placeholder.svg?height=40&width=40",
    rating: 4,
    reviews: 207,
    description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
    isFree: true,
    isLimited: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    logo: "/placeholder.svg?height=40&width=40",
    rating: 4,
    reviews: 207,
    description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
    isFree: true,
    isLimited: true,
  },
  {
    id: "copilot",
    name: "Copilot",
    logo: "/placeholder.svg?height=40&width=40",
    rating: 4,
    reviews: 207,
    description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
    isFree: true,
    isLimited: true,
  },
]

const filterTitles: Record<string, string> = {
  new: "New AI Tools",
  "most-saved": "Most Saved AI Tools",
  "most-visit": "Most Visited AI Tools",
  "most-used": "Most Used AI Tools",
  submit: "Submit Your AI Tool",
}

export default function ProductsPage({ params }: { params: { filter: string } }) {
  const filter = params.filter
  const title = filterTitles[filter] || "AI Tools"

  // For the submit page, we would show a different UI
  if (filter === "submit") {
    return (
      <main className="min-h-screen bg-gray-50">
        <BaseHeader />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Submit Your AI Tool</h1>
          {/* Submit form would go here */}
          <div className="bg-white p-8 rounded-lg shadow">
            <p className="mb-4">Want to list your AI tool on AI Top Trends? Fill out the form below to get started.</p>
            {/* Form fields would go here */}
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <BaseHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 py-16 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Find & Review the Top AI Tools of Today</h1>
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
        {/* Decorative lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 C20,30 50,70 100,50 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,30 C30,10 40,90 100,30 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/products/new"
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "new"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            New
          </Link>
          <Link
            href="/products/most-saved"
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "most-saved"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Most Saved
          </Link>
          <Link
            href="/products/most-visit"
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "most-visit"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Most Visit
          </Link>
          <Link
            href="/products/most-used"
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "most-used"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Most Used
          </Link>
          <Link
            href="/products/submit"
            className={`px-4 py-2 rounded-full text-sm ${
              filter === "submit"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Submit
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow relative block"
            >
              {/* FREE LIMITED badge */}
              {product.isFree && (
                <div className="absolute top-0 right-0">
                  <div className="bg-red-600 text-white text-xs font-medium px-2 py-1">
                    FREE {product.isLimited && "LIMITED"}
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 relative">
                      <Image
                        src={product.logo || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-xl font-bold">{product.name}</h2>
                  </div>
                  
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 ml-2">{product.rating}/5</span>
                  <div className="ml-auto flex items-center">
                    <span className="text-gray-400">{product.reviews}</span>
                    <Bookmark className="h-4 w-4 ml-1 text-gray-300" />
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-4">{product.description}</p>

                <div className="flex gap-3 mt-6">
                  <button
                    className="flex-1 bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded-md text-sm font-medium"
                    onClick={(e) => {
                      e.preventDefault() // Prevent navigation
                      // Add review logic would go here
                    }}
                  >
                    Add Review
                  </button>
                  <button
                    className="flex-1 border border-teal-700 text-teal-700 hover:bg-teal-50 py-2 px-4 rounded-md text-sm font-medium"
                    onClick={(e) => e.preventDefault()} // Let the parent Link handle navigation
                  >
                    Visit
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
