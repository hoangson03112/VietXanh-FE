"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat text-black"
      style={{
        backgroundImage: "url('/footer.png')",
      }}
    >
      {/* Nội dung chính */}
      <div className="px-6 md:px-[120px] pt-16 pb-10 flex flex-col md:flex-row justify-between gap-12 md:gap-32 max-w-[1440px] mx-auto">
        {/* Cột 1: Logo + mô tả */}
        <div className="md:w-[40%]">
          <div className="flex items-center gap-2 mb-6">
            <img
              src="/logo.png"
              alt="Việt Xanh"
              className="w-[190px] md:w-[220px] h-auto"
            />
          </div>
          <p className="text-[17px] md:text-[18px] leading-relaxed mb-6">
            Việt Xanh cung cấp các sản phẩm túi, bao bì và đồ dùng phân hủy sinh
            học từ tinh bột ngô, thân thiện với môi trường.
          </p>
          <div className="flex gap-5 mt-6">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-9 h-9 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-9 h-9 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail className="w-9 h-9 hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Cột 2: Về chúng tôi */}
        <div className="md:w-[25%]">
          <h3 className="text-[20px] font-bold mb-6">Về chúng tôi</h3>
          <ul className="space-y-3 text-[18px]">
            <li>
              <Link href="#">Giới thiệu</Link>
            </li>
            <li>
              <Link href="#">Tầm nhìn</Link>
            </li>
            <li>
              <Link href="#">Liên hệ</Link>
            </li>
          </ul>
        </div>

        {/* Cột 3: Khám phá */}
        <div className="md:w-[25%]">
          <h3 className="text-[20px] font-bold mb-6">Khám phá</h3>
          <ul className="space-y-3 text-[18px]">
            <li>
              <Link href="#">Bài viết</Link>
            </li>
            <li>
              <Link href="#">Tài liệu liên quan</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="text-center text-[15px] text-gray-700 pb-6 border-t border-gray-300 mx-6 md:mx-[120px] pt-4">
        © 2025 Việt Xanh. All Rights Reserved.
      </div>
    </footer>
  );
}
