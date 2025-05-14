import { TrendingUp } from "lucide-react"

export default function PopularToolsTable() {
  const tools = [
    { rank: 1, name: "ChatGPT", category: "Chatbot", visits: "4.70B", growth: "643.2M", rate: "16.47%" },
    { rank: 2, name: "Grok", category: "Chatbot", visits: "4.70B", growth: "643.2M", rate: "16.47%" },
    { rank: 3, name: "Canva", category: "Design Generator", visits: "4.70B", growth: "643.2M", rate: "16.47%" },
    { rank: 4, name: "Claude", category: "Chatbot", visits: "4.70B", growth: "643.2M", rate: "16.47%" },
    { rank: 5, name: "Copilot", category: "Chatbot", visits: "4.70B", growth: "643.2M", rate: "16.47%" },
  ]

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Rank
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Tool
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Monthly Visit
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Growth
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-600">
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
