import HomeHeader from "@/components/home-header"
import ToolCard from "@/components/tool-card"
import PopularToolsTable from "@/components/popular-tools-table"
import CategorySection from "@/components/category-section"
import NewsCard from "@/components/news-card"
import Footer from "@/components/Footer"

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
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Uncover the Most Popular AI Tools — Tried, Tested, Trusted
          </h2>
          <div className="w-48 h-1 mx-auto bg-purple-200 my-6"></div>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <button className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border text-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              Worldwide
              <span className="ml-1">×</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border text-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              Category
              <span className="ml-1">×</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border text-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              January
              <span className="ml-1">×</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border text-sm">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              2025
              <span className="ml-1">×</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-600/70 to-indigo-600/70 rounded-lg p-4 text-white mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-green-400 p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-medium">Top 5 - Monthly Traffic</span>
            </div>
          </div>

          <PopularToolsTable />

          <button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 rounded-md mt-4 flex items-center justify-center gap-2">
            see full statistics
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Jump Into the Right AI Tools — Organized by Category
          </h2>
          <div className="w-48 h-1 mx-auto bg-gray-200 my-6"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Unlock innovative AI technologies for all your tasks, industries, and needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <CategorySection
              title="Chatbot"
              items={[
                { name: "ChatGPT", rank: 1 },
                { name: "Gemini AI", rank: 2 },
                { name: "Microsoft Copilot", rank: 3 },
                { name: "Meta AI", rank: 4 },
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
                { name: "Quillbot", rank: 1 },
                { name: "ContentShake AI", rank: 2 },
                { name: "Rytr", rank: 3 },
                { name: "Undetectable AI", rank: 4 },
                { name: "Frase AI Content Writer", rank: 5 },
                { name: "WriteSonic", rank: 6 },
                { name: "Semrush", rank: 7 },
              ]}
            />
          </div>

          <button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 rounded-md mt-4 flex items-center justify-center gap-2">
            see all categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 px-4 bg-slate-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mb-2">
            Latest Drops: AI News, Insights, and Big Moves
          </h2>
          <div className="w-48 h-1 mx-auto bg-slate-400 my-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
