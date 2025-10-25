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

const CategoryCard: React.FC<CategoryCardProps> = ({ id, image, title, description }) => {
  return (
    <div className="relative">
      {/* Link tới trang chi tiết sản phẩm */}
      <Link
        href={`/product/${id}`}
        className=" bg-[#cacaca] w-[295px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-[350px]"
      >
        {/* Ảnh sản phẩm */}
        <img
          src={image}
          alt={title}
          className="w-full h-[210px] rounded-t-xl object-cover"
        />

        {/* Nội dung */}
        <div className="relative z-10 px-6 flex flex-col py-4 justify-between">
          <h3 className="text-[20px] font-semibold text-[#333333]">{title}</h3>
          <p className="text-[#777777] text-[14px] mt-1">{description}</p>
        </div>
      </Link>

      <Link
        href="/product"
        className="absolute bottom-4 left-6 inline-flex items-center font-semibold text-black hover:translate-x-1 transition-transform"
      >
        Xem thêm <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
};

export default CategoryCard;
