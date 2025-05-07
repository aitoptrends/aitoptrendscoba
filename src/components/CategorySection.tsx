import React from "react";

type CategorySectionProps = {
  title: string;
  items: { name: string; rank: number }[];
};

export default function CategorySection({ title, items }: CategorySectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
      <div className="font-bold text-lg text-gray-900 mb-2">{title}</div>
      <ol className="list-decimal list-inside text-gray-700 mb-4">
        {items.map((tool) => (
          <li key={tool.name} className="flex items-center justify-between">
            <span>{tool.name}</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
          </li>
        ))}
      </ol>
      <button className="mt-auto bg-[#e0c3fc] text-[#2a2e6e] px-4 py-1 rounded-full font-semibold text-sm hover:bg-[#d1b3fc] transition">See all &gt;&gt;</button>
    </div>
  );
} 