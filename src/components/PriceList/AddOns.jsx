import React from 'react';
import { PiScissorsLight, PiCameraLight, PiMagicWandLight, PiUmbrellaLight } from 'react-icons/pi';

const AddOns = () => {
    const extras = [
        { icon: <PiScissorsLight />, name: "Làm tóc chuyên nghiệp", price: "1.500 ¥" },
        { icon: <PiMagicWandLight />, name: "Trang điểm tự nhiên", price: "3.000 ¥" },
        { icon: <PiUmbrellaLight />, name: "Thuê ô giấy Wagasa", price: "500 ¥" },
        { icon: <PiCameraLight />, name: "Gói chụp ảnh (1 tiếng)", price: "15.000 ¥" },
    ];

    return (
        <section className="w-full flex flex-col items-center">
            {/* Đường kẻ phân cách ngắn lại và nằm giữa */}
            <div className="w-24 h-[1px] bg-[#7F170E]/30 mb-12"></div>

            {/* Giới hạn chiều rộng (max-w-2xl) để Tên và Giá không bị quá xa nhau */}
            <div className="w-full max-w-2xl mx-auto px-4">

                {/* Tiêu đề căn giữa */}
                <div className="mb-10 text-center space-y-2">
                    <h4 className="text-[#7F170E] font-medium tracking-[0.4em] uppercase text-[9px] opacity-70">
                        Enhance Your Look
                    </h4>
                    <h3 className="text-gray-800 font-serif text-3xl font-light italic">
                        Dịch vụ <span className="text-[#7F170E] font-normal not-italic">bổ sung</span>
                    </h3>
                </div>

                {/* Danh sách dịch vụ - 1 cột để tập trung thị giác vào giữa */}
                <div className="space-y-1">
                    {extras.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between group py-5 border-b border-gray-100 hover:border-[#7F170E]/20 transition-all duration-500"
                        >
                            <div className="flex items-center space-x-4">
                                <span className="text-xl text-gray-400 group-hover:text-[#7F170E] transition-colors">
                                    {item.icon}
                                </span>
                                <span className="text-gray-600 text-xs tracking-[0.2em] font-light uppercase">
                                    {item.name}
                                </span>
                            </div>

                            <span className="text-gray-900 font-serif text-base font-medium tracking-tight">
                                {item.price}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Ghi chú nhỏ căn giữa */}
                <p className="mt-10 text-center text-[10px] text-gray-400 tracking-widest uppercase italic opacity-60">
                    * Please book 24h in advance for make-up services
                </p>
            </div>
        </section>
    );
};

export default AddOns;