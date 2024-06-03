import React from "react";
import Add from "../assets/icons/Add.png";
import Minus from "../assets/icons/Minus.png";
import Remove from "../assets/icons/Remove.png";

export default function CartDetails({ image, label, price, color, size }) {
  return (
    <div className="flex items-center justify-between mt-4 mb-16">
      <div className="flex items-center">
        <div className="w-20 h-20 ">
          <img src={image} className="w-full object-cover rounded-md" />
        </div>
        <div className="ml-4">
          <p className="text-black font-bold font-interFont ">{label}</p>
          <div className="flex items-center">
            <p>
              Color:
              <span
                className="inline-block ml-2 mr-2 w-3 h-3 rounded-full border border-green-500"
                style={{ backgroundColor: color }}
              ></span>
              - Size:
              {"    "}
              {size}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center h-[40px]">
        <p className="text-black font-bold font-interFont mr-10">{price} </p>
        <div className="flex  mt-2  border border-gray-400 rounded-md  justify-between ">
          <div className="flex items-center">
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
        <img src={Remove} className="ml-4" />
      </div>
    </div>
  );
}
