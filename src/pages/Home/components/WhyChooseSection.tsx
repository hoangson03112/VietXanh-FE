"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <div className="mt-[200px]">
      <h2 className="text-[40px] font-bold  mb-2 text-center ">
        VÌ SAO CHỌN VIỆT XANH
      </h2>
      <p className="text-[20px] mb-8 text-center w-full]">
        Chúng tôi mang đến trải nghiệm xanh – tiện lợi và thân thiện với môi
        trường <br></br> trong từng sản phẩm Việt Xanh.
      </p>
      <section className="flex flex-col md:flex-row  justify-between gap-10">
        {/* LEFT IMAGES */}
        <div className="flex-col flex items-center justify-center gap-5">
          <div className="flex gap-6 items-end">
            <div className="w-[345px] h-[290px] bg-gray-300">
              <img
                src="/images/choose1.jpg"
                alt="Ảnh 1"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-[183px] h-[241px] bg-gray-300">
              <img
                src="/images/choose2.jpg"
                alt="Ảnh 2"
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-[291px] h-[219px] bg-gray-300">
            <img
              src="/images/choose3.jpg"
              alt="Ảnh 3"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 mt-15">
          <ul className="space-y-8 text-[22px]">
            {[
              "Giao hàng nhanh chóng – Nhận hàng nhanh, không lo về thời gian.",
              "Dễ dàng mua sắm – Mua sắm đơn giản, thuận tiện chỉ trong vài bước.",
              "Hỗ trợ 24/7 – Luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.",
              "Đổi trả linh hoạt – Thoải mái đổi trả nếu sản phẩm không phù hợp.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-6">
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
