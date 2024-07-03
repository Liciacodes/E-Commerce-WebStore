import React from "react";

export default function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm  border-2 col-span-2 lg:h-auto h-full">
      <div className="flex items-center gap-2">
        <h3 className="text-[16px] text-[rgb(28,29,34)] font-interFont font-semibold py-4 ">
          Recent Orders
        </h3>
        <button className="rounded-full bg-[#F6F6F6]  text-[#5C5F6A] px-4 py-1 font-interFont font-medium text-[14px]">
          View All
        </button>
      </div>

      <table className="w-full text-left">
        <thead className="border-t border-b border-[#E9E9EB] text-[#5C5F6A]">
          <tr className="text-[#5C5F6A]">
            <th className="py-3">Item</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Total</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-[#5C5F6A]">
          <tr className="border-t  border-[#F6F6F6]">
            <td className="pt-6 pb-2 ">Mens Black T-Shirts</td>
            <td>20 Mar, 2023</td>
            <td>$75.00</td>
            <td>Processing</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Essential Neutrals</td>
            <td>19 Mar, 2023</td>
            <td>$22.00</td>
            <td>Processing</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Sleek and Cozy Black</td>
            <td>7 Feb, 2023</td>
            <td>$57.00</td>
            <td>Completed</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3 ">MOCKUP Black</td>
            <td>29 Jan, 2023</td>
            <td>$30.00</td>
            <td>Completed</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Monochromatic Wardrobe</td>
            <td>27 Jan, 2023</td>
            <td>$27.00</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
