import React from "react";
import productimage from "../assets/productimage/ProductImage.png";
import producticon1 from "../assets/productimage/Vector.png";
import star from "../assets/icons/Star.png";
import Button from "./Button";

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
            <span className="flex  ">
              <img src={producticon1} alt="review" className="ml-20" />
            </span>
          </h1>
          <div className="flex items-center mt-3  ">
            <div className="bg-[#F6F6F6] rounded-full px-5 py-2 flex items-center">
              <img src={star} alt="startst" />
              <span className="text-[#5C5F6A] text-[14px] font-interFont font-medium">
                4.2 - 54 Reviews
              </span>
            </div>
            <div>
              <span className="rounded-full border border-[#E6E7E8] py-2 px-3 font-interFont font-medium text-[#5C5F6A] ml-4">
                IN STOCK
              </span>
            </div>
          </div>

          <div className="flex items-center mt-6 mb-8">
            <p className="ml-3 font-interFont font-semibold text-[#0E1422] text-xl">
              $ 75.00
            </p>
          </div>

          <div className="font-medium font-interFont w-54">
            <p className="text-[#000000]">AVAILABLE COLORS</p>
            <div className="flex justify-start items-center mt-2">
              <p className="w-8 h-8 rounded-full border-2  border-black bg-[#A3BEF8] mr-3"></p>
              <p className="w-8 h-8 rounded-full border border-black  bg-[#FFD58A]  mr-3"></p>
              <p className="w-8 h-8 rounded-full border border-black  bg-[#83B18B]  mr-3"></p>
            </div>
          </div>

          <div className="mt-8 ">
            <p>SELECT SIZE</p>

            <div className="text-[#5C5F6A] flex mt-2">
              <button className="w-7 h-7 rounded-md border border-[#E6E7E8] ">
                S
              </button>
              <button className="w-7 h-7 rounded-md border border-[#E6E7E8]">
                M
              </button>
              <button className="w-7 h-7 rounded-md border border-[#E6E7E8]">
                X
              </button>
              <button className="w-7 h-7 rounded-md border border-[#E6E7E8]">
                XL
              </button>
              <button className="w-7 h-7 rounded-md border border-[#E6E7E8] ">
                XXL
              </button>
            </div>
          </div>

          <div className="mt-8">
            <p>QUANTITY</p>
            <button>- 1 + </button>
          </div>

          <div className="mt-8">
            <button className="bg-black text-white px-28 py-2 rounded-lg">
              Add To Cart
            </button>
            <p>— FREE SHIPPING ON ORDERS $100+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
