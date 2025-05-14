import Link from "next/link"

interface NewsCardProps {
  title: string
  image: string
}

export default function NewsCard({ title, image }: NewsCardProps) {
  return (
    <Link href="/blog/article" className="block h-full">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg overflow-hidden h-full hover:bg-white/30 transition-colors">
        <div className="p-3">
          <div className="relative h-32 w-full bg-gray-200 rounded-md overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm text-black line-clamp-3">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
