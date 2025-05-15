"use client"

import Image from "next/image"
import Link from "next/link"
import { Bookmark, Star } from "lucide-react"
import Header from "@/components/base-header"
import Footer from "@/components/Footer"

interface Product {
  id: string
  name: string
  logo: string
  rating: number
  reviewsCount: number
  description: string
  isFree: boolean
  isLimited: boolean
}

interface Category {
  title: string
  products: Product[]
}

interface CategoryData {
  [key: string]: Category
}

// This would typically come from a database
const categoryData: CategoryData = {
  chatbot: {
    title: "Chatbot",
    products: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4,
        reviewsCount: 207,
        description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
        isFree: true,
        isLimited: true,
      },
      {
        id: "claudeai",
        name: "ClaudeAI",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4,
        reviewsCount: 207,
        description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
        isFree: true,
        isLimited: true,
      },
      {
        id: "gemini",
        name: "Gemini",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4,
        reviewsCount: 207,
        description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
        isFree: true,
        isLimited: true,
      },
      {
        id: "copilot",
        name: "Copilot",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4,
        reviewsCount: 207,
        description: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
        isFree: true,
        isLimited: true,
      },
    ],
  },
  design: {
    title: "Design",
    products: [
      {
        id: "midjourney",
        name: "Mid Journey V7",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4.5,
        reviewsCount: 189,
        description: "Create stunning images with the power of AI and your imagination.",
        isFree: false,
        isLimited: false,
      },
      {
        id: "firefly",
        name: "Adobe Firefly 3",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4.2,
        reviewsCount: 156,
        description: "Create stunning images with the power of AI and your imagination.",
        isFree: true,
        isLimited: true,
      },
      {
        id: "stablediffusion",
        name: "Stable Diffusion 3.5",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4.3,
        reviewsCount: 178,
        description: "Create stunning images with the power of AI and your imagination.",
        isFree: true,
        isLimited: false,
      },
    ],
  },
  writing: {
    title: "Writing",
    products: [
      {
        id: "quillbot",
        name: "Quillbot",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4.1,
        reviewsCount: 145,
        description: "Enhance your writing with AI-powered tools for clarity and creativity.",
        isFree: true,
        isLimited: true,
      },
      {
        id: "contentshake",
        name: "ContentShake AI",
        logo: "/placeholder.svg?height=40&width=40",
        rating: 4.0,
        reviewsCount: 132,
        description: "Enhance your writing with AI-powered tools for clarity and creativity.",
        isFree: false,
        isLimited: false,
      },
    ],
  },
}

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { subcategory?: string }
}) {
  const slug = params.slug
  const subcategory = searchParams.subcategory

  const category = categoryData[slug as keyof typeof categoryData] || {
    title: "Category Not Found",
    products: [],
  }

  // You could filter products by subcategory here if needed
  // For now, we'll just display all products in the category

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {subcategory
            ? subcategory
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : category.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product) => (
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
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={(e) => e.preventDefault()} // Prevent navigation when clicking the bookmark
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
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
                    <span className="text-gray-400">{product.reviewsCount}</span>
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

        {category.products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <Link href="/category" className="text-blue-600 hover:underline mt-2 inline-block">
              Return to categories
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
