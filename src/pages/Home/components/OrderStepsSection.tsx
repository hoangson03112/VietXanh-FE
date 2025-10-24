"use client";
import React from "react";

export default function OrderStepsSection() {
  return (
    <section className="bg-[#FAF1E4] flex flex-col md:flex-row justify-between items-center gap-12 mt-[200px] px-10">
      {/* LEFT: Steps */}
      <div className="md:w-2/3 space-y-16">
        {/* STEP 1 */}
        <div className="relative bg-white border border-gray-100  w-[569px] px-8 pt-10 pb-6">
          <div className="absolute left-[-20px] top-[-20px] w-[60px] h-[60px] bg-white border-1 border-gray-100 shadow-md rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <h3 className="font-bold text-[30px] mb-2">Chọn & Tùy chỉnh</h3>
          <p className=" text-[20px]">
            Sau khi chọn chúng tôi, hãy chuyển đến các tùy chọn tùy chỉnh bao
            gồm kích thước, vật liệu, hoàn thiện và thời gian giao hàng, cập
            nhật các thiết kế đặc biệt của bạn và bắt đầu đóng gói.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="w-full flex justify-end">
          <div className="relative bg-white border border-gray-100  w-[569px] px-8 pt-10 pb-6">
            <div className="absolute left-[-20px] top-[-20px] w-[60px] h-[60px] bg-white border-1 border-gray-100 shadow-md rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-[30px] mb-2">Nhận Mẫu Miễn Phí</h3>
            <p className=" text-[20px]">
              Bản thiết kế trực tuyến miễn phí cùng với tất cả các chi tiết sẽ
              được gửi đến bạn trong vòng 24 giờ để phân tích và phê duyệt{" "}
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="relative bg-white border border-gray-100  w-[569px] px-8 pt-10 pb-6">
          <div className="absolute left-[-20px] top-[-20px] w-[60px] h-[60px] bg-white border-1 border-gray-100 shadow-md rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <h3 className="font-bold text-[30px] mb-2">Đặt Hàng</h3>
          <p className=" text-[20px]">
            Xác nhận thiết kế của bạn và đặt hàng chỉ bằng một cú nhấp chuột.
            Đối với dịch vụ giao hàng tiêu chuẩn và giao hàng nhanh, hãy chọn
            tùy chọn phù hợp và nhận hộp trong thời gian ngắn nhất{" "}
          </p>
        </div>
      </div>

      {/* RIGHT: Info */}
      <div className="w-[328px]">
        <h2 className="text-[40px] font-bold  mb-4">
          CÁCH ĐỂ <br></br> ĐẶT HÀNG
        </h2>
        <p className="text-[20px] ">
          Bạn có thể đặt hàng nhanh chóng qua website hoặc liên hệ trực tiếp với
          chúng tôi để được tư vấn chi tiết. Đội ngũ của chúng tôi luôn sẵn sàng
          hỗ trợ và mang đến cho bạn trải nghiệm mua sắm thuận tiện, đáng tin
          cậy.
        </p>
      </div>
    </section>
  );
}
