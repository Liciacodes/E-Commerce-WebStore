import React from "react";

export default function OrderDetails({
  image,
  title,
  date,
  price,
  orderStatus,
}) {
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
          <p className="text-sm text-gray-600">Ordered on: {date}</p>
          <p className="text-lg font-medium">${price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span
          className={`${
            orderStatus === "Completed"
              ? "text-red-500"
              : orderStatus === "Processing"
              ? "text-green-400"
              : "px-3 py-1 text-sm font-medium text-white  rounded-full underline bg-red-500"
          }`}
        >
          {orderStatus}
        </span>
        <button className="px-4 py-2 text-sm font-medium text-black border border-[#0E1422] rounded-md">
          View Item
        </button>
      </div>
    </div>
  );
}
