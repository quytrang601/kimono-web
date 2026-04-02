import React, { useState, useEffect } from "react";
// Import components
import Reveal from "../components/common/Reveal";
import ProductBreadcrumb from "../components/Products/ProductBreadcrumb";
import ProductHeader from "../components/Products/ProductHeader";
import ProductSection from "../components/Products/ProductSection";
// Đã xóa BottomFilterTabs import ở đây
import { packages } from "../data/products";

export default function Products() {
  const [activeTab, setActiveTab] = useState("women");

  // Logic: Cuộn lên đầu trang ngay khi vào trang
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF9F7] font-sans pb-32 overflow-x-hidden selection:bg-[#F8D7D9]">
      {/* Container chính */}
      <main className="max-w-[1440px] mx-auto px-8 pt-4 md:pt-8 pb-24 relative">

        {/* Header của trang sản phẩm */}
        <ProductHeader />

        {/* Danh sách các Section sản phẩm */}
        <div className="space-y-24 mt-12">
          {/* Tăng space-y lên 24 để các phần trông thoáng đãng, sang trọng hơn */}

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

      {/* Đã xóa hoàn toàn BottomFilterTabs và các logic showFloatingTabs ở đây */}
    </div>
  );
}