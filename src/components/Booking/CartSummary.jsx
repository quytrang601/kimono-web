import React from "react";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";

export default function CartSummary({
  cart,
  onUpdateQty,
  onRemove,
  calculateTotal,
}) {
  return (
    <div className="bg-white border border-[#7F170E]/10 rounded-[2rem] p-8 shadow-[0_20px_60px_-15px_rgba(127,23,14,0.08)] relative overflow-hidden h-auto">

      {/* 1. Trang trí thanh lịch & tối giản: Mizuhiki-style Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#7F170E]/40 to-transparent"></div>

      {/* 2. Trang trí góc: Subtle Floral Motif (Dấu ấn truyền thống mờ) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7F170E]/[0.015] rounded-full pointer-events-none border border-[#7F170E]/10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#7F170E]/30 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-[#7F170E]/10 pb-4">
          <h3 className="text-xl font-serif text-[#1a1111] tracking-tight">
            Lựa chọn <span className="italic font-light text-[#7F170E]/90">của bạn</span>
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-0.5">Subtotal</span>
            <span className="text-[11px] text-gray-300 font-medium">({cart.length} Dịch vụ)</span>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center py-6 border-y border-dashed border-gray-100 bg-[#FCF9F7]/50 rounded-xl">
            <p className="text-sm text-gray-400 italic font-serif">
              Giỏ hàng đang trống...
            </p>
          </div>
        ) : (
          <div className="space-y-5 mb-6 max-h-[350px] overflow-y-auto pr-3 custom-scrollbar scroll-smooth">
            {cart.map((item) => (
              <div
                key={item.id}
                className="group flex gap-4 items-center animate-fade-in"
              >
                {/* Ảnh Thumbnail với hiệu ứng mờ nhẹ */}
                <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-inner">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] text-[#1a1111] font-serif font-medium leading-tight mb-0.5 truncate group-hover:text-[#7F170E] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#7F170E]/70 text-[11px] font-semibold tracking-wide">
                    {item.price}
                  </p>
                </div>

                {/* Bộ điều khiển số lượng thanh lịch */}
                <div className="flex items-center bg-[#FCF9F7] rounded-full px-2 py-1 border border-gray-100 hover:border-[#7F170E]/20 transition-colors">
                  <button
                    type="button"
                    onClick={() => onUpdateQty(item.id, -1)}
                    className="p-1 text-gray-400 hover:text-[#7F170E] transition-colors"
                  >
                    <HiOutlineMinus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center text-[12px] font-medium text-gray-700">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateQty(item.id, 1)}
                    className="p-1 text-gray-400 hover:text-[#7F170E] transition-colors"
                  >
                    <HiOutlinePlus className="w-3 h-3" />
                  </button>
                </div>

                {/* Nút xóa */}
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-full transition-all duration-300"
                >
                  <HiOutlineTrash className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Phần Tổng tạm tính: Nền mờ nghệ thuật */}
      <div className="relative mt-2 border-t border-[#7F170E]/10 pt-8 flex justify-between items-end bg-[#7F170E]/[0.02] -mx-8 -mb-8 px-8 pb-8 rounded-b-[2rem]">
        {/* Decorative Zen Line mờ */}
        <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#7F170E]/10 to-transparent"></div>

        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-0.5 font-bold">
            Subtotal
          </span>
          <span className="font-serif text-[#1a1111] text-sm italic font-light">
            Tổng tạm tính
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-300 font-medium block mb-1">({cart.length} Dịch vụ)</span>
          <span className="text-2xl font-serif font-medium text-[#7F170E] tracking-tighter">
            {calculateTotal()}
          </span>
        </div>
      </div>
    </div>
  );
}