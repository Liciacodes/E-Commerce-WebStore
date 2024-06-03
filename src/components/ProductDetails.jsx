import React from "react";
import productimage from "../assets/productimage/ProductImage.png";
import producticon1 from "../assets/productimage/Vector.png";
import star from "../assets/icons/Star.png";
import WishList from "../assets/icons/Whishlist.png";
import Add from "../assets/icons/Add.png";
import Minus from "../assets/icons/Minus.png";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div className="bg-white border-t-2 px-40  border-[#F6F6F6] h-[600px] mt-5">
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
              <h4 className="ml-3 font-interFont font-semibold text-[#0E1422] text-xl">
                $75.00
              </h4>
            </div>

            <div className="font-medium font-interFont w-54">
              <p className="text-[#000000]">AVAILABLE COLORS</p>
              <div className="flex justify-start items-center mt-2">
                <p className="w-8 h-8 rounded-full border-2  border-black bg-[#A3BEF8] mr-3"></p>
                <p className="w-8 h-8 rounded-full   bg-[#FFD58A]  mr-3"></p>
                <p className="w-8 h-8 rounded-full  bg-[#83B18B]  mr-3"></p>
              </div>
            </div>

            <div className="mt-6 ">
              <p>SELECT SIZE</p>

              <div className="text-[#5C5F6A] flex mt-2">
                <button className="px-4 py-2 mr-2 rounded-md border border-[#E6E7E8] ">
                  S
                </button>
                <button className="px-4 py-2 mr-2 rounded-md border border-[#E6E7E8]">
                  M
                </button>
                <button className="px-4 py-2  mr-2 rounded-md border border-[#E6E7E8]">
                  X
                </button>
                <button className="px-4 py-2  mr-2 rounded-md border border-[#E6E7E8]">
                  XL
                </button>
                <button className="px-4 py-2  mr-2 rounded-md border border-[#E6E7E8] ">
                  XXL
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h3>QUANTITY</h3>
              <div className="flex items-center mt-2  border border-gray-400 rounded-md w-[164px] justify-between">
                <button
                  // onClick={decreaseQuantity}
                  className=" text-black font-bold py-2 px-4 "
                >
                  <img src={Minus} />
                </button>
                <span className="text-lg font-semibold">1</span>
                <button
                  // onClick={increaseQuantity}
                  className=" text-black font-bold py-2 px-4 "
                >
                  <img src={Add} />
                </button>
              </div>
            </div>

            <div className="mt-6 ">
              <div className="flex justify-between">
                <Link to="/cart">
                  <button className="bg-black text-white px-28 py-3 rounded-md">
                    Add To Cart
                  </button>
                </Link>
                <img src={WishList} />
              </div>

              <p className="font-interFont font-medium text-[#5C5F6A] mt-3 text-[14px]">
                — FREE SHIPPING ON ORDERS $100+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
