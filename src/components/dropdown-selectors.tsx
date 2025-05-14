"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface DropdownOption {
  id: string
  label: string
}

interface DropdownProps {
  label: string
  icon: React.ReactNode
  options: DropdownOption[]
  selectedOption: string
  onSelect: (optionId: string) => void
}

function Dropdown({ label, icon, options, selectedOption, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const selectedLabel = options.find((option) => option.id === selectedOption)?.label || label

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm hover:bg-gray-50"
      >
        <div className="flex items-center">
          {icon}
          {selectedLabel}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                onSelect(option.id)
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 text-sm ${
                selectedOption === option.id ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DropdownSelectors() {
  // Location options
  const [selectedLocation, setSelectedLocation] = useState("worldwide")
  const locationOptions = [
    { id: "worldwide", label: "Worldwide" },
    { id: "north-america", label: "North America" },
    { id: "europe", label: "Europe" },
    { id: "asia", label: "Asia" },
    { id: "africa", label: "Africa" },
    { id: "south-america", label: "South America" },
    { id: "oceania", label: "Oceania" },
  ]

  // Category options
  const [selectedCategory, setSelectedCategory] = useState("all")
  const categoryOptions = [
    { id: "all", label: "All Categories" },
    { id: "chatbot", label: "Chatbot" },
    { id: "image-generator", label: "Image Generator" },
    { id: "writing", label: "Writing" },
    { id: "video", label: "Video" },
    { id: "audio", label: "Audio" },
    { id: "code", label: "Code" },
  ]

  // Month options
  const [selectedMonth, setSelectedMonth] = useState("january")
  const monthOptions = [
    { id: "january", label: "January" },
    { id: "february", label: "February" },
    { id: "march", label: "March" },
    { id: "april", label: "April" },
    { id: "may", label: "May" },
    { id: "june", label: "June" },
    { id: "july", label: "July" },
    { id: "august", label: "August" },
    { id: "september", label: "September" },
    { id: "october", label: "October" },
    { id: "november", label: "November" },
    { id: "december", label: "December" },
  ]

  // Year options
  const [selectedYear, setSelectedYear] = useState("2025")
  const yearOptions = [
    { id: "2025", label: "2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
    { id: "2022", label: "2022" },
  ]

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Dropdown
        label="Worldwide"
        icon={<span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>}
        options={locationOptions}
        selectedOption={selectedLocation}
        onSelect={setSelectedLocation}
      />

      <Dropdown
        label="Category"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        }
        options={categoryOptions}
        selectedOption={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <Dropdown
        label="January"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        }
        options={monthOptions}
        selectedOption={selectedMonth}
        onSelect={setSelectedMonth}
      />

      <Dropdown
        label="2025"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        }
        options={yearOptions}
        selectedOption={selectedYear}
        onSelect={setSelectedYear}
      />
    </div>
  )
}
