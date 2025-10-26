"use client";
import Image from "next/image";
import React from "react";

export default function FeatureSection() {
  return (
    <section className="flex flex-col mt-[100px] md:mt-[200px] md:flex-row justify-between gap-8 md:gap-12 px-4 md:px-0">
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <p className="text-[16px] md:text-[20px] uppercase tracking-widest text-[#757575] font-bold mb-2">
          Viet Xanh
        </p>
        <h2 className="text-[24px] md:text-[40px] text-black font-bold mb-4 leading-tight">
          GIẢI PHÁP XANH – CÁC SẢN PHẨM PHÂN HỦY SINH HỌC TỪ TINH BỘT NGÔ
        </h2>
        <p className="text-black text-[16px] md:text-[20px] mb-6 mt-4 md:mt-8">
          Sản phẩm phân hủy sinh học Việt Xanh được sản xuất từ tinh bột ngô tự
          nhiên, có khả năng phân hủy hoàn toàn trong môi trường mà không để lại
          chất thải độc hại.
        </p>
        <button className="bg-[#757575] text-white px-6 py-3 text-[16px] md:text-[20px] font-bold w-full md:w-[272px] mx-auto md:mx-0 rounded-lg">
          KHÁM PHÁ NGAY
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="md:w-1/2 flex flex-col items-center gap-4">
        <div className="w-full max-w-[600px] rounded-[30px] md:rounded-[50px] bg-gray-300 h-[300px] md:h-[439px] overflow-hidden">
          <img
            src="/image/tinhbot.jpeg"
            alt="Sản phẩm chính"
            className=" w-full h-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-[600px]">
          <div className="flex-1 rounded-[12px] overflow-hidden bg-gray-300 h-[150px] md:h-[187px]">
            <img
              src="/image/tinhbot2.jpg"
              alt="Sản phẩm phụ 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 rounded-[12px] overflow-hidden bg-gray-300 h-[150px] md:h-[187px]">
            <img
              src="/image/tinhbot3.jpg"
              alt="Sản phẩm phụ 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
