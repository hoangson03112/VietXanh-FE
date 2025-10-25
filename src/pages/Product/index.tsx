import React from "react";
import ProductCard from "@/src/components/share/ProductCard";
import { products } from "@/src/data/product";

function ProductView() {
  return (
    <div>
      <div className="">
        <p className="text-[20px] uppercase  text-[#757575] font-bold mb-2">
          Viet Xanh
        </p>
        <h2 className="text-[40px]  text-black font-bold mb-4">
          DANH MỤC SẢN PHẨM
        </h2>
        <p className="text-black text-[20px] mb-6 mt-4">
          Danh mục sản phẩm Việt Xanh mang đến các giải pháp bao bì sinh học<br></br>
          thân thiện môi trường, an toàn và bền vững cho cuộc sống xanh.
        </p>
      </div>
      <div className="flex justify-between mt-10 flex-wrap gap-y-16">
        {products.map((pro) => (
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
        <button className="w-[280px] bg-[#777777] h-[50px] text-white text-[20px] rounded-[30px] cursor-pointer">XEM THÊM</button>
      </div>
    </div>
  );
}

export default ProductView;
