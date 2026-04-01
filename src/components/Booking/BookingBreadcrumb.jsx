import React from "react";
import { Link } from "react-router-dom";

export default function BookingBreadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-[#8e8e8e] mb-12 relative z-10">
      <Link to="/" className="hover:text-[#7F170E] transition-colors">
        Trang chủ
      </Link>
      <span>/</span>
      <span className="text-[#1a1111] font-semibold">Đặt Lịch</span>
    </nav>
  );
}
