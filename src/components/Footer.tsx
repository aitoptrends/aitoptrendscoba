import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-4">AI Top Trends</h3>
          <p className="text-sm text-gray-600 mb-4">
            The Smartest Directory for AI Tools — Bookmark, Reviews, Rankings, and many More
          </p>
          <p className="text-xs text-gray-500">© 2025 AI Top Trends. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/submit" className="text-sm text-gray-600 hover:text-gray-900">
                Submit an AI Tool
              </Link>
            </li>
            <li>
              <Link href="/advertise" className="text-sm text-gray-600 hover:text-gray-900">
                Advertise
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/news" className="text-sm text-gray-600 hover:text-gray-900">
                News
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-sm text-gray-600 hover:text-gray-900">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-4">Tools</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/directory" className="text-sm text-gray-600 hover:text-gray-900">
                AI Tool Directory
              </Link>
            </li>
            <li>
              <Link href="/rankings" className="text-sm text-gray-600 hover:text-gray-900">
                AI Rankings
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-sm text-gray-600 hover:text-gray-900">
                Add Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
