import Image from "next/image"
import Link from "next/link"
import { Bookmark, Star, Award, Clock, Calendar } from "lucide-react"
import BaseHeader from "@/components/base-header"
import Footer from "@/components/Footer"

// Define types for our data
interface Review {
  id: number
  user: {
    name: string
    role: string
    avatar: string
  }
  rating: number
  date: string
  comment: string
}

interface Product {
  id: string
  name: string
  logo: string
  rating: number
  ratingsCount: number
  reviewsCount: number
  bookmarks: number
  category: string
  isFree: boolean
  isLimited: boolean
  hasAward: boolean
  description: string
  monthlyVisitors: string
  addedOn: string
  reviews?: Review[] // Make reviews optional
}

// This would typically come from a database
const productsData: Record<string, Product> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/placeholder.svg?height=80&width=80",
    rating: 4,
    ratingsCount: 4792,
    reviewsCount: 1262,
    bookmarks: 207,
    category: "Chatbot",
    isFree: true,
    isLimited: true,
    hasAward: true,
    description:
      "ChatGPT is an advanced language model developed by OpenAI, designed to understand and generate human-like text. It can assist with a wide range of tasks including answering questions, writing content, translating languages, learning support, and even generating code. Trained on a massive dataset, ChatGPT offers intelligent, conversational assistance that makes it one of the most versatile AI tools available today.",
    monthlyVisitors: "10K",
    addedOn: "23 March 2022",
    reviews: [
      {
        id: 1,
        user: {
          name: "Clara",
          role: "Content Writer",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        rating: 4,
        date: "23 Nov 2021",
        comment:
          "ChatGPT is a game-changer for my daily writing tasks. From brainstorming ideas to drafting articles, everything is faster and more efficient!",
      },
      {
        id: 2,
        user: {
          name: "Ricky",
          role: "Engineering Student",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        rating: 5,
        date: "23 Nov 2021",
        comment:
          "The model is smart and responsive. While some answers need fact-checking, it's incredibly helpful for understanding complex concepts.",
      },
      {
        id: 3,
        user: {
          name: "Anik",
          role: "Junior Developer",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        rating: 5,
        date: "23 Nov 2021",
        comment:
          "Great for learning to code! I often ask about Python errors or how to use frameworks, and the responses are clear and actionable.",
      },
    ],
  },
  claudeai: {
    id: "claudeai",
    name: "ClaudeAI",
    logo: "/placeholder.svg?height=40&width=40",
    rating: 4,
    ratingsCount: 3254,
    reviewsCount: 987,
    bookmarks: 207,
    category: "Chatbot",
    isFree: true,
    isLimited: true,
    hasAward: false,
    description:
      "Claude is an AI assistant created by Vercel to be helpful, harmless, and honest. It excels at thoughtful dialogue and creative content generation with nuanced understanding.",
    monthlyVisitors: "8K",
    addedOn: "15 June 2022",
    // No reviews for this product
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    logo: "/placeholder.svg?height=40&width=40",
    rating: 4,
    ratingsCount: 2876,
    reviewsCount: 843,
    bookmarks: 207,
    category: "Chatbot",
    isFree: true,
    isLimited: true,
    hasAward: false,
    description:
      "Google's most capable AI model, designed to be helpful, harmless, and honest in its interactions across text, code, images, and more.",
    monthlyVisitors: "7K",
    addedOn: "12 December 2023",
    // No reviews for this product
  },
  copilot: {
    id: "copilot",
    name: "Copilot",
    logo: "/placeholder.svg?height=40&width=40",
    rating: 4,
    ratingsCount: 3120,
    reviewsCount: 921,
    bookmarks: 207,
    category: "Chatbot",
    isFree: true,
    isLimited: true,
    hasAward: false,
    description:
      "Microsoft's AI assistant that helps with everyday tasks, creative projects, and learning across Microsoft products and services.",
    monthlyVisitors: "9K",
    addedOn: "5 February 2023",
    // No reviews for this product
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id
  const product = productsData[productId as keyof typeof productsData]

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <BaseHeader />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-500 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link href="/products/new" className="text-blue-600 hover:underline">
              Browse all products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Get alternative products (excluding the current one)
  const alternativeProducts = Object.values(productsData).filter((p) => p.id !== product.id)

  return (
    <main className="min-h-screen bg-gray-50">
      <BaseHeader />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-3/4">
            {/* Product header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image src={product.logo || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <h1 className="text-3xl font-bold flex items-center">
                  {product.name}
                  {product.hasAward && <Award className="ml-2 h-6 w-6 text-yellow-500" />}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating}/5</span>
                </div>
                <span className="text-gray-500">
                  {product.ratingsCount.toLocaleString()} ratings | {product.reviewsCount.toLocaleString()} reviews
                </span>
                <div className="flex items-center text-gray-500">
                  <Bookmark className="h-5 w-5 mr-1" />
                  <span>{product.bookmarks}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {product.isFree && (
                  <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded">
                    FREE {product.isLimited && "LIMITED"}
                  </span>
                )}
                <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded">
                  {product.category}
                </span>
                <button className="ml-auto bg-teal-700 hover:bg-teal-800 text-white px-4 py-1 rounded text-sm">
                  Add to Collection
                </button>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

              <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-400" />
                  <span>
                    Monthly Visitors : <strong>{product.monthlyVisitors}</strong>
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                  <span>
                    Added on : <strong>{product.addedOn}</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
              <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded text-sm">
                  Update this tool
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded text-sm">
                  Advertise
                </button>
              </div>
              </div>
              <a
                href="#"
                className="block w-full bg-teal-700 hover:bg-teal-800 text-white text-center py-3 rounded-md font-medium"
              >
                Visit
              </a>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex gap-2 mb-6">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  Ratings & Reviews
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium">
                  Analytics
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium">
                  Pro Cons
                </button>
              </div>
            </div>

            {/* Review form */}
            <div className="border-t border-b py-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Share your experience</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/placeholder.svg?height=50&width=50" alt="User" fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <button key={i} className="text-gray-300 hover:text-yellow-400">
                        <Star className="h-6 w-6" />
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <textarea
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="what do you think?"
                    ></textarea>
                    <button className="absolute bottom-3 right-3 bg-teal-700 hover:bg-teal-800 text-white px-3 py-1 rounded text-sm">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6">Here's what they said.</h2>
              <div className="space-y-6">
                {/* Use optional chaining and provide a fallback empty array */}
                {(product.reviews || []).map((review: Review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={review.user.avatar || "/placeholder.svg"}
                          alt={review.user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-gray-800">{review.comment}</p>
                          </div>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-16">
                      <p className="text-sm text-gray-600 font-medium">{review.user.name}</p>
                      <p className="text-xs text-gray-500">{review.user.role}</p>
                    </div>
                  </div>
                ))}

                {/* Show message if no reviews */}
                {(!product.reviews || product.reviews.length === 0) && (
                  <div className="text-center py-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Alternative tools */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6">Alternative tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {alternativeProducts.slice(0, 3).map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow relative"
                  >
                    {/* FREE LIMITED badge */}
                    {product.isFree && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-red-600 text-white text-xs font-medium px-2 py-1">
                          FREE {product.isLimited && "LIMITED"}
                        </div>
                      </div>
                    )}

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 relative">
                            <Image
                              src={product.logo || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="font-bold">{product.name}</h3>
                        </div>
                      </div>

                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-500 text-xs ml-1">{product.rating}/5</span>
                        <div className="ml-auto flex items-center">
                          <span className="text-gray-400 text-xs">{product.bookmarks}</span>
                          <Bookmark className="h-3 w-3 ml-1 text-gray-300" />
                        </div>
                      </div>

                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                        Revolutionize interaction, creativity, and innovation with the leader in AI.
                      </p>

                      <div className="flex gap-2">
                        <button className="flex-1 bg-teal-700 hover:bg-teal-800 text-white py-1 px-2 rounded text-xs font-medium">
                          Add Review
                        </button>
                        <button className="flex-1 border border-teal-700 text-teal-700 hover:bg-teal-50 py-1 px-2 rounded text-xs font-medium">
                          Visit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-200 rounded-md p-4">
              <h2 className="text-lg font-bold mb-4">Featured AI Tools</h2>
              {/* Featured tools would go here */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
