import React from "react";

export default function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-2 lg:h-[475px]">
      <h3 className="text-gray-600 mb-3">Recent Orders</h3>
      <table className="w-full text-left">
        <thead className="border-t border-b border-[#E9E9EB] ">
          <tr className="mb-4 py-4 ">
            <th className="pb-2">Item</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Total</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody className="p-4">
          <tr>
            <td>Mens Black T-Shirts</td>
            <td>20 Mar, 2023</td>
            <td>$75.00</td>
            <td>Processing</td>
          </tr>
          <tr>
            <td>Essential Neutrals</td>
            <td>19 Mar, 2023</td>
            <td>$22.00</td>
            <td>Processing</td>
          </tr>
          <tr>
            <td>Sleek and Cozy Black</td>
            <td>7 Feb, 2023</td>
            <td>$57.00</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>MOCKUP Black</td>
            <td>29 Jan, 2023</td>
            <td>$30.00</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Monochromatic Wardrobe</td>
            <td>27 Jan, 2023</td>
            <td>$27.00</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
