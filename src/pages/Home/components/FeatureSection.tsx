"use client";
import Image from "next/image";
import React from "react";

export default function FeatureSection() {
  return (
    <section className=" flex flex-col mt-[200px] md:flex-row  justify-between gap-10">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2">
        <p className="text-[20px] uppercase tracking-widest text-[#757575] font-bold mb-2">
          Viet Xanh
        </p>
        <h2 className="text-[40px]  text-black font-bold mb-4">
          GIẢI PHÁP XANH – CÁC SẢN PHẨM PHÂN HỦY SINH HỌC TỪ TINH BỘT NGÔ
        </h2>
        <p className="text-black text-[20px] mb-6 mt-8">
          Sản phẩm phân hủy sinh học Việt Xanh được sản xuất từ tinh bột ngô tự
          nhiên, có khả năng phân hủy hoàn toàn trong môi trường mà không để lại
          chất thải độc hại.
        </p>
        <button className="bg-[#757575] text-white px-6 py-3  text-[20px] font-bold w-[272px] cursor-pointer ">
          KHÁM PHÁ NGAY
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="md:w-1/2 flex flex-col items-center gap-4">
        <div className="w-[607px] rounded-[50px]  bg-gray-300 h-[439px]">
          <img
            src="/images/main-product.jpg"
            alt="Sản phẩm chính"
            className="object-cover rounded-[50px] w-full h-full"
          />
        </div>

        <div className="flex gap-8 mt-5 w-full">
          <div className="flex-1 rounded-[12px] overflow-hidden bg-gray-300 h-[187px]">
            <img
              src="/images/sub1.jpg"
              alt="Sản phẩm phụ 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 rounded-[12px] overflow-hidden bg-gray-300 h-[187px]">
            <img
              src="/images/sub2.jpg"
              alt="Sản phẩm phụ 2"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
