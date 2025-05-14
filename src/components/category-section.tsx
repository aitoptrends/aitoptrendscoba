import Link from "next/link"

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
    <div className="border rounded-lg overflow-hidden bg-white">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="p-3 text-right">
        <Link
          href={`/category/${title.toLowerCase()}`}
          className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium hover:bg-purple-200"
        >
          See all &gt;&gt;
        </Link>
      </div>
    </div>
  )
}
