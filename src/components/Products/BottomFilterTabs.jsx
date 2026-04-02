import React from "react";

export default function BottomFilterTabs({ activeTab, onTabClick, isVisible }) {
  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="flex items-center bg-[#1a1111]/90 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl">
        {[
          { id: "women", label: "Nữ" },
          { id: "men", label: "Nam" },
          { id: "kids", label: "Trẻ Em" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            className={`px-8 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] transition-all duration-300 uppercase
              ${
                activeTab === tab.id
                  ? "bg-white text-[#1a1111] shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
