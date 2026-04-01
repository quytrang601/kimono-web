import React from "react";
import Reveal from "../common/Reveal";
import ProductCard from "./ProductCard";

export default function ProductSection({ title, items, id }) {
  return (
    <section id={id} className="mb-48 scroll-mt-20">
      <Reveal className="flex flex-col items-center mb-24 space-y-6">
        <span className="text-[10px] text-[#7F170E] tracking-[0.6em] uppercase font-bold">
          Bộ Sưu Tập
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1111] flex items-center gap-8">
          <span className="h-[1px] w-12 bg-[#7F170E]/30" />
          {title}
          <span className="h-[1px] w-12 bg-[#7F170E]/30" />
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {items.map((pkg, idx) => (
          <ProductCard key={pkg.id} {...pkg} index={idx} />
        ))}
      </div>
    </section>
  );
}
