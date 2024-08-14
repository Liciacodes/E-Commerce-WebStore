import React from "react";
import featured1 from "../assets/feature1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";
import featured4 from "../assets/featured4.png";
import ProductCard from "./ProductCard";

export default function LatestFeatured() {
  return (
    <section className="mt-20 mb-40">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[#878A92] font-medium font-interFont text-[14px] rounded-full border border-gray-500 px-3 py-1">
            Featured
          </span>
          <h2 className="font-interFont font-bold text-[14px] text-[#5C5F6A]">
            Latest
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-12 sm:px-16 md:px-[162px] w-full mt-12">
          <div className="w-full sm:flex sm:justify-center">
            <ProductCard
              image={featured1}
              title="Elegant Ebony Sweatshirts"
              stockLabel="IN STOCK"
              price="$35.00"
            />
          </div>
          <div className="w-full sm:flex sm:justify-center">
            <ProductCard
              image={featured2}
              title="Sleek and Cozy Black"
              stockLabel="IN STOCK"
              price="$57.00"
            />
          </div>
          <div className="w-full sm:flex sm:justify-center">
            <ProductCard
              image={featured3}
              title="Raw Black Tees Neutrals"
              stockLabel="IN STOCK"
              price="$19.00"
            />
          </div>
          <div className="w-full sm:flex sm:justify-center">
            <ProductCard
              image={featured4}
              title="MOCKUP Black"
              stockLabel="IN STOCK"
              price="$30.00"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
