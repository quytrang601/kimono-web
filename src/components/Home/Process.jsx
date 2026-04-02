import React from 'react';

const Process = () => {
    const steps = [
        {
            id: 1,
            icon: "/calendar.png",
            title: "Đặt Lịch",
            desc: "Đặt lịch qua website, Zalo hoặc điện thoại. Chọn gói thuê và ngày phù hợp với bạn.",
        },
        {
            id: 2,
            icon: "/kimono.png",
            title: "Chọn Kimono",
            desc: "Đến cửa hàng và chọn bộ Kimono yêu thích từ bộ sưu tập hơn 200 mẫu đa dạng.",
        },
        {
            id: 3,
            icon: "/makeup.png",
            title: "Mặc & Làm Tóc",
            desc: "Đội ngũ chuyên nghiệp hỗ trợ mặc Kimono đúng cách và làm tóc kiểu Nhật chỉ trong 30 phút.",
        },
        {
            id: 4,
            icon: "/photographer.png",
            title: "Tận Hưởng & Chụp Ảnh",
            desc: "Dạo phố Kyoto, chụp ảnh tại các điểm tham quan, lưu giữ những khoảnh khắc đáng nhớ.",
        },
    ];

    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            {/* Cánh hoa đào trang trí nhẹ ở góc (Tinh chỉnh lại cho tinh tế hơn) */}
            <div className="absolute top-10 right-10 opacity-[0.03] rotate-12 text-6xl pointer-events-none">🌸</div>
            <div className="absolute bottom-10 left-10 opacity-[0.03] -rotate-12 text-6xl pointer-events-none">🌸</div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* TIÊU ĐỀ */}
                <div className="text-center mb-24">
                    <h4 className="text-[#7F170E] font-medium tracking-[0.3em] uppercase text-xs mb-3">Quy Trình 4 Bước</h4>
                    <h2 className="text-gray-900 text-4xl md:text-5xl font-serif font-bold mb-4">
                        Trải Nghiệm <span className="text-[#7F170E]">Kimono</span> Hoàn Hảo
                    </h2>
                    <p className="text-gray-500 tracking-[0.2em] uppercase text-sm">
                        Chỉ 4 bước đơn giản để khám phá vẻ đẹp cố đô
                    </p>
                    <div className="w-16 h-[1px] bg-[#7F170E] mx-auto mt-6"></div>
                </div>

                {/* CÁC BƯỚC QUY TRÌNH */}
                <div className="relative">
                    {/* THAY ĐỔI: Đường kẻ ngang nối các bước (Chỉ hiện trên desktop) */}
                    <div className="hidden lg:block absolute top-[40%] left-0 w-full h-[1px] bg-gray-100 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className="group relative text-center z-10 break-inside-avoid">
                                {/* Vòng tròn Icon - THIẾT KẾ MỚI TỐI GIẢN */}
                                <div className="relative inline-block mb-10">
                                    {/* Số thứ tự nhỏ phía trên - Tinh chỉnh vị trí và kích thước */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-[#7F170E] border-2 border-[#7F170E]/50 rounded-full flex items-center justify-center text-xs font-bold shadow-lg z-20 transition-transform group-hover:scale-110 group-hover:bg-[#7F170E] group-hover:text-white group-hover:border-transparent">
                                        {step.id}
                                    </div>

                                    {/* THAY ĐỔI LỚN: Vòng tròn chứa Icon
                                      - Thu nhỏ kích thước: w-24 h-24
                                      - Nền trắng tinh khôi: bg-white
                                      - Viền cực nhẹ: border border-gray-100
                                      - Hiệu ứng HOVER MỚI: Tỏa sáng nhẹ (Shadow-lg tỏa rộng) và viền đỏ sắc nét
                                    */}
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm border border-gray-100 transition-all duration-500 group-hover:border-[#7F170E] group-hover:shadow-[0_15px_60px_-15px_rgba(127,23,14,0.1)] overflow-hidden">
                                        <span className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform">
                                            <img src={step.icon} alt={step.title} className="w-10 h-10" />
                                        </span>
                                    </div>

                                    {/* Bỏ hiệu ứng Ping-slow lan tỏa mạnh */}
                                </div>

                                {/* Nội dung chữ */}
                                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 transition-colors group-hover:text-[#7F170E]">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed px-4 text-justify md:text-center italic">
                                    "{step.desc}"
                                    {/* Thêm dấu nháy kép cho desc */}
                                </p>

                                {/* Hiệu ứng vạch đỏ dưới chân khi hover - Tinh chỉnh độ rộng */}
                                <div className="w-0 h-[1px] bg-[#7F170E]/70 mx-auto mt-7 transition-all duration-500 group-hover:w-8"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;