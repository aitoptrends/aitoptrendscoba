import BaseHeader from "@/components/base-header"
import Footer from "@/components/Footer"
import PopularToolsTable from "@/components/popular-tools-table"

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BaseHeader />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">AI Tools Ranking</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-medium mb-4">Top AI Tools by Monthly Traffic</h2>
          <p className="text-gray-600 mb-6">
            Discover the most popular AI tools based on monthly visits, growth rate, and user engagement.
          </p>

          <PopularToolsTable />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">Ranking Methodology</h2>
            <p className="text-gray-600">
              Our rankings are based on a combination of factors including monthly traffic, user reviews, feature set,
              pricing, and overall user experience. We update our rankings monthly to ensure you have access to the most
              current information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">Submit Your Tool</h2>
            <p className="text-gray-600 mb-4">
              Have an AI tool that should be included in our rankings? Submit your tool for review and get featured in
              our directory.
            </p>
            <a href="/submit" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
