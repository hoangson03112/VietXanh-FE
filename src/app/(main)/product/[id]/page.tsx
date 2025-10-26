"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/src/data/product";
import { ArrowRight, ShoppingCart,Plus } from "lucide-react";
import Image from "next/image";
import ProductCard from "@/src/components/share/ProductCard";
import { quesions } from "@/src/data/question";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const product = products.find((p) => p.id === id);

  // Ảnh chính mặc định là ảnh đầu tiên trong mảng images
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Sản phẩm không tồn tại.
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen flex justify-center py-10">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          {/* LEFT: Mô tả */}
          <div className="flex-1 flex flex-col justify-start">
            <h1 className="text-[30px] font-bold mt-10 mb-4 text-[#333333]">
              {product.title}
            </h1>
            <p className="text-[24px] font-semibold text-[#333333] mb-6 border-b border-[#ddd] border-t py-4">
              {product.price.toLocaleString("vi-VN")} đ
            </p>

            <h3 className="text-[20px] font-bold text-[#333333] mb-2">
              Mô tả sản phẩm
            </h3>
            <p className="text-[#666666] text-[14px]">{product.description}</p>

            {/* Button Liên hệ */}
            <div className="border-b border-t border-[#ddd] py-4 mt-10">
              <button className="flex items-center justify-center bg-[#222] hover:bg-[#444] text-white font-semibold py-3 rounded-full w-[260px] transition-all duration-300">
                <ShoppingCart className="mr-2 w-5 h-5" /> Liên Hệ
              </button>
            </div>

            {/* Features */}
            <ul className="mt-10 space-y-2 text-[#666666] text-[14px]">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Hình ảnh */}
          <div className="flex-1 flex flex-col items-center">
            {/* Ảnh chính */}
            <div className="w-full aspect-square bg-gray-300 flex items-center justify-center rounded-sm">
              <img
                src={selectedImage || product.images[0]}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Ảnh nhỏ bên dưới */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                className="p-2 text-[#444] hover:text-black"
                onClick={() => {
                  const currentIndex = product.images.indexOf(
                    selectedImage || product.images[0]
                  );
                  const prevIndex =
                    currentIndex === 0
                      ? product.images.length - 1
                      : currentIndex - 1;
                  setSelectedImage(product.images[prevIndex]);
                }}
              >
                &#8249;
              </button>

              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-[100px] h-[100px] cursor-pointer border-2 ${
                      selectedImage === img
                        ? "border-black"
                        : "border-transparent"
                    } bg-gray-300 flex items-center justify-center`}
                  >
                    <img
                      src={img}
                      alt={`${product.title}-${idx}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <button
                className="p-2 text-[#444] hover:text-black"
                onClick={() => {
                  const currentIndex = product.images.indexOf(
                    selectedImage || product.images[0]
                  );
                  const nextIndex =
                    currentIndex === product.images.length - 1
                      ? 0
                      : currentIndex + 1;
                  setSelectedImage(product.images[nextIndex]);
                }}
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[180px]">
        <p className="text-[40px] font-bold text-center">SẢN PHẨM LIÊN QUAN</p>
        <div className="flex justify-between mt-10 flex-wrap gap-y-16">
          {products.slice(0, 8).map((pro) => (
            <ProductCard
              key={pro.id}
              id={pro.id}
              image={pro.image}
              title={pro.title}
              description={pro.shortDescription}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="w-[280px] bg-[#777777] flex items-center justify-center gap-1 h-[50px] text-white text-[20px] rounded-[30px] cursor-pointer">
            XEM THÊM <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-[40px] font-bold text-center mt-[200px]">CâU HỎI PHỔ BIẾN</p>
        <div className="mt-20">
            {quesions.map((q, index) => (
                <div key={index} className="border border-[#ddd] p-4 flex justify-between items-center mt-5 bg-white">
                    <h3 className="text-[20px] font-bold text-[#21272A]">{q.title}</h3>
                    <Plus className="w-6 h-6 text-black" />
                </div>
            ))}


        </div>
      </div>
    </div>
  );
}
