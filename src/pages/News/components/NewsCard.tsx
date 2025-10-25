import React from "react";
import { news } from "@/src/data/news";
import Link from "next/link";

function NewsCard() {
  return (
    <>
      {news.map((item) => (
        <Link href={`/news/${item.id}`} key={item.id}
        className="w-[370px] h-[448px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <img src={item.imgUrl} alt={item.title} className="w-full h-[230px]" />
            <div className="">
                <h3 className="text-[20px] font-bold  uppercase">{item.title}</h3>
                <p className="text-[18px] text-[#2A2A2A] mt-4">{item.description}</p>
            </div>
        </Link>
      ))}
    </>
  );
}

export default NewsCard;
