import React, { useEffect } from 'react';
import PricingGrid from '../components/PriceList/PricingGrid';
import AddOns from '../components/PriceList/AddOns';

const PriceList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#FCF9F7]">

            {/* --- CỘT TRÁI: ẢNH DỌC CỐ ĐỊNH --- */}
            <div className="w-full md:w-[25%] lg:w-[22%] h-[50vh] md:h-[calc(100vh-96px)] sticky top-24 overflow-hidden p-4">
                <div className="w-full h-full overflow-hidden rounded-2xl shadow-sm border border-gray-200/50">
                    <img
                        src="src/assets/pricelist.jpg"
                        alt="Kimono Portrait"
                        className="w-full h-full object-cover object-top animate-slow-zoom"
                    />
                </div>
            </div>

            {/* --- CỘT PHẢI: NỘI DUNG --- */}
            <div className="w-full md:w-[75%] lg:w-[78%] px-4 md:px-8 lg:px-12 py-12 md:py-20 flex flex-col">

                <header className="mb-16 max-w-4xl opacity-0 animate-fade-in-up">
                    <h4 className="text-[#7F170E] font-medium tracking-[0.6em] uppercase text-[10px] mb-4">
                        Exquisite Selection
                    </h4>
                    <h1 className="text-gray-900 text-5xl md:text-6xl font-serif font-bold leading-tight mb-8">
                        Bảng Giá <span className="italic font-light text-[#7F170E]">Dịch Vụ</span>
                    </h1>
                    <div className="w-12 h-[1px] bg-[#7F170E] mb-8"></div>
                    <p className="text-gray-500 text-sm md:text-base leading-[1.8] tracking-widest font-light italic max-w-2xl">
                        Khám phá các gói dịch vụ được thiết kế riêng để tôn vinh sự quý phái của bạn.
                    </p>
                </header>

                {/* Phần Bảng Giá - Hiệu ứng xuất hiện mượt */}
                <div className="mb-12 opacity-0 animate-fade-in-up delay-200">
                    <PricingGrid />
                </div>

                {/* Phần Dịch Vụ Bổ Sung - Hiệu ứng xuất hiện mượt */}
                <div className="pt-4 opacity-0 animate-fade-in-up delay-500">
                    <AddOns />
                </div>

                {/* Dòng chữ 18h đã được xoá theo yêu cầu */}
            </div>
        </div>
    );
};

export default PriceList;