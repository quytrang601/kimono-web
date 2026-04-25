import React, { useState } from "react";

const ContactHero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 60;
    const moveY = (clientY - window.innerHeight / 2) / 60;
    setMousePos({ x: moveX, y: moveY });
  };

  const bgImages = [
    "/japan.jpg",
    "/japan_2.jpg",
    "/japan_3.jpg",
    "/japan_4.jpg",
  ];

  return (
    <div
      className=" relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#FCF9F7] rounded-[1rem] mb-16 shadow-lg shadow-[#7F170E]/5 "
      onMouseMove={handleMouseMove}
    >
      {/* 1. LỚP NỀN */}
      <div
        className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 opacity-[0.12] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.03)`,
        }}
      >
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`relative w-full h-full overflow-hidden rounded-xl ${index % 2 === 0 ? "translate-y-10" : "-translate-y-10"}`}
          >
            <img
              src={img}
              alt={`Kyoto color texture ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* 2. OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#FCF9F7] via-transparent to-[#FCF9F7]"></div>

      {/* 3. NỘI DUNG CHÍNH */}
      <div className="relative z-20 text-center px-6 md:px-20 py-20 w-full flex flex-col items-center">

        {/* Badge nhỏ */}
        <div className="inline-flex items-center space-x-4 mb-8">
          <span className="w-12 h-[1px] bg-[#7F170E]/60"></span>
          <span className="text-[#7F170E] text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-medium opacity-80">
            Kyoto Tradition
          </span>
          <span className="w-12 h-[1px] bg-[#7F170E]/60"></span>
        </div>

        {/* TIÊU ĐỀ CHÍNH - Đã sửa căn giữa tuyệt đối */}
        <div className="relative mb-12">
          <h1 className="flex items-center justify-center text-gray-950 text-7xl md:text-[12rem] font-serif font-bold leading-none tracking-tighter">
            <span>Liên</span>
            {/* Dùng md:ml-4 thay vì -ml-10 để tạo khoảng cách thoáng, không bị đè chữ */}
            <span className="italic font-light text-[#7F170E] ml-4 md:ml-8">
              Hệ
            </span>
          </h1>

          {/* Chữ dọc - Dùng absolute để nó không đẩy tiêu đề lệch đi */}
          <span className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 rotate-90 text-[10px] tracking-[0.5em] text-gray-400 font-light whitespace-nowrap hidden lg:block uppercase">
            Gion District / Kyoto
          </span>
        </div>

        {/* Đoạn mô tả */}
        <div className="max-w-xl mx-auto border-t border-gray-100 pt-12">
          <p className="text-gray-500 text-sm md:text-base leading-[2.5] uppercase tracking-[0.3em] font-light italic opacity-90">
            Nơi mỗi cuộc gặp gỡ là một cơ duyên lành. <br />
            Hãy để chúng tôi lắng nghe câu chuyện của bạn.
          </p>
        </div>
      </div>

      {/* 4. Decorative Corners */}
      <div className="absolute top-10 left-10 text-[10px] text-gray-300 uppercase tracking-[0.4em] font-light flex items-center space-x-2">
        <span className="w-4 h-4 border-l border-t border-gray-200"></span>
        <span>Craftsmanship</span>
      </div>
    </div>
  );
};

export default ContactHero;