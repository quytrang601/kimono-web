import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineExclamationTriangle, HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function ServiceSelection({ packages, onAddToCart }) {
  const renderCategory = (title, items) => (
    <div key={title} className="mb-14">
      {/* Tiêu đề danh mục nghệ thuật hơn */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-serif text-[#1a1111] tracking-tight">
          {title.split(' ')[0]} <span className="italic text-[#7F170E]/80 font-light">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#7F170E]/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items?.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-[#7F170E]/5 rounded-[2rem] p-4 flex gap-5 hover:shadow-[0_15px_40px_-10px_rgba(127,23,14,0.1)] hover:border-[#7F170E]/20 transition-all duration-500"
          >
            {/* Ảnh sản phẩm kiểu Portrait */}
            <div className="w-24 h-32 overflow-hidden rounded-[1.5rem] flex-shrink-0 shadow-sm border border-gray-100">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h3 className="font-serif font-medium text-[#1a1111] text-[15px] leading-snug group-hover:text-[#7F170E] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-4 h-[1px] bg-[#7F170E]/30"></span>
                  <p className="text-[#7F170E] font-bold text-sm tracking-tight">
                    {item.price}
                  </p>
                </div>
              </div>

              {/* Nút thêm vào giỏ hàng tinh tế */}
              <button
                onClick={() => onAddToCart(item)}
                className="relative overflow-hidden bg-[#FCF9F7] hover:bg-[#7F170E] text-[#7F170E] hover:text-white text-[11px] font-bold uppercase tracking-[0.1em] py-2.5 px-4 rounded-xl transition-all duration-500 flex items-center justify-center gap-2 w-full mt-4 border border-[#7F170E]/10"
              >
                <span className="text-lg leading-none translate-y-[-1px]">+</span>
                <span>Thêm dịch vụ</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in pb-10">
      {/* Header chính của phần chọn dịch vụ */}
      <div className="flex items-center gap-3 mb-12 group">
        <div className="p-3 bg-[#7F170E]/5 rounded-2xl group-hover:bg-[#7F170E] group-hover:text-white transition-all duration-500 text-[#7F170E]">
          <HiOutlineShoppingBag className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-serif text-[#1a1111]">Chọn dịch vụ</h2>
          <div className="h-[1px] w-12 bg-[#7F170E]/30 mt-1"></div>
        </div>
      </div>

      {renderCategory("Kimono Nữ", packages.women)}
      {renderCategory("Kimono Nam", packages.men)}
      {renderCategory("Kimono Trẻ Em", packages.kids)}

      {/* POLICIES - Thiết kế lại cho đồng bộ Card style */}
      <div className="mt-20 space-y-6 pt-10 border-t border-[#7F170E]/10">

        {/* Warning Box */}
        <div className="relative overflow-hidden bg-[#FEF9E7]/40 border border-[#F2C94C]/20 rounded-[2rem] p-6 flex items-start gap-5 shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#F2C94C]/5 rounded-bl-[5rem] -mr-10 -mt-10"></div>
          <div className="p-2.5 bg-white rounded-xl shadow-sm text-[#D97706]">
            <HiOutlineExclamationTriangle className="w-5 h-5" />
          </div>
          <div className="relative z-10">
            <h4 className="text-[13px] font-bold text-[#92400e] uppercase tracking-wider mb-1">
              Chính sách hủy lịch
            </h4>
            <p className="text-[13px] text-[#92400e]/80 leading-relaxed font-serif italic">
              Nếu quý khách muốn hủy lịch hẹn, vui lòng sử dụng tính năng tra
              cứu để thực hiện. Chúng tôi luôn sẵn sàng hỗ trợ quý khách tốt nhất.
            </p>
          </div>
        </div>

        {/* Manage Booking Link */}
        <div className="bg-[#FCF9F7] border border-[#7F170E]/5 rounded-[2rem] p-6 flex items-center justify-between group hover:border-[#7F170E]/20 transition-all duration-500">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-xl shadow-sm text-[#7F170E]/60">
              <HiOutlineMagnifyingGlass className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-serif">
              Đã có lịch hẹn?{" "}
              <Link
                to="#"
                className="text-[#7F170E] font-bold hover:underline ml-1 underline-offset-4"
              >
                Quản lý tại đây
              </Link>
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-[#7F170E]/10 flex items-center justify-center text-[#7F170E] group-hover:translate-x-1 transition-transform duration-300">
            →
          </div>
        </div>
      </div>
    </div>
  );
}