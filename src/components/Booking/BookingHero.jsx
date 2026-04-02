import React from 'react';
import { motion } from 'framer-motion';

// Component con Reveal (nếu bạn chưa có sẵn thì dùng motion.div đơn giản)
const Reveal = ({ children, delay = 0.1 }) => (
    <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.21, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const BookingHero = () => {
    return (
        <section className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FCF9F7] pt-0">
            {/* Đảm bảo pt-0 để sát lên trên */}

            <div className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center">
                <span className="text-[20vw] font-serif italic text-[#7F170E]/[0.02] whitespace-nowrap tracking-tighter">
                    Reservation
                </span>
            </div>

            <Reveal delay={0.1}>
                {/* Nếu cụm chữ vẫn thấp, hãy dùng mt-[-5vh] để kéo nó lên trên một chút */}
                <div className="text-center relative z-10 mt-[-20vh]">

                    {/* Cụm Sub-header: Kyo Experience */}
                    <div className="flex items-center justify-center gap-4 relative z-10 -mt-12 md:-mt-24 mb-6">
                        {/* Đường kẻ mảnh hơn, dùng opacity thấp để tạo sự tinh tế */}
                        <span className="w-6 md:w-10 h-[1px] bg-[#7F170E]/20"></span>

                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#7F170E]/70 font-bold italic translate-x-[0.3em]">
                            Kyo Experience
                        </span>

                        <span className="w-6 md:w-10 h-[1px] bg-[#7F170E]/20"></span>
                    </div>

                    {/* Tiêu đề chính: Đặt Lịch Thuê Kimono */}
                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-[#1a1111] leading-[0.85] tracking-tighter uppercase">
                        Đặt Lịch <br />
                        <span className="relative inline-block mt-2">
                            {/* Chữ "Thuê" mỏng và nghiêng để tạo sự tương phản mạnh */}
                            <span className="italic font-extralight text-[#7F170E]/90 lowercase">thuê</span>
                            <span className="ml-4 italic font-light lowercase">Kimono</span>

                            {/* Một nét gạch chân nghệ thuật cực mảnh dưới chữ Kimono */}
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-[#7F170E]/20 to-transparent"></span>
                        </span>
                    </h1>
                    {/* Cụm Scroll (nhích lên thêm một chút nữa) */}
                    <div className="mt-10 flex flex-col items-center">
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#7F170E]/40 to-transparent mb-4"></div>
                        <p className="text-[9px] uppercase tracking-[0.5em] text-gray-400 font-light">
                            Scroll to explore
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
export default BookingHero;