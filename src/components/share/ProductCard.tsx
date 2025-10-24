"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="bg-[#cacaca] w-1/4 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col  h-[350px] relative">
      {/* Ảnh sản phẩm */}
      <img
        src={image}
        alt={title}
        className="w-full h-[210px] rounded-xl "
      />
      {/* Nội dung */}
      <div className="relative z-10 px-6 flex flex-col py-4 justify-between ">
        <h3 className="text-[20px] font-semibold text-[#333333]">{title}</h3>
        <p className="text-[#777777] text-[14px] mt-1">{description}</p>

        <Link
          href={link}
          className="inline-flex items-center mt-3 font-semibold text-black hover:translate-x-1 transition-transform"
        >
          Xem thêm <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
