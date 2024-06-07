import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function HeaderWrapper({ color, title, height }) {
  return (
    <div className={`mb-10 w-full h-[160px] `} style={{ height: height }}>
      <div className="px-40 py-10 " style={{ backgroundColor: color }}>
        <h3 className="font-interFont font-bold text-[24px]">{title} </h3>
        <div className="flex items-center">
          <p className="font-interFont font-medium text-[14px] text-[#5C5F6A] mr-1">
            Ecommerce
          </p>
          <span>
            <GoChevronRight className="ml-2" />
          </span>
          <span className="text-black font-bold ml-2">{title}</span>
        </div>
      </div>
    </div>
  );
}
