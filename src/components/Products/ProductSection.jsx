import React from "react";
import Reveal from "../common/Reveal";
import ProductCard from "./ProductCard";

export default function ProductSection({ title, items, id }) {
  return (
    /* 1. mb-20 md:mb-28: Khoảng cách cố định giữa các Section.
       2. pt-12: Thêm padding top để cân bằng với margin bottom.
       3. scroll-mt-20: Đảm bảo khi click tab vẫn chuẩn vị trí.
    */
    <section id={id} className="mb-20 md:mb-28 pt-10 md:pt-16 scroll-mt-20 px-4 md:px-10 border-t border-[#7F170E]/5 first:border-t-0">

      {/* Tiêu đề phần: Dùng spacing cực kỳ chặt chẽ */}
      <Reveal className="flex flex-col items-center mb-16 md:mb-20">
        <div className="flex items-center gap-3 mb-3 opacity-60">
          <div className="w-1 h-1 rounded-full bg-[#7F170E]" />
          <span className="text-[9px] text-[#7F170E] tracking-[0.4em] uppercase font-bold italic">
            Collection
          </span>
          <div className="w-1 h-1 rounded-full bg-[#7F170E]" />
        </div>

        <h2 className="text-2xl md:text-4xl font-serif text-[#1a1111] flex items-center gap-6">
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#7F170E]/20" />
          <span className="tracking-tight">{title}</span>
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#7F170E]/20" />
        </h2>
      </Reveal>

      {/* Lưới sản phẩm */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {items.map((pkg, idx) => (
          <div key={pkg.id} className="px-2 md:px-4">
            <ProductCard {...pkg} index={idx} />
          </div>
        ))}
      </div>

      {/* XÓA BỎ HOÀN TOÀN div đường kẻ mt-20 cũ ở đây 
          vì nó chính là thủ phạm gây ra khoảng cách không đều 
      */}
    </section>
  );
}