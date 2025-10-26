"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <div className="relative w-full max-w-[295px] mx-auto">
      <Link
        href={`/product/${id}`}
        className="bg-[#cacaca] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-[370px]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[210px]  rounded-t-xl"
        />

        <div className="px-6 py-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-[20px] font-semibold text-[#333333] line-clamp-2">
              {title}
            </h3>
            <p className="text-[#777777] text-[14px] mt-2 line-clamp-3">
               {description.length > 58 ? description.slice(0, 58) + "..." : description}
            </p>
          </div>

          <div className="mt-4 ">
            <span className="inline-flex pb-2 items-center font-semibold text-black hover:translate-x-1 transition-transform">
              Xem thêm <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
