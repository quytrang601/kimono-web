import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hairstyle = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hairstyles = [
        {
            id: 1,
            img: "/ảnh_tóc_dọc_4.jpg",
            size: "md:col-span-2 md:row-span-2"
        },
        {
            id: 2,
            img: "/ảnh_tóc_ngang_3.jpg",
            size: "md:col-span-1 md:row-span-1"
        },
        {
            id: 3,
            img: "/ảnh_tóc_dọc_1.jpg",
            size: "md:col-span-1 md:row-span-2"
        },
        {
            id: 4,
            img: "/ảnh_tóc_ngang_5.jpg",
            size: "md:col-span-1 md:row-span-1"
        },
        {
            id: 5,
            img: "/ảnh_tóc_ngang_6.jpg",
            size: "md:col-span-1 md:row-span-1"
        }
    ];

    return (
        <main className="bg-[#FCF9F7] min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">

            {/* Header - Xuất hiện đầu tiên */}
            <header className="max-w-4xl mx-auto text-center mb-20 opacity-0 animate-fade-in-up">
                <h4 className="text-[#7F170E] font-medium tracking-[0.6em] uppercase text-[10px] mb-4">
                    Artistry in Detail
                </h4>
                <h1 className="text-gray-900 text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                    Mẫu Làm <span className="italic font-light text-[#7F170E]">Tóc</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#7F170E]/30 mx-auto mb-8"></div>
                <p className="text-gray-500 text-sm md:text-base leading-[2] tracking-widest font-light italic max-w-2xl mx-auto">
                    Một bộ Kimono hoàn hảo không thể thiếu mái tóc được chăm chút tỉ mỉ.
                    Chúng tôi tạo nên những tuyệt tác giúp bạn tự tin tỏa sáng.
                </p>
            </header>

            {/* Gallery - Xuất hiện sau Header một chút (delay-200) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6 opacity-0 animate-fade-in-up delay-200">
                {hairstyles.map((style) => (
                    <div
                        key={style.id}
                        className={`relative group overflow-hidden rounded-2xl shadow-sm bg-white ${style.size}`}
                    >
                        <img
                            src={style.img}
                            alt={`Hairstyle sample ${style.id}`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* CTA & Footer - Xuất hiện cuối cùng (delay-500) */}
            <section className="mt-24 text-center border-t border-gray-200/60 pt-16 opacity-0 animate-fade-in-up delay-500">
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] mb-8">
                    * Các mẫu tóc trên đều đã bao gồm trong gói Premium
                </p>
                <Link to="/dat-lich" className="px-10 py-4 bg-[#7F170E] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#2D1B1B] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl active:scale-95">
                    Đặt lịch tư vấn ngay
                </Link>
            </section>
        </main>
    );
};

export default Hairstyle;