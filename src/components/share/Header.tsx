"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header>
      {/* Banner */}
      <div
        className="w-full h-[775px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        {/* Nội dung trong banner */}
        <div className="relative z-10 mx-[120px] max-lg:mx-8 max-md:mx-5 pt-8">
          {/* Hàng logo và menu */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Việt Xanh"
                className="w-[190px] h-[152px] object-contain max-lg:w-[150px] max-lg:h-[120px] max-md:w-[120px] max-md:h-[100px]"
              />
            </Link>

            {/* Menu desktop (hiện khi ≥ 1024px) */}
            <nav className="hidden lg:flex space-x-6 text-[20px]">
              <Link href="/" className="cursor-pointer font-normal">
                Trang Chủ
              </Link>
              <Link href="/product" className="cursor-pointer font-normal">
                Sản Phẩm
              </Link>
              <Link href="/aboutus" className="cursor-pointer font-normal">
                Về Chúng Tôi
              </Link>
              <Link href="/news" className="cursor-pointer font-normal">
                Bài Viết
              </Link>
              <Link href="/contact" className="cursor-pointer font-normal">
                Liên Hệ
              </Link>
            </nav>

            {/* Buttons (desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/login"
                className="border flex items-center justify-center border-[#D4D2E3] bg-white font-bold text-[20px] text-black px-4 py-3 w-[156px] rounded-[30px] cursor-pointer"
              >
                Đăng Nhập
              </Link>
              <button className="bg-black font-bold text-[20px] text-white px-4 py-3 w-[156px] rounded-[30px] cursor-pointer">
                Giỏ Hàng
              </button>
            </div>

            {/* Nút mở menu mobile & tablet */}
            <button
              className="lg:hidden p-2 rounded-lg bg-white/80"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-7 h-7 text-black" />
            </button>
          </div>

          {/* Nội dung chữ trong banner */}
          <div className="mt-20 text-left text-black">
            <p className="text-[55px] font-bold max-lg:text-[40px] max-md:text-[32px]">
              MỘT SẢN PHẨM XANH
            </p>
            <p className="text-[55px] font-bold max-lg:text-[40px] max-md:text-[32px]">
              NGÀN TƯƠNG LAI SẠCH
            </p>

            {pathname === "/" && (
              <div>
                <p className="text-[20px] font-normal max-w-[608px] mt-10 max-md:text-[16px]">
                  Việt Xanh là một trong những thương hiệu tiên phong trong việc
                  thiết kế và sản xuất các sản phẩm phân hủy sinh học từ tinh
                  bột ngô thân thiện với môi trường.
                </p>
                <button className="bg-black w-[400px] max-lg:w-[300px] max-md:w-full text-white cursor-pointer rounded-[40px] mt-5 py-4 px-10 text-[18px] font-bold">
                  XEM CÁC SẢN PHẨM
                </button>
              </div>
            )}

            {pathname?.includes("/product") && (
              <p className="text-[20px] font-normal max-w-[608px] mt-10 max-md:text-[16px]">
                Việt Xanh là thương hiệu tiên phong trong thiết kế và sản xuất
                các sản phẩm thân thiện với môi trường.
              </p>
            )}

            {pathname === "/aboutus" && (
              <p className="text-[20px] font-normal max-w-[608px] mt-10 max-md:text-[16px]">
                Việt Xanh tạo ra sản phẩm phân hủy sinh học từ tinh bột ngô thân
                thiện với môi trường và cộng đồng.
              </p>
            )}

            {pathname?.includes("/news") && (
              <p className="text-[20px] font-normal max-w-[608px] mt-10 max-md:text-[16px]">
                Khám phá các chia sẻ, kinh nghiệm và lời khuyên hữu ích về lối
                sống xanh đến từ Việt Xanh.
              </p>
            )}

            {pathname === "/contact" && (
              <p className="text-[20px] font-normal max-w-[608px] mt-10 max-md:text-[16px]">
                Nếu bạn cần tư vấn, hỗ trợ hoặc hợp tác, đừng ngần ngại liên hệ
                với Việt Xanh – chúng tôi luôn sẵn sàng lắng nghe.
              </p>
            )}
          </div>
        </div>

        {/* Overlay mờ khi mở menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Menu mobile & tablet */}
        <div
          className={`fixed top-0 right-0 h-full w-[260px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 p-6 text-[18px]">
            <Link href="/" className="hover:underline">
              Trang Chủ
            </Link>
            <Link href="/product" className="hover:underline">
              Sản Phẩm
            </Link>
            <Link href="/aboutus" className="hover:underline">
              Về Chúng Tôi
            </Link>
            <Link href="/news" className="hover:underline">
              Bài Viết
            </Link>
            <Link href="/contact" className="hover:underline">
              Liên Hệ
            </Link>
            <Link
              href="/login"
              className="border border-[#D4D2E3] text-center bg-white font-bold text-[18px] text-black px-4 py-3 rounded-[30px] cursor-pointer"
            >
              Đăng Nhập
            </Link>
            <button className="bg-black text-white font-bold text-[18px] px-4 py-3 rounded-[30px] cursor-pointer">
              Giỏ Hàng
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
