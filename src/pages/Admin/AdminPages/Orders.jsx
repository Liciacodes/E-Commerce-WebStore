import React from "react";
import Input from "../../../components/Input";
import arrow from "../../../assets/icons/arrow up-down.png";
import search from "../../../assets/icons/Search.png";
import picture1 from "../../../assets/frame1.png";
import picture2 from "../../../assets/frame2.png";
import picture3 from "../../../assets/frame3.png";
import picture4 from "../../../assets/frame4.png";
import picture5 from "../../../assets/feature1.png";
import picture6 from "../../../assets/featured2.png";
import picture7 from "../../../assets/featured3.png";
import picture8 from "../../../assets/featured4.png";

function Orders() {
  const orders = [
    {
      order: "Mens Black T-Shirts",
      total: "$75.00",
      status: "In Stock",
      date: "28 Dec, 2022",
      image: picture1,
    },
    {
      order: "Essential Neutrals",
      total: "$22.00",
      status: "In Stock",
      date: "19 Mar, 2023",
      image: picture2,
    },
    {
      order: "Raw Black T-Shirt Lineup",
      date: "20 Mar, 2023",
      total: "$22.00",
      status: "In Stock",
      image: picture3,
    },
    {
      order: "Classic Monochrome Tees",
      date: "7 Feb, 2023",
      total: "$22.00",
      status: "In Stock",
      image: picture4,
    },
    {
      order: "UTRAANET Black",
      total: "$43.00",
      status: "In Stock",
      date: "27 Jan, 2023",
      image: picture5,
    },
    {
      order: "Elegant Ebony Sweatshirts",
      total: "$22.00",
      status: "In Stock",
      date: "4 Jan, 2023",
      image: picture6,
    },
    {
      order: "Sleek and Cozy Black",
      total: "$30.00",
      status: "In Stock",
      date: "28 Dec, 2022",
      image: picture7,
    },
    {
      order: "MOCKUP Black",
      total: "$30.00",
      status: "In Stock",
      date: "20 Dec, 2022",
      image: picture8,
    },
  ];
  return (
    <div className="bg-white h-full rounded-lg shadow-md p-6">
      <header className="flex items-center justify-between gap-1">
        <h1 className="text-[#0E1422] font-interFont font-medium text-3xl">
          Orders
        </h1>
        <div className="flex items-center ">
          <div className="relative flex items-center ">
            <img
              src={search}
              alt="search icon"
              className="absolute w-5 h-5 ml-2 "
            />

            <Input placeholder="Search orders" className="rounded-full" />
          </div>
        </div>
      </header>
      <div className="overflow-x-auto mt-6 h-[calc(100vh-200px)]">
        <table className="w-full min-w-[1000px] text-left mt-6">
          <thead className="border-t border-b border-[#E9E9EB] text-[#5C5F6A]">
            <tr className="text-[#5C5F6A]">
              <th className="p-4">
                <img src={arrow} />
              </th>
              <th className="p-1">Order</th>

              <th className="p-1">Date</th>
              <th className="p-1">Total</th>
              <th className="p-1">Status</th>
              <th className="p-1">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#5C5F6A] font-semibold ">
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-300 ease-in-out"
              >
                <td className="p-1">
                  <img
                    src={order.image}
                    alt={order.order}
                    className="w-12 h-12 rounded-md"
                  />
                </td>
                <td className="p-1 font-semibold">{order.order}</td>
                <td className="p-1 font-semibold">{order.date}</td>
                <td className="p-1">{order.total}</td>
                <td className="p-1">{order.status}</td>
                <td className="p-1">
                  <button className="text-gray-600 hover:text-gray-800">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
