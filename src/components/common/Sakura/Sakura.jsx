import React from 'react';
import './Sakura.css';
import '../../../styles/animation.css'
const Sakura = () => {
    // Tạo 40 cánh hoa để mật độ trông tự nhiên hơn
    const petals = Array.from({ length: 40 });

    return (
        // pointer-events-none: Giúp chuột xuyên qua cánh hoa
        // z-[9999]: Đẩy hoa lên trên cùng
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
            {petals.map((_, i) => {
                // --- THÔNG SỐ ĐỂ CÁNH HOA THANH THOÁT ---

                // 1. Kích thước NHỎ hơn: 6px đến 12px (mảnh mai)
                const size = 6 + Math.random() * 6;

                // 2. Tốc độ rơi CHẬM hơn, lướt nhẹ: 8s đến 18s
                const duration = 8 + Math.random() * 10;

                // 3. Độ trễ xuất hiện ngẫu nhiên hơn
                const delay = Math.random() * 10;

                return (
                    <div
                        key={i}
                        // Sử dụng class .sakura-petal-v2 chúng ta vừa vẽ ở CSS
                        className="absolute sakura-petal-v2"
                        style={{
                            left: `${Math.random() * 100}vw`, // Vị trí ngang ngẫu nhiên
                            top: `-${size}px`, // Xuất hiện từ đỉnh màn hình
                            width: `${size}px`,
                            height: `${size * 1.2}px`, // Hơi thuôn dài cho thanh thoát
                            opacity: 0.6, // Hơi trong suốt nhẹ

                            // Sử dụng animation .sakura-fall-v2 mới
                            animation: `sakura-fall-v2 ${duration}s linear infinite`,
                            animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Sakura;