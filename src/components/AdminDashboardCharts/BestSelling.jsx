import React from "react";
import DoughnutChart from "./DoughnutChart";
import dash from "../../assets/icons/dash.png";

export default function BestSelling() {
  return (
    <div className="bg-white rounded-lg shadow-sm border-2 lg:h-auto h-full col-span-1">
      <div className="p-4">
        <h3 className="text-[16px] text-[rgb(28,29,34)] font-interFont font-semibold  ">
          Best Selling
        </h3>

        <h3 className="text-gray-600  uppercase">This Month</h3>
      </div>
      <hr />
      <div className="flex items-center px-6 py-2 gap-x-2">
        <p className="text-[24px] font-interFont font-bold">$2,400</p>
        <img src={dash} alt="dash" srcset="" />
        <span> Total Sales</span>
      </div>
      <div className="px-6 mt-1 text-[#5C5F6A]">
        <div className=" flex items-center border rounded-full px-4 py-1 border-[#E6E7E8] mb-2 gap-2 ">
          <span className="text-[12px]">Classic Monochrome Tees</span>
          <img src={dash} alt="dash" srcset="" />
          <span className="text-[#0E1422] font-medium">$940 Sales</span>
        </div>
        <div className=" flex items-center border rounded-full px-4 py-1 border-[#E6E7E8] mb-2 gap-2">
          <span className="text-[12px]">Monochromatic Wardrobe </span>
          <img src={dash} alt="dash" srcset="" />
          <span className="text-[#0E1422] font-medium">$790 Sales</span>
        </div>
        <div className="flex items-center border rounded-full px-4 py-1 border-[#E6E7E8] mb-2 gap-2">
          <span className="text-[12px]">Essential Neutrals</span>
          <img src={dash} alt="dash" srcset="" />
          <span className="text-[#0E1422] font-medium">$740 Sales</span>
        </div>
      </div>

      <DoughnutChart />
    </div>
  );
}
