import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Reveal from "../components/common/Reveal";
import { packages } from "../data/products";

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
        packages.women.filter((p) => p.id !== parseInt(id)).slice(0, 4),
      ); // Showing up to 4 related items
    } else if (packages.men.find((p) => p.id === parseInt(id))) {
      foundProduct = packages.men.find((p) => p.id === parseInt(id));
      foundCatName = "Kimono nam";
      setRelatedProducts(
        packages.men.filter((p) => p.id !== parseInt(id)).slice(0, 4),
      );
    } else if (packages.kids.find((p) => p.id === parseInt(id))) {
      foundProduct = packages.kids.find((p) => p.id === parseInt(id));
      foundCatName = "Kimono trẻ em";
      setRelatedProducts(
        packages.kids.filter((p) => p.id !== parseInt(id)).slice(0, 4),
      );
    }

    setProduct(foundProduct);
    setCategoryName(foundCatName);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product)
    return (
      <div className="min-h-screen bg-[#FCF9F7] flex items-center justify-center">
        Đang tải...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#FCF9F7] font-sans pb-32">
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        {/* --- NEW BREADCRUMB STYLE --- */}
        <Reveal>
          <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] text-[#8e8e8e] mb-16 relative z-10">
            <Link to="/" className="hover:text-[#7F170E] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              to="/san-pham"
              className="hover:text-[#7F170E] transition-colors"
            >
              Gói Thuê
            </Link>
            <span>/</span>
            <span className="text-[#1a1111] font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </nav>
        </Reveal>

        {/* --- MAIN PRODUCT BLOCK --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32 items-start">
          {/* Left: Image */}
          <Reveal className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[#7F170E]/5 shadow-xl border border-[#7F170E]/10">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover"
              // Fallback if image path is broken
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x800?text=Kyo+Kimono";
              }}
            />
          </Reveal>

          {/* Right: Info */}
          <Reveal delay={200} className="flex flex-col pt-4 md:pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1111] leading-[1.1] mb-10 tracking-tight">
              {categoryName} - <br />
              <span className="italic">{product.title}</span>
            </h1>

            {/* Price Box */}
            <div className="bg-[#F9F7F5] rounded-[2rem] px-8 py-6 mb-12 flex items-baseline gap-2 shadow-sm border border-[#7F170E]/10">
              <span className="text-3xl md:text-4xl font-serif text-[#7F170E] font-bold tracking-tight">
                {product.price}
              </span>
              <span className="text-sm font-medium text-[#4b5563]">
                / Gói thuê
              </span>
            </div>

            {/* Action Buttons (Linked to actual pages) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/dat-lich"
                className="flex-1 bg-[#7F170E] hover:bg-[#5C110A] text-white py-4 px-8 rounded-xl transition-colors duration-300 font-medium tracking-wide shadow-lg shadow-[#7F170E]/20 text-center"
              >
                Đặt Ngay
              </Link>
              <Link
                to="/bang-gia"
                className="flex-1 border border-[#7F170E]/20 bg-white hover:bg-[#F9F7F5] text-[#1a1111] py-4 px-8 rounded-xl transition-all duration-300 font-medium tracking-wide text-center"
              >
                Bảng Giá Thuê Kimono
              </Link>
            </div>
          </Reveal>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#7F170E]/30 block"></div>
            <h2 className="text-3xl font-serif text-[#1a1111]">
              Gói Thuê Khác
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
            {relatedProducts.map((item) => (
              <Link
                to={`/san-pham/${item.id}`}
                key={item.id}
                className="group block bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[#7F170E]/10 hover:shadow-xl transition-all duration-500 border border-[#7F170E]/10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x500?text=Kyo+Kimono";
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-sans font-medium text-sm text-[#1a1111] group-hover:text-[#7F170E] transition-colors mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[#7F170E] font-bold text-xs">
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
            className="flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#4b5563] hover:text-[#7F170E] transition-colors group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
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
