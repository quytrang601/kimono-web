import React from "react";

export default function Toast({ visible, message, type }) {
  return (
    <div
      className={`fixed top-24 right-8 z-[100] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 transition-all duration-200 transform 
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"} 
      ${type === "success" ? "bg-[#10B981] shadow-[#10B981]/20" : "bg-[#EF4444] shadow-[#EF4444]/20"}`}
    >
      {type === "success" ? (
        <svg
          className="w-6 h-6 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      <div>
        <p className="font-bold text-sm tracking-wide">
          {type === "success" ? "Thành công" : "Đã xóa"}
        </p>
        <p className="text-xs opacity-90 mt-0.5 line-clamp-1">{message}</p>
      </div>
    </div>
  );
}
