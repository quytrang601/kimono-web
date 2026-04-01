import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#FCF9F7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* CỘT TRÁI: HÌNH ẢNH (Bố cục lồng ghép) */}
                    <div className="relative">
                        {/* Ảnh chính lớn - Bo góc hiện đại */}
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img
                                src="src/assets/Aboutus.jpg"
                                alt="Kyo Kimono Rental Experience"
                                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Box nội dung đè lên ảnh (Floating Card) */}
                        <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs z-20 border border-[#7F170E]/10">
                            <p className="text-[#7F170E] font-serif italic text-xl mb-3">"Ký ức Kyoto"</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Mỗi bộ Kimono là một câu chuyện, mỗi bước chân là một hành trình trở về quá khứ vàng son của cố đô.
                            </p>
                        </div>
                    </div>

                    {/* CỘT PHẢI: NỘI DUNG CHI TIẾT */}
                    <div className="flex flex-col">
                        <h4 className="text-[#7F170E] font-medium tracking-[0.3em] uppercase text-sm mb-4">
                            Về Chúng Tôi
                        </h4>
                        <h2 className="text-gray-900 text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
                            Dịch Vụ Cho Thuê <br />
                            <span className="text-[#7F170E]">Kimono Cao Cấp</span> <br />
                            Tại Kyoto
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-base text-justify">
                            <p>
                                <strong className="text-gray-800">Kyo Kimono Rental</strong> là cửa hàng cho thuê Kimono cao cấp tọa lạc tại trái tim của Gion, Kyoto. Với bộ sưu tập hơn <span className="text-[#7F170E] font-bold">1000 bộ Kimono chính hãng</span>, chúng tôi tự hào cung cấp các mẫu mã đa dạng từ nét đẹp truyền thống sâu lắng đến phong cách hiện đại tinh tế, dành cho cả nam, nữ và trẻ em.
                            </p>

                            <p>
                                Tại đây, đội ngũ chuyên gia của chúng tôi sẽ hỗ trợ bạn mặc Kimono đúng chuẩn nghệ thuật, kết hợp cùng dịch vụ làm tóc thanh lịch và các gói chụp ảnh lưu niệm chuyên nghiệp. Chúng tôi không chỉ cho thuê trang phục, chúng tôi giúp bạn ghi lại những khoảnh khắc khó quên khi tản bộ qua <span className="italic">chùa Kiyomizu-dera</span> hay những con phố cổ kính huyền bí của Gion.
                            </p>

                            <p>
                                Dù bạn đang tìm kiếm một trải nghiệm dạo phố tao nhã hay chuẩn bị cho một sự kiện đặc biệt, Kyo Kimono Rental cam kết mang lại một hành trình suôn sẻ, đáng nhớ và đậm chất văn hóa Nhật Bản.
                            </p>
                        </div>

                        {/* BỘ ĐÔI NÚT ẤM */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-10">
                            <button className="bg-[#7F170E] text-white px-8 py-4 rounded-full font-bold tracking-widest hover:bg-[#5c110a] transition-all shadow-lg hover:shadow-[#7F170E]/30 uppercase text-[11px]">
                                Xem Sản Phẩm
                            </button>
                            <button className="border-2 border-[#7F170E] text-[#7F170E] px-8 py-4 rounded-full font-bold tracking-widest hover:bg-[#7F170E] hover:text-white transition-all uppercase text-[11px]">
                                Xem Album Ảnh
                            </button>
                        </div>
                    </div>
                </div>

                {/* THANH ĐỊA CHỈ CHI TIẾT (Address Bar) */}
                <div className="mt-24 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-5">
                        <div className="w-12 h-12 bg-[#7F170E]/10 rounded-full flex items-center justify-center text-[#7F170E] text-xl">
                            📍
                        </div>
                        <div>
                            <h5 className="font-bold text-gray-800 uppercase tracking-widest text-xs mb-1">Vị trí thuận tiện tại Gion, Kyoto</h5>
                            <p className="text-gray-500 text-sm">347-25 Gionmachi Kitagawa, Higashiyama Ward, 3F, Kyoto 605-0073, Japan</p>
                        </div>
                    </div>
                    <div className="text-right border-l-0 md:border-l border-gray-100 pl-0 md:pl-8">
                        <p className="text-[#7F170E] font-medium text-xs uppercase tracking-tighter mb-1 italic">Địa danh lân cận:</p>
                        <p className="text-gray-400 text-[11px] uppercase tracking-wider">Chùa Thanh Thủy • Đền Yasaka • Phố đi bộ Gion</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;