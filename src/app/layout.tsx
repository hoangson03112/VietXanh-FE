import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/share/Header";
import Footer from "../components/share/Footer";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bevietnam",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={beVietnam.variable}>
        <div className="text-black bg-[#FFF4E4]">
          <Header />
          <div className="py-[150px] px-[120px]">
          {children}

          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
