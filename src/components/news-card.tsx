import Image from "next/image"
import Link from "next/link"

interface NewsCardProps {
  title: string
  image: string
}

export default function NewsCard({ title, image }: NewsCardProps) {
  return (
    <Link href="/blog/article" className="block">
      <div className="bg-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-40 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium text-sm text-gray-800 line-clamp-2">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
