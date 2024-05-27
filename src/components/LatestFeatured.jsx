import React from "react";
import featured1 from "../assets/feature1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";
import featured4 from "../assets/featured4.png";
import ProductCard from "./ProductCard";

export default function LatestFeatured() {
  return (
    <div className="mt-20 mb-40">
      <div className="">
        <div className="flex items-center justify-center gap-x-4">
          <h3 className=" text-[#878A92] font-medium font-interFont text-[14px] rounded-full border border-gray-500 px-3 py-[1px]">
            Featured
          </h3>
          <h1 className=" text-center font-interFont font-boldtext-[14px] text-[#5C5F6A] ">
            Latest
          </h1>
        </div>

        <div className="px-40 flex justify-between mt-10">
          <ProductCard
            image={featured1}
            title={"Elegant Ebony Sweatshirts"}
            stockLabel={"IN STOCK"}
            price={"$35.00"}
          />
          <ProductCard
            image={featured2}
            title={"Sleek and Cozy Black"}
            stockLabel={"IN STOCK"}
            price={"$57.00"}
          />
          <ProductCard
            image={featured3}
            title={"Raw Black Tees Neutrals"}
            stockLabel={"IN STOCK"}
            price={"$19.00"}
          />
          <ProductCard
            image={featured4}
            title={"MOCKUP Black"}
            stockLabel={"IN STOCK"}
            price={"$30.00"}
          />
        </div>
      </div>
    </div>
  );
}
