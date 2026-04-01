import React from "react";

export default function ProductBreadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-[#8e8e8e] mb-16 relative z-10">
      <a href="/" className="hover:text-[#7F170E] transition-colors">
        Trang chủ
      </a>
      <span>/</span>
      <span className="text-[#1a1111] font-semibold">Gói Thuê</span>
    </nav>
  );
}
