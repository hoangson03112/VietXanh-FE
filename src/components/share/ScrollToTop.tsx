"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // đợi DOM render xong rồi mới scroll
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // cuộn mượt
      });
    }, 50); // delay nhẹ để DOM ổn định

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
