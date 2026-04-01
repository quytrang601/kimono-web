import React from 'react';
import { PiMapPinLight, PiPhoneLight, PiEnvelopeLight, PiClockLight, PiArrowRightLight } from 'react-icons/pi';

const ContactInfo = () => {
    const contactDetails = [
        { icon: <PiMapPinLight />, label: "Location", value: "347-25 Gionmachi, Higashiyama, Kyoto" },
        { icon: <PiPhoneLight />, label: "Phone", value: "070-9150-0677" },
        { icon: <PiEnvelopeLight />, label: "Email", value: "kyokimono.gc@gmail.com" },
        { icon: <PiClockLight />, label: "Hours", value: "09:00 - 18:00 (Hàng ngày)" }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* --- BÊN TRÁI: THÔNG TIN (Đồng bộ Typography) --- */}
            <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex flex-col w-full border-t border-gray-100">
                    {contactDetails.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row md:items-center justify-between py-9 border-b border-gray-100 transition-all duration-500 hover:bg-white/40 px-2"
                        >
                            {/* Cột 1: Nhãn - Đồng bộ với các thẻ H4 ở trang khác */}
                            <div className="flex items-center space-x-4 mb-3 md:mb-0">
                                <span className="text-xl text-[#7F170E] opacity-60 group-hover:opacity-100 transition-opacity">
                                    {item.icon}
                                </span>
                                <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-semibold text-gray-800 group-hover:text-[#7F170E] transition-colors">
                                    {item.label}
                                </span>
                            </div>

                            {/* Cột 2: Nội dung - Đồng bộ với bảng giá Add-ons */}
                            <div className="md:text-right">
                                <p className="text-gray-900 font-sans text-[15px] md:text-[16px] leading-relaxed tracking-tight group-hover:text-black">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- NÚT BẤM ĐẶT LỊCH (Đồng bộ với style Button trang Hairstyle) --- */}
                <div className="mt-16 flex justify-center lg:justify-end">
                    <a
                        href="/booking"
                        className="px-12 py-5 bg-[#7F170E] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#2D1B1B] transition-all duration-500 rounded-full shadow-lg hover:shadow-2xl flex items-center space-x-3 group"
                    >
                        <span>Tiến hành đặt lịch</span>
                        <PiArrowRightLight className="text-lg group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                </div>
            </div>

            {/* --- BÊN PHẢI: KHUNG ẢNH (Đồng bộ style Rounded-2xl trang Hairstyle) --- */}
            <div className="lg:col-span-5 order-1 lg:order-2 sticky top-32">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
                    <img
                        src="src/assets/kimonostore.jpg"
                        alt="Kyo Kimono Aesthetic"
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[3s] group-hover:scale-105"
                    />
                    {/* Overlay tinh tế */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700"></div>
                </div>
            </div>

        </div>
    );
};

export default ContactInfo;