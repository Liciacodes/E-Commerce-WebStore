import React from "react";

export default function ProductCard({ image, title, stockLabel, price }) {
  return (
    <div className="flex flex-col items-start w-[260px] h-full">
      <div className="w-full h-[300px]">
        {" "}
        {/* Adjust the height as needed */}
        <img
          src={image}
          alt="product-image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow mt-5">
        <p className="font-interFont font-bold text-black text-[14px]">
          {title}
        </p>
      </div>

      <div className="flex items-center mt-4 gap-x-2">
        <p className="rounded-full border border-[#E6E7E8] py-[1.5px] px-2 font-interFont font-bold text-[12px] text-black">
          {stockLabel}
        </p>
        <p className="ml-3 text-[14px] font-normal">{price}</p>
      </div>
    </div>
  );
}
