import React from 'react';
import './Review.css';

// Dữ liệu giữ nguyên ...
const allReviews = [
    { id: 1, name: "Minh Anh", rating: 5, comment: "Trải nghiệm tuyệt vời! Kimono rất mới và sạch sẽ.", date: "20/03" },
    { id: 2, name: "Yuki Tanaka", rating: 5, comment: "High quality service! The hair styling was incredibly delicate.", date: "15/03" },
    { id: 3, name: "Hoàng Nam", rating: 4, comment: "Vị trí rất thuận tiện, ngay gần đền Yasaka.", date: "10/03" },
    { id: 4, name: "Elena Smith", rating: 5, comment: "Professional and friendly staff. Beautiful photos!", date: "05/03" },
    { id: 5, name: "Thu Hà", rating: 5, comment: "Mình đã thuê ở đây 2 lần. Rất hài lòng.", date: "02/03" },
    { id: 6, name: "Kenji", rating: 5, comment: "Perfect spot for Kimono rental. Fast service.", date: "28/02" },
    { id: 7, name: "Bảo Ngọc", rating: 5, comment: "Bộ ảnh chụp cùng Kimono ở đây đẹp xuất sắc.", date: "25/02" },
    { id: 8, name: "Quốc Anh", rating: 4, comment: "Dịch vụ tốt, giá cả hợp lý so với Gion.", date: "20/02" },
    { id: 9, name: "Mỹ Linh", rating: 5, comment: "Mẫu mã đa dạng tới mức mình mất 30p mới chọn xong.", date: "18/02" },
    { id: 10, name: "David Chen", rating: 5, comment: "Best experience in Kyoto. Staff speaks English well.", date: "12/02" },
];

const ReviewCard = ({ review }) => (
    // ✅ THÊM CLASS: bg-seigaiha vào đây
    <div className="w-[350px] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 cursor-default bg-seigaiha">

        {/* RATING SLOTS */}
        <div className="flex text-[#B38B59] text-[10px] mb-3 relative z-10">
            {[...Array(review.rating)].map((_, i) => <span key={i} className="mr-1">★</span>)}
        </div>

        {/* NỘI DUNG */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 italic line-clamp-2 min-h-[40px] relative z-10">
            "{review.comment}"
        </p>

        {/* THÔNG TIN NGƯỜI DÙNG */}
        <div className="flex justify-between items-center border-t border-gray-50 pt-3 relative z-10">
            <span className="font-bold text-gray-800 text-[11px] uppercase tracking-widest">{review.name}</span>
            <span className="text-gray-400 text-[9px]">{review.date}</span>
        </div>

        {/* Hiệu ứng Glow nhẹ khi hover (Optional) */}
        <div className="absolute inset-0 bg-[#7F170E]/2 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
    </div>
);

const Reviews = () => {
    // Chia mảng thành 2 hàng
    const row1 = [...allReviews.slice(0, 5), ...allReviews.slice(0, 5)];
    const row2 = [...allReviews.slice(5, 10), ...allReviews.slice(5, 10)];

    return (
        <section id="reviews" className="py-24 bg-[#FCF9F7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h4 className="text-[#7F170E] font-medium tracking-[0.4em] uppercase text-[10px] mb-3">Kyo Friends</h4>
                <h2 className="text-gray-900 text-4xl font-serif font-bold italic">Cảm Nhận Từ Khách Hàng</h2>
                <div className="w-12 h-[1.5px] bg-[#7F170E] mx-auto mt-4"></div>
            </div>

            <div className="relative fade-edge">
                {/* Hàng 1 */}
                <div className="marquee-container animate-scroll-left">
                    {row1.map((rev, i) => <ReviewCard key={`r1-${i}`} review={rev} />)}
                </div>

                {/* Hàng 2 */}
                <div className="marquee-container animate-scroll-right mt-4">
                    {row2.map((rev, i) => <ReviewCard key={`r2-${i}`} review={rev} />)}
                </div>
            </div>

            <div className="text-center mt-16">
                <button className="px-8 py-3 border border-[#7F170E] text-[#7F170E] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#7F170E] hover:text-white transition-all duration-500 rounded-full">
                    Xem tất cả đánh giá
                </button>
            </div>
        </section>
    );
};

export default Reviews;