import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">

                    {/* CỘT 1: GIỚI THIỆU - Thanh lịch hơn */}
                    <div className="footer-section">
                        <div className="mb-6">
                            <h3 className="text-[#F8D7D9] font-serif text-xl tracking-[0.2em] uppercase font-light">
                                Kyo <span className="italic opacity-70">Kimono</span>
                            </h3>
                            <div className="w-8 h-[1px] bg-[#7F170E] mt-2"></div>
                        </div>
                        <p className="text-gray-500 text-[13px] leading-[1.8] tracking-wide mb-6 italic font-light">
                            Gìn giữ nét đẹp truyền thống Nhật Bản giữa lòng phố cổ Gion. Trải nghiệm sự tinh tế trong từng nếp vải.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="social-link"><FaInstagram /></a>
                            <a href="#" className="social-link"><FaFacebookF /></a>
                            <a href="#" className="social-link"><FaTiktok /></a>
                        </div>
                    </div>

                    {/* CỘT 2: LIÊN KẾT */}
                    <div className="footer-section lg:pl-10">
                        <h4 className="footer-title">Khám Phá</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Trang Chủ</Link></li>
                            <li><Link to="/san-pham">Gói Thuê</Link></li>
                            <li><Link to="/bang-gia">Bảng Giá</Link></li>
                            <li><Link to="/dat-lich">Đặt Lịch</Link></li>
                        </ul>
                    </div>

                    {/* CỘT 3: HỖ TRỢ */}
                    <div className="footer-section">
                        <h4 className="footer-title">Thông Tin</h4>
                        <ul className="footer-links">
                            <li><Link to="/lien-he">Quy trình thuê</Link></li>
                            <li><Link to="/mau-toc">Mẫu tóc & Makeup</Link></li>
                            <li><Link to="/lien-he">Câu hỏi thường gặp</Link></li>
                            <li><Link to="/lien-he">Chính sách hủy</Link></li>
                        </ul>
                    </div>

                    {/* CỘT 4: LIÊN HỆ - Gọn gàng hơn */}
                    <div className="footer-section">
                        <h4 className="footer-title">Liên Hệ</h4>
                        <div className="space-y-4 text-[13px]">
                            <div className="flex items-start space-x-3 group">
                                <FaMapMarkerAlt className="text-[#7F170E] mt-1 shrink-0" />
                                <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    347-25 Gionmachi Kitagawa, Higashiyama, Kyoto 605-0073
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhoneAlt className="text-[#7F170E] shrink-0" />
                                <p className="text-gray-500">070-9150-0677</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-[#7F170E] shrink-0" />
                                <p className="text-gray-500 lowercase tracking-wider">kyokimono.gc@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BẢN QUYỀN - Thu nhỏ và làm mờ */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 uppercase tracking-[0.3em]">
                    <p>© 2026 Kyo Kimono Rental. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0 opacity-70">
                        <Link to="/lien-he" className="hover:text-[#F8D7D9] transition-colors">Privacy</Link>
                        <Link to="/lien-he" className="hover:text-[#F8D7D9] transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;