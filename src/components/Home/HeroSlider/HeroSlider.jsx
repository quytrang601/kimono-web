import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';


const slides = [
    {
        id: 1,
        image: '/Slider_image_1.jpg',
        title: 'Hóa Thân Tại Cố Đô Kyoto',
        subtitle: 'Trải nghiệm vẻ đẹp truyền thống Nhật Bản trong từng nếp áo Kimono'
    },
    {
        id: 2,
        image: '/Slider_image_2.jpg',
        title: 'Khoảnh Khắc Đẹp Tựạ Tranh',
        subtitle: 'Lưu giữ những kỷ niệm tuyệt vời nhất tại xứ sở Hoa Đào'
    },
    {
        id: 3,
        image: '/Slider_image_3.avif',
        title: <>Dịch Vụ <br /> Kimono Cao Cấp</>,
        subtitle: 'Hơn 500+ mẫu Kimono & Yukata độc đáo, phụ kiện tinh tế'
    },
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // Key để React render lại Text và kích hoạt Animation
    const [animationKey, setAnimationKey] = useState(0);

    // Hiệu ứng tự động chuyển Slide
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            // Thay đổi key để animation chạy lại
            setAnimationKey(prev => prev + 1);
        }, 6000); // Chuyển slide sau 6 giây

        return () => clearInterval(slideInterval);
    }, []);

    return (
        // relative min-h-screen: Ép slider bao phủ toàn màn hình
        <div className="relative min-h-screen overflow-hidden bg-black/80">

            {/* 1. Lớp Ảnh nền (Background Images) */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Lớp phủ mờ (Overlay) */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transform scale-105" // Phóng nhẹ để tạo chiều sâu
                    />
                </div>
            ))}

            {/* 2. Lớp Nội dung (Text & Buttons) */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                {/* max-w-4xl: Giới hạn độ rộng để chữ không bị trải dài */}
                <div className="text-center text-white px-6 md:px-12 max-w-6xl" key={animationKey}>

                    {/* 🌸 Chữ "Hóa Thân Tại..." - Hiệu ứng slide-up-fade🌸 */}
                    <h1 className="animate-text-primary text-5xl md:text-7xl font-serif font-bold tracking-[0.2em] leading-tight mb-6">
                        {slides[currentSlide].title}
                    </h1>

                    {/* Chữ Subtitle - Hiệu ứng fade-in🌸 */}
                    <p className="animate-text-secondary text-base md:text-lg font-light tracking-widest opacity-80 mb-12">
                        {slides[currentSlide].subtitle}
                    </p>

                    {/* 🌟 BỘ ĐÔI NÚT BẤM CỰC SANG🌟 */}
                    <div className=" flex flex-col sm:flex-row items-center justify-center gap-6">

                        {/* 1. Nút Đặt Lịch Ngay (Nút chính - Màu đỏ đô) */}
                        <Link to="/dat-lich" className="w-full sm:w-auto bg-[#7F170E] text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#9c1d11] shadow-lg shadow-[#7F170E]/20 text-center">
                            Đặt Lịch Ngay
                        </Link>

                        {/* 2. Nút Sản phẩm (Nút phụ - Viền đỏ, nền trong) */}
                        <Link to="/san-pham" className="w-full sm:w-auto btn-fill-effect border border-[#7F170E] text-[#7F170E] px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] bg-white transition-all duration-300 hover:text-white text-center">
                            Sản phẩm
                        </Link>

                    </div>
                </div>
            </div>

            {/* 3. Phân trang (Pagination Dots) - Tùy chọn */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => { setCurrentSlide(index); setAnimationKey(prev => prev + 1); }}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#7F170E]' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>

        </div>
    );
};

export default HeroSlider;