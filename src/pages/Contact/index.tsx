"use client";
import React, { useState } from "react";

export default function ContactView() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dữ liệu gửi:", form);
    alert("Gửi thành công!");
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-[32px] md:text-[40px] font-bold text-black uppercase">
          Liên hệ tới chúng tôi
        </h2>
        <h1 className="text-[32px] md:text-[40px] font-bold text-black uppercase mb-2">
          Việt Xanh
        </h1>
        <p className="text-[#777777] text-[18px] md:text-[20px]">
          Điền thông tin chi tiết của bạn bên dưới!
        </p>

        {/* Icon circles */}
        <div className="flex justify-center gap-4 md:gap-6 mt-5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-[#D9D9D9]"
            ></div>
          ))}
        </div>

        {/* Phone number */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#777777] text-[16px] md:text-[18px] font-medium text-white w-[220px] md:w-[265px] h-[45px] md:h-[50px] flex items-center justify-center rounded-full">
            Sđt: 0399 557 326
          </button>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1200px] mt-10"
      >
        <div className="p-6 md:p-12 lg:p-20 bg-[#B0B0B0] rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Cột trái */}
            <div className="flex flex-col gap-6 w-full lg:w-2/7">
              <div>
                <label className="block font-bold mb-2 text-[18px] md:text-[20px]">Họ tên</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-full px-4 py-3 md:py-4 bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold mb-2 text-[18px] md:text-[20px]">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="0123447393"
                  className="w-full rounded-full px-4 py-3 md:py-4 bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Cột giữa */}
            <div className="flex flex-col gap-6 w-full lg:w-2/7">
              <div>
                <label className="block font-bold mb-2 text-[18px] md:text-[20px]">
                  Địa chỉ email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vidu@email.com"
                  className="w-full rounded-full px-4 py-3 md:py-4 bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold mb-2 text-[18px] md:text-[20px]">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Thành phố Hà Nội"
                  className="w-full rounded-full px-4 py-3 md:py-4 bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Cột phải */}
            <div className="w-full lg:w-3/7">
              <label className="block font-bold mb-2 text-[18px] md:text-[20px]">
                Câu hỏi
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Vui lòng điền câu hỏi cho chúng tôi ở đây..."
                className="w-full rounded-2xl px-4 py-3 bg-white focus:outline-none resize-none h-[180px] md:h-[180px]"
              />
            </div>
          </div>

          {/* Nút gửi */}
          <div className="mt-8 ">
            <button
              type="submit"
              className="bg-black text-white rounded-full w-[220px] md:w-[280px] h-[55px] md:h-[66px] font-bold text-[16px] md:text-[18px] cursor-pointer"
            >
              Gửi tin nhắn
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
