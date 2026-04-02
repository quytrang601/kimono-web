import React from "react";

const BottomFilterTabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[9999] w-fit">
      {/* Khung ngoài: Glassmorphism với màu đen sâu đặc trưng (Urushi Lacquer style) */}
      <div className="relative flex items-center bg-[#1a1111]/85 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">

        {/* Lớp trang trí mờ nhẹ bên trong */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none"></div>

        {[
          { id: "women", label: "Kimono Nữ" },
          { id: "men", label: "Kimono Nam" },
          { id: "kids", label: "Trẻ Em" },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`relative z-10 px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.25em] transition-all duration-500 uppercase flex items-center justify-center min-w-[120px]
                ${isActive
                  ? "text-[#1a1111]"
                  : "text-white/40 hover:text-white/80"
                }`}
            >
              {/* Hiệu ứng viên thuốc trắng chạy ngầm (Active State) */}
              {isActive && (
                <div
                  className="absolute inset-0 bg-white rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.2)] animate-in fade-in zoom-in-95 duration-300"
                  style={{ layoutId: "activeTab" }} // Nếu bạn dùng Framer Motion có thể thêm layoutId ở đây
                />
              )}

              <span className="relative z-20">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Chỉ báo nhỏ dưới cùng (Zen Dot) */}
      <div className="flex justify-center mt-3 gap-1.5 opacity-50">
        <div className={`w-1 h-1 rounded-full transition-all duration-500 ${activeTab === 'women' ? 'bg-[#7F170E] w-4' : 'bg-gray-400'}`}></div>
        <div className={`w-1 h-1 rounded-full transition-all duration-500 ${activeTab === 'men' ? 'bg-[#7F170E] w-4' : 'bg-gray-400'}`}></div>
        <div className={`w-1 h-1 rounded-full transition-all duration-500 ${activeTab === 'kids' ? 'bg-[#7F170E] w-4' : 'bg-gray-400'}`}></div>
      </div>
    </div>
  );
};

export default BottomFilterTabs;