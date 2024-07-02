import React from "react";
import DoughnutChart from "./DoughnutChart";

export default function BestSelling() {
  return (
    <div className="bg-white rounded-lg shadow-md h-auto col-span-1">
      <div className="p-6">
        <h3 className="text-[16px] text-[rgb(28,29,34)] font-interFont font-semibold  ">
          Best Selling
        </h3>
        <h3 className="text-gray-600 mb-2 uppercase">This Month</h3>
      </div>
      <hr />
      <div className="flex items-center">
        <p className="text-[24px] font-interFont font-bold p-6">$2,400</p>
        <span> - Total Sales</span>
      </div>

      <DoughnutChart />
    </div>
  );
}
