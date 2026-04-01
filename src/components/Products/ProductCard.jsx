import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";

export default function ProductCard({ id, title, price, img, index }) {
  return (
    <Reveal delay={(index % 3) * 100} className="group cursor-pointer">
      {/* UPDATE HERE: Changed /product/ to /san-pham/ */}
      <Link to={`/san-pham/${id}`} className="block">
        <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700 bg-[#f3efe9]">
          <div className="absolute top-6 right-6 z-10 bg-[#1a1111]/95 backdrop-blur-md text-white text-[9px] tracking-[0.2em] px-5 py-2.5 rounded-full shadow-xl">
            {price}
          </div>
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.2, 0, 0, 1) group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1111]/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
        <h3 className="font-serif text-2xl text-[#1a1111] group-hover:text-[#7F170E] transition-colors duration-300 text-center">
          {title}
        </h3>
      </Link>
    </Reveal>
  );
}
