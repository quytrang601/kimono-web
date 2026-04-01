import React from "react";
import Reveal from "../common/Reveal";

export default function ProductHeader() {
  return (
    <header className="mb-[175px] relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <Reveal className="flex items-start gap-8 md:gap-12">
          <div className="w-[1px] h-32 md:h-56 bg-gradient-to-b from-[#7F170E] to-transparent opacity-60"></div>
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-sans text-[#1a1111] leading-[0.85] tracking-tighter uppercase italic">
              Gói Thuê
            </h1>
            <span className="font-serif italic font-light text-[#7F170E] text-5xl md:text-7xl lg:text-8xl block mt-4 ml-4 md:ml-12">
              Kimono
            </span>
          </div>
        </Reveal>

        <Reveal
          delay={400}
          className="md:mb-6 border-r border-[#7F170E]/20 pr-8"
        >
          <p className="text-[11px] text-[#4b5563] tracking-[0.4em] uppercase leading-[2.2] max-w-[220px] text-right">
            Lựa chọn hoàn hảo <br /> cho trải nghiệm <br /> văn hóa Nhật Bản
          </p>
        </Reveal>
      </div>
    </header>
  );
}
