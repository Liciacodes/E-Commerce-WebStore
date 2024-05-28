import React from "react";
import productimage from "../assets/productimage/ProductImage.png";
import producticon1 from "../assets/productimage/Vector.png";

export default function ProductDetails() {
  return (
    <div className="mt-5 ">
      <h3>
        ECommerce {">"}{" "}
        <span className="font-interFont font-medium text-[14px] text-[#0E1422]">
          Black man t-shirt
        </span>
      </h3>

      <div className=" flex justify-between w-[1092px] h-[800px]">
        <div className="mt-4 h-[400px] w-[600px] ">
          <img
            src={productimage}
            alt="product-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-[24px] font-bold text-[#0E1422] flex gap-x-2 items-center">
            Raw Black T-Shirt Lineup
            <span>
              <img src={producticon1} alt="" />
            </span>
          </h1>
          <span>4.2</span>

          <div className="flex items-center mt-4">
            <p className="rounded-full border border-[#E6E7E8] py-[1.5px] px-1 font-interFont font-medium text-black">
              IN STOCK
            </p>
            <p className="ml-3">$ 20.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
