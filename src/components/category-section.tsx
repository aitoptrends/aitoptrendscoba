import Link from "next/link"
import { Check } from "lucide-react"

interface CategoryItem {
  name: string
  rank: number
}

interface CategorySectionProps {
  title: string
  items: CategoryItem[]
}

export default function CategorySection({ title, items }: CategorySectionProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <div className="divide-y">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between p-3 hover:bg-gray-50">
            <div className="flex items-center">
              <span className="text-sm text-gray-500 w-5">{item.rank}.</span>
              <span className="text-sm font-medium ml-2">{item.name}</span>
            </div>
            <Check className="h-4 w-4 text-green-500" />
          </div>
        ))}
      </div>
      <div className="p-3 bg-gray-50 text-center">
        <Link href={`/category/${title.toLowerCase()}`} className="text-xs text-gray-500 hover:text-gray-700">
          see all in {title}
        </Link>
      </div>
    </div>
  )
}
