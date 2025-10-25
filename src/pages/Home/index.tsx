import React from "react";
import ProductCard from "@/src/components/share/ProductCard";
import { products } from "@/src/data/product";
import FeatureSection from "./components/FeatureSection";
import WhyChooseSection from "./components/WhyChooseSection";
import OrderStepsSection from "./components/OrderStepsSection";

function HomeView() {
  return (
    <div>
      <p className="text-[40px] font-bold">
        SẢN PHẨM CÓ SẴN - THÂN THIỆN VỚI MÔI TRƯỜNG
      </p>
      <p className="text-[18px] w-[538px] mt-2">
        Với Việt Xanh, bạn hoàn toàn yên tâm lựa chọn vì mỗi sản phẩm đều thân
        thiện với môi trường và an toàn cho cuộc sống.
      </p>
      <div className="flex justify-between mt-8 ">
        {products.slice(0,4).map((pro) => (
          <ProductCard
            key={pro.id}
            id={pro.id}
            image={pro.image}
            title={pro.title}
            description={pro.shortDescription}

          />
        ))}
      </div>
      <FeatureSection />
      <WhyChooseSection />
      <OrderStepsSection />

    </div>
  );
}

export default HomeView;
