import React from "react";
import Reveal from "../common/Reveal";

export default function ProductHeader() {
  return (
    /* h-[70vh]: Chiếm 70% chiều cao màn hình để tạo cảm giác bao la, không bị nhỏ quá */
    <header className="relative z-10 px-6 md:px-10 flex items-start min-h-[40vh] mb-8 pt-4 md:pt-8">

      {/* TRANG TRÍ NỀN: Làm to hẳn lên để lấp đầy khoảng trống */}
      <div className="absolute top-0 left-1/3 text-[15vw] font-serif text-[#7F170E]/[0.02] select-none pointer-events-none italic tracking-tighter">
        Authentic
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12 relative">

        {/* Cụm Tiêu Đề Trái */}
        <Reveal className="flex items-start gap-6 md:gap-12">
          {/* Đường kẻ dọc: Giảm chiều cao h-32 xuống nếu nó vẫn đẩy nội dung */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full border border-[#7F170E]/30 mb-2"></div>
            <div className="w-[1px] h-32 md:h-56 bg-gradient-to-b from-[#7F170E]/40 via-[#7F170E]/10 to-transparent"></div>
          </div>

          <div className="relative pt-10">
            {/* Chữ Collection chạy dọc cực nghệ thuật */}
            <span className="absolute -left-12 top-20 text-[10px] tracking-[1em] text-[#7F170E]/30 uppercase [writing-mode:vertical-lr] font-bold">
              Collection
            </span>

            {/* Tiêu đề: Cho to lại mức 9xl để nhìn cho sướng mắt */}
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif text-[#1a1111] leading-[0.8] tracking-tighter uppercase relative z-10">
              Gói <span className="italic font-extralight text-[#7F170E]/90">Thuê</span>
            </h1>

            <div className="flex items-center gap-8 mt-6 ml-10 md:ml-32">
              <div className="relative">
                <div className="w-24 h-[1px] bg-[#7F170E]/30"></div>
                <span className="absolute -bottom-6 left-0 text-[10px] tracking-[0.4em] text-gray-300 font-light">LIMITED</span>
              </div>
              <span className="font-serif italic font-light text-[#7F170E] text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight">
                Kimono
              </span>
            </div>
          </div>
        </Reveal>

        {/* Cụm Mô Tả Phải */}
        <Reveal
          delay={0.4}
          className="relative md:mb-16 pr-10 border-r border-[#7F170E]/10"
        >
          {/* Hanko Seal: To hơn một chút cho uy tín */}
          <div className="absolute -right-4 -top-12 w-14 h-14 border border-[#7F170E]/20 rounded-sm flex items-center justify-center -rotate-12 bg-white/50 backdrop-blur-sm">
            <span className="text-[9px] text-[#7F170E]/80 font-serif font-bold leading-tight text-center uppercase">京都<br />スタジオ</span>
          </div>

          <p className="text-[11px] md:text-[12px] text-[#4b5563] tracking-[0.5em] uppercase leading-[2.8] max-w-[280px] text-right font-medium">
            Lựa chọn <span className="text-[#1a1111] font-bold border-b border-[#7F170E]/30 pb-1">tinh hoa</span> <br />
            cho trải nghiệm <br />
            văn hóa <span className="italic text-[#7F170E]/80">Nhật Bản</span>
          </p>

          <div className="flex justify-end items-center gap-4 mt-10">
            <span className="text-[9px] tracking-[0.5em] text-gray-400 uppercase italic font-light">Fine Quality</span>
            <div className="w-12 h-[1px] bg-[#7F170E]/20"></div>
          </div>
        </Reveal>
      </div>

      {/* Trang trí góc dưới bên trái: Một con số mờ */}
      <div className="absolute bottom-10 left-16 text-xs font-serif italic text-gray-200 tracking-widest overflow-hidden">
        No. 001/Selection
      </div>
    </header>
  );
}