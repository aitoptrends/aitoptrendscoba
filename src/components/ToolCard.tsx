import React from "react";
import Image from "next/image";

type ToolCardProps = {
  name: string;
  rating: string;
  image: string;
};

export default function ToolCard({ name, rating, image }: ToolCardProps) {
  return (
    <div className="min-w-[260px] bg-white rounded-2xl shadow p-4 flex flex-col items-center border border-gray-200 hover:shadow-lg transition-shadow relative">
      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
        <Image src={image} alt={name} width={200} height={100} className="object-contain" />
      </div>
      <div className="flex items-center gap-2 w-full justify-between">
        <div>
          <div className="font-bold text-gray-900 text-lg">{name}</div>
          <div className="flex items-center text-yellow-500 text-sm font-semibold">★ {rating}</div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Bookmark">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 3v18l7-5 7 5V3z"/></svg>
        </button>
      </div>
    </div>
  );
} 