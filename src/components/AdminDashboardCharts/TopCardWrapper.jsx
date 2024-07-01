import React from "react";

export default function TopCardWrappers({ title, description, price, chart }) {
  return (
    <div className="bg-white h-[187px] p-6  border-2 border-[#E9E9EB] rounded-lg ">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[16px] text-[rgb(28,29,34)] font-interFont font-semibold">
            {title}{" "}
          </h3>{" "}
          <p className="uppercase font-interFont font-medium text-[#5C5F6A] text-[12px]">
            {description}
          </p>
        </div>
        <div>
          <h1 className="text-[24px] font-interFont font-bold">{price}</h1>
        </div>
      </div>
      <div>{chart && chart}</div>
    </div>
  );
}
