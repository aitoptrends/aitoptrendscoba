import React from "react";
import Image from "next/image";

type NewsCardProps = {
  title: string;
  image: string;
};

export default function NewsCard({ title, image }: NewsCardProps) {
  return (
    <div className="bg-[#e6e6fa] rounded-xl p-4 h-40 flex flex-col justify-end shadow-md">
      <div className="mb-2 flex-1 flex items-center justify-center">
        <Image src={image} alt={title} width={150} height={60} className="object-contain" />
      </div>
      <span className="text-gray-700 font-semibold text-sm line-clamp-2">{title}</span>
    </div>
  );
} 