"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginView() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dữ liệu đăng nhập:", form);
    alert("Đăng nhập thành công!");
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-[#f6ffe8] to-[#c7e28b] px-4 sm:px-8">
      {/* Nền phía dưới */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/footer.png"
          alt="Nông trại Việt Xanh"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Form đăng nhập */}
      <div
        className="bg-white rounded-xl p-6 sm:p-8 z-10 text-center w-full max-w-[504px] shadow-lg"
        style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo.png"
            alt="Logo Việt Xanh"
            className="w-[150px] sm:w-[180px] md:w-[190px] h-auto"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="text-left space-y-5 sm:space-y-6 px-2 sm:px-8">
          {/* Tài khoản */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-bold text-[#2F3036] mb-1">
              Tài khoản
            </label>
            <input
              type="text"
              name="username"
              placeholder="Nhập tên tài khoản"
              value={form.username}
              onChange={handleChange}
              className="w-full border mt-2 h-[44px] sm:h-[48px] border-[#C5C6CC] rounded-[12px] px-3 py-2 focus:outline-none focus:border-[#006FFD]"
            />
          </div>

          {/* Mật khẩu */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-bold text-[#2F3036] mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Nhập mật khẩu"
                value={form.password}
                onChange={handleChange}
                className="w-full border mt-2 h-[44px] sm:h-[48px] border-[#C5C6CC] rounded-[12px] px-3 py-2 focus:outline-none focus:border-[#006FFD]"
              />
              <button
                type="button"
                className="absolute right-3 top-[50%] translate-y-[-50%] text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} strokeWidth={1.8} />
                ) : (
                  <Eye size={20} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          {/* Quên mật khẩu */}
          <div className="flex justify-end text-[12px] sm:text-[13px] font-semibold">
            <Link href="#" className="text-[#006FFD] hover:underline">
              Quên mật khẩu?
            </Link>
          </div>

          {/* Nút đăng nhập */}
          <button
            type="submit"
            className="w-full bg-[#006FFD] h-[44px] sm:h-[48px] text-white text-[13px] sm:text-[14px] font-semibold rounded-[12px] cursor-pointer hover:bg-blue-700 transition-colors"
          >
            Đăng Nhập
          </button>

          {/* Liên kết đăng ký */}
          <p className="text-center text-[12px] sm:text-[13px] mt-3">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-blue-600 font-medium hover:underline">
              Đăng ký
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
