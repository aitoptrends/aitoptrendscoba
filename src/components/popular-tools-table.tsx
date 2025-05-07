import { TrendingUp } from "lucide-react"

export default function PopularToolsTable() {
  const tools = [
    { rank: 1, name: "ChatGPT", category: "Chatbot", visits: "4,708", growth: "643.3M", rate: "16.47%" },
    { rank: 2, name: "Grok", category: "Chatbot", visits: "4,708", growth: "643.3M", rate: "16.47%" },
    { rank: 3, name: "Canva", category: "Design Generator", visits: "4,708", growth: "643.3M", rate: "16.47%" },
    { rank: 4, name: "Claude", category: "Chatbot", visits: "4,708", growth: "643.3M", rate: "16.47%" },
    { rank: 5, name: "Copilot", category: "Chatbot", visits: "4,708", growth: "643.3M", rate: "16.47%" },
  ]

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tool
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Monthly Visit
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Growth
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Growth Rate
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tools.map((tool) => (
            <tr key={tool.rank} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tool.rank}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tool.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tool.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tool.visits}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  {tool.growth}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  {tool.rate}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
