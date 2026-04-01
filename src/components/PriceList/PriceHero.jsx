import React from 'react';

const PriceHero = () => {
    return (
        <section className="relative bg-[#FCF9F7] pt-32 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Thay đổi gap-12 -> gap-16 md:gap-24 để tăng khoảng cách, 
                  tạo sự thông thoáng giữa ảnh và chữ 
                */}
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* 2. Phần nội dung chữ - Tăng visual weight để cân bằng */}
                    {/* flex-grow -> Cho phép khối chữ chiếm không gian còn lại */}
                    <div className="flex-grow text-center md:text-left">
                        <div data-aos="fade-left" data-aos-delay="200">
                            <h4 className="text-[#7F170E] font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs mb-5">
                                Pricing & Services
                            </h4>

                            {/* Tăng kích thước chữ một chút để "đấu" lại visual weight của ảnh */}
                            <h1 className="text-gray-900 text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8">
                                Bảng Giá <br />
                                <span className="italic font-light text-[#7F170E]">Thuê Đồ</span>
                            </h1>

                            <div className="w-16 h-[1px] bg-[#7F170E]/30 mx-auto md:mx-0 mb-9"></div>

                            {/* Tăng nhẹ text-base và leading để khối chữ trông "dày" hơn */}
                            <p className="text-gray-600 max-w-xl mx-auto md:mx-0 text-base md:text-lg leading-[2.2] tracking-widest font-light italic">
                                Khám phá vẻ đẹp truyền thống Nhật Bản với bộ sưu tập Kimono đa dạng.
                                Chúng tôi cung cấp các gói thuê linh hoạt, phù hợp với mọi nhu cầu từ dạo phố đến chụp ảnh chuyên nghiệp.
                            </p>

                            <div className="mt-12 flex items-center justify-center md:justify-start space-x-5">
                                <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest opacity-80">
                                    Full Accessories Included
                                </span>
                                <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                                <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest opacity-80">
                                    No Hidden Fees
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PriceHero;