"use client"

import type React from "react"
import { useState } from "react"
import BaseHeader from "@/components/base-header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { ChatbotIcon, DesignIcon, WritingIcon } from "@/components/category-icons"

interface CategoryItem {
  name: string
  count: number
}

interface CategorySection {
  title: string
  icon: React.ReactNode
  items: CategoryItem[]
}

export default function CategoryPage() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    Chatbot: false,
    Design: false,
    Writing: false,
  })
  const [activeCategory, setActiveCategory] = useState("Chatbot")

  const categories: CategorySection[] = [
    {
      title: "Chatbot",
      icon: <ChatbotIcon />,
      items: [
        { name: "AI Chatbot", count: 143 },
        { name: "AI Character", count: 101 },
        { name: "AI Joke", count: 120 },
        { name: "AI God", count: 107 },
        { name: "AI Assistant", count: 98 },
        { name: "AI Friend", count: 95 },
        { name: "AI Therapist", count: 92 },
        { name: "AI Tutor", count: 89 },
        { name: "AI Coach", count: 86 },
        { name: "AI Mentor", count: 83 },
      ],
    },
    {
      title: "Design",
      icon: <DesignIcon />,
      items: [
        { name: "3D Design", count: 110 },
        { name: "Face Swap", count: 105 },
        { name: "AI Avatar Generator", count: 103 },
        { name: "Background Remover", count: 121 },
        { name: "AI Image Recognition", count: 101 },
        { name: "Image Enhancer", count: 103 },
        { name: "Logo Generator", count: 98 },
        { name: "UI Design", count: 96 },
        { name: "Interior Design", count: 94 },
        { name: "Fashion Design", count: 92 },
      ],
    },
    {
      title: "Writing",
      icon: <WritingIcon />,
      items: [
        { name: "Essay Writer", count: 121 },
        { name: "AI Detector", count: 127 },
        { name: "Content Generator", count: 115 },
        { name: "Grammar Checker", count: 112 },
        { name: "Plagiarism Checker", count: 109 },
        { name: "Text Summarizer", count: 106 },
        { name: "Script Writer", count: 103 },
        { name: "Poetry Generator", count: 100 },
        { name: "Story Writer", count: 97 },
        { name: "Technical Writer", count: 94 },
      ],
    },
  ]

  const toggleSection = (title: string) => {
    console.log('Toggling section:', title, 'Current state:', expandedSections[title])
    setExpandedSections(prev => {
      const newState = {
        ...prev,
        [title]: !prev[title]
      }
      console.log('New state:', newState)
      return newState
    })
  }

  const handleCategoryClick = (title: string) => {
    setActiveCategory(title)
    // Scroll to the section with offset
    const element = document.getElementById(title.toLowerCase())
    if (element) {
      const headerOffset = 100 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <BaseHeader />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-600 italic mb-4 drop-shadow-lg">
            Jump Into the Right AI Tools — Organized by Category
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock innovative AI technologies for all your tasks, industries, and needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/5">
            <div className="sticky top-24 space-y-1.5">
              {categories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => handleCategoryClick(category.title)}
                  className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.title
                      ? "bg-purple-500 text-white shadow-md"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="md:w-4/5 space-y-8">
            {categories.map((category) => (
              <div
                key={category.title}
                id={category.title.toLowerCase()}
                className={`border rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 scroll-mt-24 ${
                  activeCategory === category.title ? "ring-2 ring-purple-500" : ""
                }`}
              >
                <div className="p-8 flex items-center gap-6">
                  <div className="w-24 h-24 flex-shrink-0">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-3">
                    {category.items
                      .slice(0, expandedSections[category.title] ? undefined : 4)
                      .map((item) => (
                        <Link
                          key={item.name}
                          href={`/category/${category.title.toLowerCase()}/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50"
                        >
                          {item.name}
                          <span className="ml-2 text-xs text-gray-500">{item.count}</span>
                        </Link>
                      ))}
                  </div>
                  {category.items.length > 4 && (
                    <div className="mt-4 text-right">
                      <button
                        onClick={() => toggleSection(category.title)}
                        className="px-4 py-2 bg-teal-700 text-white rounded-md text-sm hover:bg-teal-800 transition-colors"
                      >
                        {expandedSections[category.title] ? "show less" : "show more"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
