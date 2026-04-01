import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Reveal from "../components/common/Reveal";
import { packages } from "../data/products"; // Assuming your mock data is still exported from Products.jsx. If you moved it to src/data/products.js, import it from there.

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    let foundProduct = null;
    let foundCatName = "";

    // Flatten and search
    if (packages.women.find((p) => p.id === parseInt(id))) {
      foundProduct = packages.women.find((p) => p.id === parseInt(id));
      foundCatName = "Kimono nữ";
      setRelatedProducts(
        packages.women.filter((p) => p.id !== parseInt(id)).slice(0, 2),
      ); // Show 2 related items like the screenshot
    } else if (packages.men.find((p) => p.id === parseInt(id))) {
      foundProduct = packages.men.find((p) => p.id === parseInt(id));
      foundCatName = "Kimono nam";
      setRelatedProducts(
        packages.men.filter((p) => p.id !== parseInt(id)).slice(0, 2),
      );
    } else if (packages.kids.find((p) => p.id === parseInt(id))) {
      foundProduct = packages.kids.find((p) => p.id === parseInt(id));
      foundCatName = "Kimono trẻ em";
      setRelatedProducts(
        packages.kids.filter((p) => p.id !== parseInt(id)).slice(0, 2),
      );
    }

    setProduct(foundProduct);
    setCategoryName(foundCatName);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product)
    return (
      <div className="min-h-screen bg-[#EAE5DF] flex items-center justify-center">
        Đang tải...
      </div>
    );

  return (
    // Base background matching the screenshot
    <div className="min-h-screen bg-[#EAE5DF] font-sans pb-32">
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        {/* --- BREADCRUMB --- */}
        <Reveal>
          <nav className="flex items-center space-x-2 text-[11px] font-medium text-[#6b7280] mb-8">
            <Link
              to="/"
              className="hover:text-[#7F170E] transition-colors flex items-center gap-1"
            >
              <svg
                className="w-3.5 h-3.5 mb-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Trang chủ
            </Link>
            <span>›</span>
            <Link
              to="/san-pham"
              className="hover:text-[#7F170E] transition-colors"
            >
              Gói Thuê
            </Link>
            <span>›</span>
            <span className="text-[#1a1111]">{product.title}</span>
          </nav>
        </Reveal>

        {/* --- MAIN PRODUCT BLOCK --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32 items-start">
          {/* Left: Image (Large radius per design.md) */}
          <Reveal className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-sm">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </Reveal>

          {/* Right: Info */}
          <Reveal delay={200} className="flex flex-col pt-4 md:pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1111] leading-[1.1] mb-10 tracking-tight">
              {categoryName} - <br />
              {product.title}
            </h1>

            {/* Price Box (Rounded pale rectangle from screenshot) */}
            <div className="bg-[#E4DCD5] rounded-[2rem] px-8 py-6 mb-12 flex items-baseline gap-2 shadow-sm border border-white/20">
              <span className="text-3xl md:text-4xl font-sans text-[#A46769] font-bold tracking-tight">
                {product.price}
              </span>
              <span className="text-sm font-medium text-[#4b5563]">
                / Gói thuê
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#A46769] hover:bg-[#8e585a] text-white py-4 px-8 rounded-lg transition-colors duration-300 font-medium tracking-wide shadow-sm">
                Đặt Ngay
              </button>
              <button className="flex-1 border border-[#1a1111]/20 bg-transparent hover:bg-white text-[#1a1111] py-4 px-8 rounded-lg transition-all duration-300 font-medium tracking-wide">
                Bảng Giá Thuê Kimono
              </button>
            </div>
          </Reveal>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        <Reveal>
          <h2 className="text-3xl font-serif text-[#1a1111] mb-8">
            Gói Thuê Kimono
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
            {relatedProducts.map((item, idx) => (
              <Link
                to={`/san-pham/${item.id}`}
                key={item.id}
                className="group block bg-[#F3EFE9] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-white/50"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="p-5 bg-white/50 backdrop-blur-sm">
                  <h3 className="font-serif text-lg text-[#1a1111] group-hover:text-[#7F170E] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#A46769] font-bold text-sm">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* --- BACK BUTTON --- */}
        <Reveal>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-sm font-medium text-[#1a1111] hover:text-[#7F170E] transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Quay lại
          </button>
        </Reveal>
      </main>
    </div>
  );
}
