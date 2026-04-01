import React from 'react';
import { motion } from 'framer-motion';

const AlbumHero = () => {
    return (
        /* Sử dụng min-h-[calc(100vh-80px)] để trừ đi chiều cao trung bình của Navbar.
           Bỏ pt-10 nếu cần thiết để sát lên trên.
        */
        <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-[#FCF9F7] px-6 overflow-hidden">

            {/* Background Decor - Thu nhỏ cỡ chữ một chút để không chiếm quá nhiều diện tích dọc */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
                <span className="text-[20vw] font-serif italic whitespace-nowrap tracking-tighter">
                    Kyo Lookbook
                </span>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#7F170E] font-medium tracking-[0.6em] uppercase text-[10px] mb-4"
                >
                    Visual Journey
                </motion.h4>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    // Điều chỉnh text size linh hoạt hơn để không bị cắt trên màn hình nhỏ
                    className="text-gray-900 text-6xl md:text-[9rem] lg:text-[11rem] font-serif font-bold leading-[0.9]"
                >
                    Kyo <span className="italic font-light text-[#7F170E]">Gallery</span>
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="w-20 h-[1px] bg-[#7F170E]/30 my-8"
                ></motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-xl mx-auto text-gray-500 text-[11px] md:text-sm leading-relaxed tracking-[0.2em] font-light italic"
                >
                    Giao thoa giữa lụa là và hơi thở cố đô.
                </motion.p>
            </div>
        </section>
    );
};

export default AlbumHero;