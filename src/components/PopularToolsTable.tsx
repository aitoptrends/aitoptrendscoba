import React from "react";

const stats = [
  { rank: 1, tool: "ChatGPT", category: "Chatbot", visit: "4.70B", growth: "643.2M", rate: "16.47%" },
  { rank: 2, tool: "Grok", category: "Chatbot", visit: "4.70B", growth: "643.2M", rate: "16.47%" },
  { rank: 3, tool: "Canva", category: "Design Generator", visit: "4.70B", growth: "643.2M", rate: "16.47%" },
  { rank: 4, tool: "Claude", category: "Chatbot", visit: "4.70B", growth: "643.2M", rate: "16.47%" },
  { rank: 5, tool: "Copilot", category: "Chatbot", visit: "4.70B", growth: "643.2M", rate: "16.47%" },
];

export default function PopularToolsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left bg-white rounded-lg">
        <thead>
          <tr className="text-gray-700 font-semibold">
            <th className="py-2 px-3">Rank</th>
            <th className="py-2 px-3">Tool</th>
            <th className="py-2 px-3">Category</th>
            <th className="py-2 px-3">Monthly Visit</th>
            <th className="py-2 px-3">Growth</th>
            <th className="py-2 px-3">Growth Rate</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((row) => (
            <tr key={row.rank} className="border-t border-gray-200">
              <td className="py-2 px-3 font-bold">{row.rank}</td>
              <td className="py-2 px-3">{row.tool}</td>
              <td className="py-2 px-3">{row.category}</td>
              <td className="py-2 px-3">{row.visit}</td>
              <td className="py-2 px-3 flex items-center gap-1">↗ {row.growth}</td>
              <td className="py-2 px-3">{row.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 