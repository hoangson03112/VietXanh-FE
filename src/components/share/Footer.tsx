"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full h-[531px] bg-cover bg-center bg-no-repeat text-gray-800 px-[120px]"
      style={{
        backgroundImage: "url('/footer.png')",
      }}
    >
      <div className="container mx-auto px-6 py-12 flex gap-30">

        <div className="w-2/8">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/logo.png" 
              alt="Việt Xanh"
              className="w-[190px] h-[152px]"

            />
          </div>
          <p className="text-[18px] leading-relaxed mb-4 mt-10">
            Việt Xanh cung cấp các sản phẩm túi, bao bì và đồ dùng phân hủy sinh học
            từ tinh bột ngô, thân thiện với môi trường.
          </p>

          <div className="flex gap-4 text-white">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-9 h-9  transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-9 h-9  transition" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail className="w-9 h-9  transition" />
            </Link>
          </div>
        </div>

        {/* Cột 2: Về chúng tôi */}
        <div>
          <h3 className="text-[20px] font-bold mt-15">Về chúng tôi</h3>
          <ul className="space-y-3 text-[18px] font-normal mt-10">
            <li><Link href="#" className="">Giới thiệu</Link></li>
            <li><Link href="#" className="">Tầm nhìn</Link></li>
            <li><Link href="#" className="">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Cột 3: Khám phá */}
        <div>
          <h3 className="text-[20px] font-bold mt-15">Khám phá</h3>
          <ul className="space-y-3 text-[18px] font-normal mt-10">
            <li><Link href="#" className="">Bài viết</Link></li>
            <li><Link href="#" className="">Tài liệu liên quan</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-700 pb-6">
        Copyright © 2025 Việt Xanh. All Rights Reserved
      </div>
    </footer>
  );
}
