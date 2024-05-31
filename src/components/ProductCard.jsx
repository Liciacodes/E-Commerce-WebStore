import React from "react";

export default function ProductCard({ image, title, stockLabel, price }) {
  return (
    <div className="flex flex-col items-start ">
      <img src={image} alt="product-image" />

      <p className="font-interFont font-bold text-[#0E1422] mt-5 text-[14px]">
        {title}
      </p>

      <div className="flex items-center mt-4">
        <p className="rounded-full border border-[#E6E7E8] py-[1.5px] px-2 font-interFont font-medium text-black">
          {stockLabel}
        </p>
        <p className="ml-3">{price}</p>
      </div>
    </div>
  );
}
