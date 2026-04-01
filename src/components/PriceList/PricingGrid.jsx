import React from 'react';

const PricingGrid = () => {
    const plans = [
        {
            name: "Standard",
            price: "2.900",
            features: ["50+ mẫu Kimono cơ bản", "Đai Obi tiêu chuẩn", "Túi xách & Dép Zori", "Hỗ trợ mặc đồ"],
        },
        {
            name: "Premium",
            price: "5.500",
            recommended: true,
            features: ["Toàn bộ kho mẫu (200+)", "Đai Obi trang trí", "Làm tóc cơ bản", "Phụ kiện cao cấp", "Hỗ trợ mặc đồ chuyên nghiệp"],
        },
        {
            name: "Couple",
            price: "8.000",
            features: ["1 Set Nữ Premium", "1 Set Nam thanh lịch", "Làm tóc cho nữ", "Giảm 10% in ảnh lưu niệm"],
        }
    ];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-full">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`group relative bg-white p-10 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                    ${plan.recommended ? 'border-[#7F170E] shadow-md' : 'border-gray-100 shadow-sm'}`}
                >
                    {plan.recommended && (
                        <span className="absolute top-0 left-10 -translate-y-1/2 bg-[#7F170E] text-white text-[9px] tracking-[0.2em] px-4 py-1 uppercase rounded-full">
                            Phổ biến nhất
                        </span>
                    )}

                    <h3 className="text-gray-800 font-serif text-2xl mb-4 group-hover:text-[#7F170E] transition-colors">{plan.name}</h3>
                    <div className="flex items-baseline mb-8">
                        <span className="text-gray-400 text-lg mr-1 font-light">¥</span>
                        <span className="text-5xl font-serif font-bold text-[#7F170E]">{plan.price}</span>
                    </div>

                    <ul className="space-y-4 mb-10 min-h-[180px]">
                        {plan.features.map((feat, i) => (
                            <li key={i} className="text-gray-500 text-[14px] flex items-start leading-relaxed">
                                <span className="text-[#7F170E] mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#7F170E]/30"></span>
                                {feat}
                            </li>
                        ))}
                    </ul>

                    <button className={`w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all border rounded-xl
                        ${plan.recommended
                            ? 'bg-[#7F170E] text-white border-[#7F170E] hover:bg-[#2D1B1B]'
                            : 'bg-transparent text-gray-500 border-gray-200 hover:border-[#7F170E] hover:text-[#7F170E]'}`}>
                        Đặt lịch ngay
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PricingGrid;