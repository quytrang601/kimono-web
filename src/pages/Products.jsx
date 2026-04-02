import React, { useState, useEffect } from "react";
// Import components
import Reveal from "../components/common/Reveal";
import ProductBreadcrumb from "../components/Products/ProductBreadcrumb";
import ProductHeader from "../components/Products/ProductHeader";
import ProductSection from "../components/Products/ProductSection";
import BottomFilterTabs from "../components/Products/BottomFilterTabs"; // Make sure this path is correct!
import { packages } from "../data/products";

export default function Products() {
  const [activeTab, setActiveTab] = useState("women");
  // Logic: Cuộn lên đầu trang ngay khi Component được gắn (mount) vào DOM
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Dùng "instant" để người dùng không thấy cảnh trang đang chạy lên
    });
  }, []); // Mảng rỗng đảm bảo chỉ chạy 1 lần duy nhất khi vào trang
  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      // Offset by 100px so the section doesn't hide behind the top edge of the browser
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] font-sans pb-32 overflow-x-hidden selection:bg-[#F8D7D9]">
      {/* 1. Giảm pt-16 md:pt-24 xuống còn pt-4 md:pt-8 để nội dung nhích lên sát Navbar.
          2. Giữ pb (padding bottom) để không bị dính vào chân trang.
      */}
      <main className="max-w-[1440px] mx-auto px-8 pt-4 md:pt-8 pb-24 relative">

        {/* ProductHeader bây giờ sẽ thực sự được đẩy lên cao */}
        <ProductHeader />

        <ProductTabs activeTab={activeTab} onTabClick={scrollToSection} />

        {/* Products are now positioned directly under the header */}
        <div className="space-y-16">
          <ProductSection
            id="section-women"
            title="Kimono Nữ"
            items={packages.women}
          />
          <ProductSection
            id="section-men"
            title="Kimono Nam"
            items={packages.men}
          />
          <ProductSection
            id="section-kids"
            title="Kimono Trẻ Em"
            items={packages.kids}
          />
        </div>
      </main>

      {/* Floating Filter Tab - Receives the isVisible prop based on 800px scroll */}
      <BottomFilterTabs
        activeTab={activeTab}
        onTabClick={scrollToSection}
        isVisible={showFloatingTabs}
      />
    </div>
  );
}