'use client';
import React from 'react'
import { news } from '@/src/data/news';
import { useParams } from "next/navigation";


function NewsDetails() {
    const params = useParams();
  const id = Number(params?.id);
  const newdeails = news.find((n) => n.id === id);
  if (!newdeails) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Không có tin tức nào
      </div>
    );
  }
  return (
    <div>
        <h1 className="text-[40px] font-bold">
              {newdeails.title}
        </h1>
        <img src={newdeails.imgUrl} alt={newdeails.title} className="w-[761px] mt-5 h-[508px] object-cover"/>
        <p className="text-[20px] text-[#2A2A2A] mt-10">{newdeails.content}</p>
    </div>
  )
}

export default NewsDetails