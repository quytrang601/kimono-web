import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Reveal = ({ children, delay = 0.1 }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const BookingHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FCF9F7] pt-[4vh] border-b border-[#7F170E]/5">
      {/* Texture & Layer trang trí giữ nguyên 100% */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

      <div className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center">
        {/* Reservation lớn - Đổi style flex để nó luôn ở giữa */}
        <motion.div style={{ y: y1 }} className="relative">
          <span className="text-[22vw] font-serif italic text-[#7F170E]/[0.015] whitespace-nowrap tracking-tighter uppercase">
            Reservation
          </span>
        </motion.div>
        {/* Kanji */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[20%] right-[10%] text-[15vh] font-serif text-[#7F170E]/[0.03] leading-none"
        >
          縁
        </motion.div>
      </div>

      {/* --- CỤM NỘI DUNG CHÍNH --- */}
      <div className="relative z-10 text-center px-4 flex-shrink-0">
        {/* 1. Kyo Experience: Đã tăng mb-2 lên mb-8 md:mb-10 để không bị lẹm vào chữ Đặt Lịch */}
        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-6 mb-8 md:mb-10">
            <div className="flex flex-col items-end">
              <span className="text-[8px] tracking-[0.4em] uppercase mb-1">
                Traditional
              </span>
              <div className="w-8 h-[1px] bg-[#7F170E]"></div>
            </div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.7em] text-[#7F170E] font-bold italic">
              Kyo Experience
            </span>
            <div className="flex flex-col items-start">
              <span className="text-[8px] tracking-[0.4em] uppercase mb-1">
                Modernity
              </span>
              <div className="w-8 h-[1px] bg-[#7F170E]"></div>
            </div>
          </div>
        </Reveal>

        {/* 2. Tiêu đề chính: Đổi leading-[0.8] thành leading-none và thêm mb-4 vào span Đặt Lịch */}
        <Reveal delay={0.4}>
          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-serif text-[#1a1111] leading-none tracking-tighter uppercase">
            <span className="block mb-4 md:mb-6">Đặt Lịch</span>
            <div className="flex items-center justify-center gap-6 md:gap-10">
              <span className="italic font-extralight text-[#7F170E]/90 lowercase pr-2">
                thuê
              </span>
              <span className="relative">
                <span className="italic font-light lowercase">Kimono</span>
                <div className="absolute -right-8 -top-4 w-6 h-6 border border-[#7F170E]/30 rounded-sm flex items-center justify-center rotate-12 bg-[#FCF9F7]">
                  <span className="text-[6px] text-[#7F170E]/60 font-bold">
                    京
                  </span>
                </div>
              </span>
            </div>
          </h1>
        </Reveal>

        {/* 3. Text mô tả nén mt-3: Tăng lên mt-8 để cách xa chữ Kimono */}
        <Reveal delay={0.6}>
          <div className="mt-8 max-w-[400px] mx-auto">
            <p className="text-[10px] md:text-[11px] text-gray-500 tracking-[0.3em] leading-relaxed uppercase">
              Khám phá vẻ đẹp di sản qua từng <br />
              <span className="text-[#7F170E]/60 font-medium">
                nếp gấp thời gian
              </span>
            </p>
          </div>
        </Reveal>

        {/* 4. Discover More: Giữ nguyên */}
        <Reveal delay={0.8}>
          <div className="mt-6 flex flex-col items-center group cursor-pointer relative">
            <div className="absolute w-10 h-10 border border-[#7F170E]/5 rounded-full -mt-2 animate-[ping_3s_ease-in-out_infinite]"></div>
            <div className="relative w-[1px] h-8 bg-gradient-to-b from-[#7F170E]/40 via-[#7F170E]/10 to-transparent overflow-hidden">
              <motion.div
                animate={{ y: [0, 32] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#7F170E] to-transparent"
              />
            </div>
            <p className="mt-3 text-[9px] uppercase tracking-[0.5em] text-gray-400 font-light group-hover:text-[#7F170E] transition-colors duration-500">
              Discover more
            </p>
          </div>
        </Reveal>
      </div>

      {/* --- SPACER ĐỂ ĐẨY NỘI DUNG LÊN CAO --- */}
      <div className="flex-grow min-h-[10vh] lg:min-h-[15vh]"></div>
    </section>
  );
};

export default BookingHero;
