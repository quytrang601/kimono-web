import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../../../styles/animation.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation(); // Dùng để biết đang ở trang nào

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // QUẢN LÝ DANH SÁCH MENU VÀ ĐƯỜNG DẪN TƯƠNG ỨNG
    const menuLinks = [
        { name: "Trang chủ", path: "/" },
        { name: "Đặt Lịch", path: "/dat-lich" },
        { name: "Sản Phẩm", path: "/san-pham" },
        { name: "Bảng Giá", path: "/bang-gia" },
        { name: "Mẫu Làm Tóc", path: "/mau-toc" },
        { name: "Album Ảnh", path: "/album" },
        { name: "Liên Hệ", path: "/lien-he" }
    ];

    return (
        <nav className={`sticky top-0 z-40 w-full transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
            }`}>
            <div className="h-[1px] w-full bg-[#7F170E]/10"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-24">

                    {/* LOGO - Link về trang chủ */}
                    <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#7F170E] rounded-full flex items-center justify-center transition-transform group-hover:rotate-[15deg]">
                            <span className="text-white font-serif text-2xl">K</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#7F170E] font-serif text-xl font-bold tracking-[0.2em] uppercase leading-none">
                                Kyoto
                            </span>
                            <span className="text-gray-400 text-[10px] tracking-[0.3em] uppercase mt-1">
                                Kimono Rental
                            </span>
                        </div>
                    </Link>

                    {/* MENU ITEMS - ĐÃ CHUYỂN TOÀN BỘ SANG THẺ <Link> */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link-ltr text-sm font-medium tracking-wide transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-[#7F170E] font-bold' // Đổi màu nếu đang ở trang đó
                                    : 'text-gray-600 hover:text-[#7F170E]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* NÚT ACTION */}
                    <div className="hidden lg:block">
                        <button className="border border-[#7F170E] text-[#7F170E] px-6 py-2 text-xs uppercase tracking-widest hover:bg-[#7F170E] hover:text-white transition-all duration-500 rounded-sm">
                            Ngôn ngữ
                        </button>
                    </div>

                </div>
            </div>

            <div className="h-[1px] w-full bg-gray-100"></div>
        </nav>
    );
};

export default Navbar;