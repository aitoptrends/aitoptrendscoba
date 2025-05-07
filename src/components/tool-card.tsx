import Image from "next/image"
import Link from "next/link"
import { Bookmark } from "lucide-react"

interface ToolCardProps {
  name: string
  rating: string
  image: string
}

export default function ToolCard({ name, rating, image }: ToolCardProps) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 border-b">
        <Link href={`/tool/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
        </Link>
      </div>
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium">{name.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-medium text-sm">{name}</h3>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">{rating}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
