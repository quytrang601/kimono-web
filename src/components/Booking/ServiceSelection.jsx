import React from "react";
import { Link } from "react-router-dom";

export default function ServiceSelection({ packages, onAddToCart }) {
  const renderCategory = (title, items) => (
    <div key={title} className="mb-10">
      <h2 className="text-xl font-serif text-[#7F170E] mb-4 pb-2 border-b border-[#7F170E]/10">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items?.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#7F170E]/10 rounded-2xl p-3 flex gap-4 hover:shadow-[#7F170E]/5 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-20 h-24 overflow-hidden rounded-xl flex-shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h3 className="font-sans font-medium text-[#1a1111] text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#7F170E] font-medium text-xs mt-1.5">
                  {item.price}
                </p>
              </div>
              <button
                onClick={() => onAddToCart(item)}
                className="bg-[#F9F7F5] hover:bg-[#7F170E] hover:text-white text-[#7F170E] text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-1 w-full mt-2"
              >
                <span>+</span> Thêm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-8 text-[#7F170E]">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h2 className="text-lg font-medium">Chọn dịch vụ</h2>
      </div>

      {renderCategory("Kimono Nữ", packages.women)}
      {renderCategory("Kimono Nam", packages.men)}
      {renderCategory("Kimono Trẻ Em", packages.kids)}

      {/* POLICIES */}
      <div className="mt-16 space-y-4 pt-8 border-t border-[#7F170E]/10">
        <div className="bg-[#FEF9E7]/60 border border-[#F2C94C]/30 rounded-2xl p-5 flex items-start gap-4">
          <svg
            className="w-5 h-5 text-[#D97706] mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <h4 className="text-sm font-bold text-[#D97706] mb-1">
              Chính sách hủy lịch
            </h4>
            <p className="text-sm text-[#92400e] leading-relaxed">
              Nếu quý khách muốn hủy lịch hẹn, vui lòng sử dụng tính năng tra
              cứu để thực hiện. Chúng tôi luôn sẵn sàng hỗ trợ quý khách tốt
              nhất.
            </p>
          </div>
        </div>
        <div className="bg-[#F8D7D9]/20 border border-[#7F170E]/10 rounded-2xl p-5 flex items-center gap-4">
          <svg
            className="w-5 h-5 text-[#7F170E] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm text-[#4b5563]">
            Đã có lịch hẹn?{" "}
            <Link
              to="#"
              className="text-[#7F170E] font-semibold hover:underline"
            >
              Tra cứu và quản lý tại đây
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
