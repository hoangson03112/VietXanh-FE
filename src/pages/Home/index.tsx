import React from "react";
import ProductCard from "@/src/components/share/ProductCard";
import { products } from "@/src/data/product";
import FeatureSection from "./components/FeatureSection";
import WhyChooseSection from "./components/WhyChooseSection";
import OrderStepsSection from "./components/OrderStepsSection";

function HomeView() {
  return (
    <div className="px-4 md:px-0">
      {/* PHẦN TIÊU ĐỀ */}
      <div className="text-center md:text-left">
        <p className="text-[24px] md:text-[40px] font-bold leading-tight">
          SẢN PHẨM CÓ SẴN - THÂN THIỆN VỚI MÔI TRƯỜNG
        </p>
        <p className="text-[16px] md:text-[18px] mt-2 md:w-[538px] mx-auto md:mx-0 text-gray-700">
          Với Việt Xanh, bạn hoàn toàn yên tâm lựa chọn vì mỗi sản phẩm đều thân
          thiện với môi trường và an toàn cho cuộc sống.
        </p>
      </div>

      {/* DANH SÁCH SẢN PHẨM */}
      <div
        className="
    flex flex-wrap justify-center gap-8 md:gap-10 mt-10
  "
      >
        {products.slice(0, 4).map((pro) => (
          <div
            key={pro.id}
            className="
        basis-full sm:basis-[48%] lg:basis-[22%]
        flex justify-center
      "
          >
            <ProductCard
              id={pro.id}
              image={pro.image}
              title={pro.title}
              description={pro.shortDescription}
            />
          </div>
        ))}
      </div>

      {/* CÁC SECTION */}
      <FeatureSection />
      <WhyChooseSection />
      <OrderStepsSection />
    </div>
  );
}

export default HomeView;
