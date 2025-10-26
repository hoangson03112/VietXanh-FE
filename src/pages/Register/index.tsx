"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterView() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dữ liệu đăng ký:", form);
    alert("Đăng ký thành công!");
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-[#f6ffe8] to-[#c7e28b] px-4">
      {/* Nền footer */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/footer.png"
          alt="Nông trại Việt Xanh"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Form đăng ký */}
      <div
        className="bg-white rounded-xl p-8 z-10 w-[504px] max-w-full text-center shadow-[0_4px_15px_rgba(0,0,0,0.7)]"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo.png"
            alt="Logo Việt Xanh"
            className="w-[190px] h-[152px] object-contain"
          />
        </div>

        <form onSubmit={handleSubmit} className="text-left space-y-4 px-6 sm:px-10 py-5">
          {/* Tài khoản */}
          <div>
            <label className="block text-[12px] font-bold text-[#2F3036] mb-1">
              Tài khoản
            </label>
            <input
              type="text"
              name="username"
              placeholder="Nhập tên tài khoản"
              value={form.username}
              onChange={handleChange}
              className="w-full border mt-3 h-[48px] border-[#C5C6CC] rounded-[12px] px-3 py-2 focus:outline-none focus:border-[#006FFD]"
            />
          </div>

          {/* Mật khẩu */}
          <div>
            <label className="block text-[12px] font-bold text-[#2F3036] mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Tạo một mật khẩu"
                value={form.password}
                onChange={handleChange}
                className="w-full border mt-3 h-[48px] border-[#C5C6CC] rounded-[12px] px-3 py-2 focus:outline-none focus:border-[#006FFD]"
              />
              <button
                type="button"
                className="absolute right-3 top-6 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={22} strokeWidth={1.8} />
                ) : (
                  <Eye size={22} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[12px] font-bold text-[#2F3036] mb-1">
              Địa chỉ email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Nhập email"
              value={form.email}
              onChange={handleChange}
              className="w-full border mt-3 h-[48px] border-[#C5C6CC] rounded-[12px] px-3 py-2 focus:outline-none focus:border-[#006FFD]"
            />
          </div>

          {/* Nút đăng ký */}
          <button
            type="submit"
            className="w-full bg-[#006FFD] h-[48px] text-white text-[12px] font-semibold rounded-[12px] cursor-pointer hover:bg-blue-700 transition-colors"
          >
            Đăng ký
          </button>

          {/* Link chuyển trang */}
          <p className="text-center text-[12px] mt-3">
            Đã có tài khoản?{" "}
            <Link href="/login" className="text-blue-600 font-medium hover:underline">
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
