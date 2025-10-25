"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className="w-full h-[775px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/banner.png')",
      }}
    >
      <div className=" mx-[120px] pt-8">
        <div className="container mx-auto flex items-center  px-6 justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Việt Xanh"
              className="w-[190px] h-[152px] object-contain "
            />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex space-x-6  text-[20px]">
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

          {/* Buttons */}
          <div className="flex items-center gap-8">
            <button className="border border-[#D4D2E3] bg-white font-bold text-[20px] text-black px-4 py-3 w-[156px] rounded-[30px] cursor-pointer">
              Đăng Nhập
            </button>
            <button className=" bg-black font-bold text-[20px] text-white px-4 py-3 w-[156px] rounded-[30px] cursor-pointer">
              Giỏ Hàng
            </button>
          </div>
        </div>
        {/* content */}
        <div className="mt-20 ">
          <p className="text-[55px] font-bold ">MỘT SẢN PHẨM XANH</p>
          <p className="text-[55px] font-bold ">NGÀN TƯƠNG LAI SẠCH</p>
          <p className="text-[20px] font-normal w-[608px] mt-10">
            Việt Xanh là một trong những thương hiệu tiên phong trong việc thiết
            kế và sản xuất các sản phẩm phân hủy sinh học từ tinh bột ngô thân
            thiện với môi trường.
          </p>
           {pathname === "/" && (
          <button className="bg-black w-[400px] text-white cursor-pointer rounded-[40px] mt-5 py-4 px-10 text-[18px] font-bold">
            XEM CÁC SẢN PHẨM
          </button>
           )}
        </div>
      </div>
    </header>
  );
}
