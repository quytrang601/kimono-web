import React, { useState, useEffect } from "react";

export default function ProductTabs({ activeTab, onTabClick }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to window scroll to toggle the bottom floating pill
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "women", label: "Nữ" },
    { id: "men", label: "Nam" },
    { id: "kids", label: "Trẻ Em" },
  ];

  // Reusable inner pill content so we don't duplicate code
  const TabPill = () => (
    <div className="flex items-center bg-[#1a1111]/90 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          className={`px-8 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] transition-all duration-300 uppercase ${
            activeTab === tab.id
              ? "bg-white text-[#1a1111] shadow-lg"
              : "text-white/60 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* 1. Static position at the Top (in regular document flow) */}
      <div className="w-full flex justify-center mb-24 relative z-20">
        <TabPill />
      </div>

      {/* 2. Fixed position at the Bottom (appears when scrolled down) */}
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.21,0.45,0.15,1.00)] ${
          isScrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
      >
        <TabPill />
      </div>
    </>
  );
}
