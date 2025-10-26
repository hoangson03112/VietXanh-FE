import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: false, // tự động cuộn lên đầu khi chuyển trang
  },
};

export default nextConfig;
