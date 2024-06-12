import React from "react";

export default function WishListItem({ image, title, date, price }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt="product-details"
          className="w-16 h-16 object-cover rounded"
        />

        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-gray-600">Added on: {date}</p>
          <button className="text-lg  text-black font-medium">
            Remove item
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-[#0E1422] font-bold">${price}</span>
        <button className="px-4 py-2 text-sm font-medium text-black border border-[#0E1422] rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
