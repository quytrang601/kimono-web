import React, { useState } from "react";

// Import components
import Reveal from "../components/common/Reveal";
import ProductBreadcrumb from "../components/Products/ProductBreadcrumb";
import ProductHeader from "../components/Products/ProductHeader";
import ProductSection from "../components/Products/ProductSection";
import ProductTabs from "../components/Products/ProductTabs";
import { packages } from "../data/products";

export default function Products() {
  const [activeTab, setActiveTab] = useState("women");

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0ED] font-sans pb-32 overflow-x-hidden selection:bg-[#F8D7D9]">
      <main className="max-w-[1440px] mx-auto px-8 py-16 md:py-24 relative">
        <Reveal>
          <ProductBreadcrumb />
        </Reveal>

        <ProductHeader />

        {/* Positioned right under the header so it starts at the top */}
        <ProductTabs activeTab={activeTab} onTabClick={scrollToSection} />

        <div className="space-y-12">
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
    </div>
  );
}
