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
  const [showFloatingTabs, setShowFloatingTabs] = useState(false);

  // Listen for scroll to toggle the floating tabs
  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating tabs only after scrolling down 800px
      if (window.scrollY > 600) {
        setShowFloatingTabs(true);
      } else {
        setShowFloatingTabs(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check on initial load in case user refreshed while already scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    // Changed to background color FCF9F7 based on your design.md
    <div className="min-h-screen bg-[#FCF9F7] font-sans pb-32 overflow-x-hidden relative">
      {/* pt-8 md:pt-12 moves everything up closer to the navigation */}
      <main className="max-w-[1440px] mx-auto px-8 pt-8 md:pt-12 pb-24 relative">
        <Reveal>
          <ProductBreadcrumb />
        </Reveal>

        {/* mb-12 separates the header from the products without a massive gap */}
        <div className="mb-12">
          <ProductHeader />
        </div>

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
