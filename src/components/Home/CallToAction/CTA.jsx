import React from 'react';
import './CTA.css';

const FinalCTA = () => {
    return (
        <section id="final-cta" className="relative py-32 overflow-hidden bg-[#2D1B1B]">
            {/* 🌸 Background Image với Overlay mờ ảo 🌸 */}
            <div className="absolute inset-0 z-0">
                <img
                    src="src/assets/CTA.avif"
                    alt="Kyoto Night"
                    className="w-full h-full object-cover opacity-40 scale-110 transition-transform duration-[20s] ease-linear hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F7] via-transparent to-[#2D1B1B]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Họa tiết hoa đào nhỏ rơi */}
                <div className="flex justify-center mb-8">
                    <span className="text-3xl animate-bounce">🌸</span>
                </div>

                <h4 className="text-[#7F170E] font-medium tracking-[0.5em] uppercase text-xs mb-6">
                    Your Journey Starts Here
                </h4>

                <h2 className="text-white text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
                    Sẵn sàng để trở thành <br />
                    <span className="italic text-[#F8D7D9]">nàng thơ</span> giữa lòng Kyoto?
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                    Đừng chỉ ghé thăm Kyoto, hãy trở thành một phần của nó.
                    Những bộ Kimono đẹp nhất và đội ngũ chuyên gia của chúng tôi đã sẵn sàng chờ đón bạn.
                </p>

                {/* Cụm nút bấm tập trung (Focus Action) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto bg-[#7F170E] text-white px-12 py-5 rounded-full font-bold tracking-[0.2em] hover:bg-white hover:text-[#7F170E] transition-all duration-500 shadow-2xl uppercase text-xs">
                        Đặt lịch ngay bây giờ
                    </button>

                    <button className="group flex items-center text-white font-bold text-xs uppercase tracking-[0.2em]">
                        <span className="border-b border-white/30 pb-1 group-hover:border-white transition-all">Hỗ trợ qua Zalo</span>
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* Thông tin nhanh (Footer-like info) */}
                <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-[#F8D7D9] font-serif italic mb-1 text-sm">Địa chỉ</p>
                        <p className="text-white/50 text-[10px] uppercase tracking-widest">Gion, Kyoto, Japan</p>
                    </div>
                    <div>
                        <p className="text-[#F8D7D9] font-serif italic mb-1 text-sm">Giờ mở cửa</p>
                        <p className="text-white/50 text-[10px] uppercase tracking-widest">09:00 - 18:00</p>
                    </div>
                    <div>
                        <p className="text-[#F8D7D9] font-serif italic mb-1 text-sm">Điện thoại</p>
                        <p className="text-white/50 text-[10px] uppercase tracking-widest">+81 75-XXX-XXXX</p>
                    </div>
                    <div>
                        <p className="text-[#F8D7D9] font-serif italic mb-1 text-sm">Kết nối</p>
                        <p className="text-white/50 text-[10px] uppercase tracking-widest">FB / IG / TT</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;