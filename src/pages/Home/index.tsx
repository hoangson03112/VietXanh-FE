import React from "react";
import CategoryCard from "@/src/components/share/ProductCard";
import { categories } from "@/src/data/product";
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
      <div className="flex gap-6 mt-8">
        {categories.slice(0,4).map((cat) => (
          <CategoryCard
            key={cat.id}
            image={cat.image}
            title={cat.title}
            description={cat.description}
            link={cat.link}
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
