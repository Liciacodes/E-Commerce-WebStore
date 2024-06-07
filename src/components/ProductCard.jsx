import React from "react";

export default function ProductCard({ image, title, stockLabel, price }) {
  return (
    <div className="items-start w-[260px] flex flex-col ">
      <div className="w-full ">
        <img
          src={image}
          alt="product-image"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="font-interFont font-bold text-[rgb(14,20,34)] mt-5 text-[14px] ">
        {title}
      </p>

      <div className="flex items-center mt-4">
        <p className="rounded-full border border-[#E6E7E8] py-[1.5px] px-2 font-interFont font-medium text-black p-4 ">
          {stockLabel}
        </p>
        <p className="ml-3">{price}</p>
      </div>
    </div>
  );
}
