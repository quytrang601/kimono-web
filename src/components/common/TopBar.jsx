import React from 'react';

export default function TopBar() {
    const content = (
        <div className="flex items-center space-x-12 px-6">
            <span className="flex items-center uppercase tracking-widest text-[10px]">
                <span className="mr-2">🌸</span>
                Giảm 15% khi đặt lịch trước qua Website
            </span>
            <span className="h-3 w-[1px] bg-white/30"></span> {/* Vạch ngăn cách mảnh */}
            <span className="flex items-center uppercase tracking-widest text-[10px]">
                <span className="mr-2">📞</span>
                Hotline: 0909.123.456
            </span>
            <span className="h-3 w-[1px] bg-white/30"></span>
            <span className="flex items-center uppercase tracking-widest text-[10px]">
                <span className="mr-2">📍</span>
                Gion District, Kyoto, Japan
            </span>
            <span className="h-3 w-[1px] bg-white/30"></span>
        </div>
    );

    return (
        <div className="relative bg-[#7F170E] text-white py-2 overflow-hidden border-b border-white/10">

            {/* Lớp phủ mờ hai đầu (Fade Effect) */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#7F170E] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#7F170E] to-transparent z-10"></div>

            {/* Container chạy chữ */}
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Chạy lần 1 */}
                {content}
                {/* Chạy lần 2 (Đuổi theo để tạo vòng lặp vô tận) */}
                {content}
                {/* Chạy lần 3 (Dự phòng cho màn hình siêu rộng) */}
                {content}
            </div>

        </div>
    );
}