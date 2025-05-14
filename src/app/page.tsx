import HomeHeader from "@/components/home-header"
import ToolCard from "@/components/tool-card"
import PopularToolsTable from "@/components/popular-tools-table"
import CategorySection from "@/components/category-section"
import NewsCard from "@/components/news-card"
import Footer from "@/components/Footer"
import DropdownSelectors from "@/components/dropdown-selectors"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HomeHeader />

      {/* Top AI Tools Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-medium text-gray-700 mb-6">Top AI tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToolCard name="ChatGPT" rating="4.9/5" image="/placeholder.svg?height=200&width=300" />
            <ToolCard name="ChatGPT" rating="4.9/5" image="/placeholder.svg?height=200&width=300" />
            <ToolCard name="ChatGPT" rating="4.9/5" image="/placeholder.svg?height=200&width=300" />
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="py-12 px-4 bg-[#C084FC]/15">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Uncover the Most Popular AI Tools — Tried, Tested, Trusted
          </h2>
          <div className="w-full h-1 bg-gray-300 my-4"></div>

          <DropdownSelectors />

          <div className="bg-gradient-to-r from-indigo-500/80 to-indigo-700/80 rounded-t-lg p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="bg-green-400 p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="font-medium text-lg">Top 5 - Monthly Traffic</span>
            </div>
          </div>

          <PopularToolsTable />

          <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-md mt-4 flex items-center justify-center gap-2">
            see full statistics
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-slate-600 italic mb-2">
            Jump Into the Right AI Tools — Organized by Category
          </h2>
          <div className="w-full h-px bg-gray-300 my-6"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Unlock innovative AI technologies for all your tasks, industries, and needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <CategorySection
              title="Chatbot"
              items={[
                { name: "ChatGPT", rank: 1 },
                { name: "Gemini-AI", rank: 2 },
                { name: "Microsoft-Copilot", rank: 3 },
                { name: "Meta-AI", rank: 4 },
                { name: "DeepSeek", rank: 5 },
                { name: "Grok-3", rank: 6 },
                { name: "ChatSonic", rank: 7 },
              ]}
            />

            <CategorySection
              title="Image Generator"
              items={[
                { name: "Mid Journey V7", rank: 1 },
                { name: "Adobe Firefly 3", rank: 2 },
                { name: "Stable Diffusion 3.5", rank: 3 },
                { name: "Leonardo AI", rank: 4 },
                { name: "Ideogram 3.0", rank: 5 },
                { name: "FLUX.1", rank: 6 },
                { name: "Reve Image", rank: 7 },
              ]}
            />

            <CategorySection
              title="Writing"
              items={[
                { name: "QuillBot", rank: 1 },
                { name: "ContentShake AI", rank: 2 },
                { name: "Rytr", rank: 3 },
                { name: "Undetectable AI", rank: 4 },
                { name: "Free AI Content Writer", rank: 5 },
                { name: "WriteSonic", rank: 6 },
                { name: "Semrush", rank: 7 },
              ]}
            />
          </div>

          <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-md mt-4 flex items-center justify-center gap-2">
            see all categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* News Section */}
        {/* News Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#0F172A]/65 to-[#C084FC]/65">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white italic mb-2">
            Latest Drops: AI News, Insights, and Big Moves
          </h2>
          <div className="w-full h-px bg-white/50 my-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <NewsCard
              title="AI Tools are Redefining Productivity in 2025: What's Leading the Charge?"
              image="/placeholder.svg?height=150&width=300"
            />
            <NewsCard
              title="From Chatbots to Super Apps: How AI Tools are Shaping Our Daily Lives"
              image="/placeholder.svg?height=150&width=300"
            />
            <NewsCard
              title="The Rise of Specialized AI Tools: Custom Solutions for Every Industry"
              image="/placeholder.svg?height=150&width=300"
            />
            <NewsCard
              title="Which AI Tools Are Winning Users' Hearts in 2025?"
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
