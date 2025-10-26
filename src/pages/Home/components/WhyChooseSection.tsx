"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <div className="mt-[100px] md:mt-[200px] px-6 md:px-0">
      <h2 className="text-[28px] md:text-[40px] font-bold mb-3 text-center">
        VÌ SAO CHỌN VIỆT XANH
      </h2>
      <p className="text-[16px] md:text-[20px] mb-10 text-center w-full max-w-[800px] mx-auto">
        Chúng tôi mang đến trải nghiệm xanh – tiện lợi và thân thiện với môi
        trường <br className="hidden md:block" /> trong từng sản phẩm Việt Xanh.
      </p>

      <section className="flex flex-col md:flex-row items-center md:mt-20 md-10 justify-between gap-5 md:gap-10">
        {/* LEFT IMAGES */}
        <div className="flex flex-col items-center justify-center gap-5 w-full md:w-auto">
          <img src="/image/ship.jpg" alt="Lý do chọn 1" className="w-full max-w-[400px] md:max-w-[608px] md:h-[364px] rounded-lg shadow-md" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 ">
          <ul className="space-y-6 md:space-y-8 text-[18px] md:text-[22px]">
            {[
              "Giao hàng nhanh chóng – Nhận hàng nhanh, không lo về thời gian.",
              "Dễ dàng mua sắm – Mua sắm đơn giản, thuận tiện chỉ trong vài bước.",
              "Hỗ trợ 24/7 – Luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.",
              "Đổi trả linh hoạt – Thoải mái đổi trả nếu sản phẩm không phù hợp.",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 md:gap-6 leading-snug md:leading-normal"
              >
                <CheckCircle className="text-green-600 mt-1" size={22} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
