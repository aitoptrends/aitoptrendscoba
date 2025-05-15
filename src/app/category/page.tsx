"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/base-header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { ChatbotIcon, DesignIcon, WritingIcon } from "@/components/category-icons"

interface Subcategory {
  name: string
  count: number
  slug: string
}

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  subcategories: Subcategory[]
}

export default function CategoryPage() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    chatbot: false,
    design: false,
    writing: false,
  })
  const [activeCategory, setActiveCategory] = useState("chatbot")

  const categories: Category[] = [
    {
      id: "chatbot",
      name: "Chatbot",
      icon: <ChatbotIcon />,
      subcategories: [
        { name: "AI Chatbot", count: 143, slug: "ai-chatbot" },
        { name: "AI Character", count: 101, slug: "ai-character" },
        { name: "AI Joke", count: 120, slug: "ai-joke" },
        { name: "AI God", count: 107, slug: "ai-god" },
        { name: "AI Assistant", count: 98, slug: "ai-assistant" },
        { name: "AI Friend", count: 95, slug: "ai-friend" },
        { name: "AI Therapist", count: 92, slug: "ai-therapist" },
        { name: "AI Tutor", count: 89, slug: "ai-tutor" },
        { name: "AI Coach", count: 86, slug: "ai-coach" },
        { name: "AI Mentor", count: 83, slug: "ai-mentor" },
      ],
    },
    {
      id: "design",
      name: "Design",
      icon: <DesignIcon />,
      subcategories: [
        { name: "3D Design", count: 110, slug: "3d-design" },
        { name: "Face Swap", count: 105, slug: "face-swap" },
        { name: "AI Avatar Generator", count: 103, slug: "ai-avatar-generator" },
        { name: "Background Remover", count: 121, slug: "background-remover" },
        { name: "AI Image Recognition", count: 101, slug: "ai-image-recognition" },
        { name: "Image Enhancer", count: 103, slug: "image-enhancer" },
        { name: "Logo Generator", count: 98, slug: "logo-generator" },
        { name: "UI Design", count: 96, slug: "ui-design" },
        { name: "Interior Design", count: 94, slug: "interior-design" },
        { name: "Fashion Design", count: 92, slug: "fashion-design" },
      ],
    },
    {
      id: "writing",
      name: "Writing",
      icon: <WritingIcon />,
      subcategories: [
        { name: "Essay Writer", count: 121, slug: "essay-writer" },
        { name: "AI Detector", count: 127, slug: "ai-detector" },
        { name: "Content Generator", count: 115, slug: "content-generator" },
        { name: "Grammar Checker", count: 112, slug: "grammar-checker" },
        { name: "Plagiarism Checker", count: 109, slug: "plagiarism-checker" },
        { name: "Text Summarizer", count: 106, slug: "text-summarizer" },
        { name: "Script Writer", count: 103, slug: "script-writer" },
        { name: "Poetry Generator", count: 100, slug: "poetry-generator" },
        { name: "Story Writer", count: 97, slug: "story-writer" },
        { name: "Technical Writer", count: 94, slug: "technical-writer" },
      ],
    },
  ]

  const toggleSection = (categoryId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    const element = document.getElementById(categoryId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-600 mb-2">
          Jump Into the Right AI Tools — Organized by Category
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Unlock innovative AI technologies for all your tasks, industries, and needs.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`block w-full px-6 py-3 rounded-full text-lg font-medium ${
                    activeCategory === category.id ? "bg-purple-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="md:w-3/4 space-y-6">
            {categories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className={`bg-white rounded-lg border p-6 ${
                  activeCategory === category.id ? "ring-2 ring-purple-500" : ""
                }`}
              >
                <div className="flex items-start mb-4">
                  <div className="w-20 h-20 relative mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {category.subcategories
                    .slice(0, expandedSections[category.id] ? undefined : 6)
                    .map((subcategory) => (
                      <Link
                        key={subcategory.slug}
                        href={`/category/${category.id}?subcategory=${subcategory.slug}`}
                        className="inline-flex items-center justify-between px-4 py-2 border rounded-full hover:bg-gray-50"
                      >
                        <span>{subcategory.name}</span>
                        <span className="text-xs text-gray-500">{subcategory.count}</span>
                      </Link>
                    ))}
                </div>

                {category.subcategories.length > 6 && (
                  <div className="text-right">
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="text-sm text-gray-600 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                    >
                      {expandedSections[category.id] ? "show less" : "show more"}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
