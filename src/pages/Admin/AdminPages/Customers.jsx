import React from "react";
import Input from "../../../components/Input";
import arrow from "../../../assets/icons/arrow up-down.png";
import search from "../../../assets/icons/Search.png";

export default function Customers() {
  const customers = [
    {
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      shippingAddress: "8642 Yule Street, Arvada CO 80007",
    },
    {
      name: "Wade Warren",
      email: "wade.warren@gmail.com",
      shippingAddress: "5331 Rexford Court, Montgomery AL 36116",
    },
    {
      name: "Brooklyn Simmons",
      email: "brooklyn.simmons@gmail.com",
      shippingAddress: "2325 Eastridge Circle, Moore OK 73160",
    },
    {
      name: "Robert Fox",
      email: "robert.fox@gmail.com",
      shippingAddress: "2436 Naples Avenue, Panama City FL 32405",
    },
    {
      name: "Dianne Russell",
      email: "dianne.russell@gmail.com",
      shippingAddress: "6095 Terry Lane, Golden CO 80403",
    },
    {
      name: "Ralph Edwards",
      email: "ralph.edwards@gmail.com",
      shippingAddress: "4001 Anderson Road, Nashville TN 37217",
    },
    {
      name: "Theresa Webb",
      email: "theresa.webb@gmail.com",
      shippingAddress: "19141 Pine Ridge Circle, Anchorage AK 99516",
    },
    {
      name: "Arlene McCoy",
      email: "arlene.mccoy@gmail.com",
      shippingAddress: "2613 Cottonwood Street, Anchorage AK 99508",
    },
    {
      name: "Arlene McCoy",
      email: "arlene.mccoy@gmail.com",
      shippingAddress: "2613 Cottonwood Street, Anchorage AK 99508",
    },
    {
      name: "Arlene McCoy",
      email: "arlene.mccoy@gmail.com",
      shippingAddress: "2613 Cottonwood Street, Anchorage AK 99508",
    },
  ];
  return (
    <div className="bg-white h-full rounded-lg shadow-md p-6">
      <header className="flex items-center justify-between gap-1">
        <h1 className="text-[#0E1422] font-interFont font-medium text-3xl">
          Customers
        </h1>
        <div className="flex items-center ">
          <div className="relative flex items-center ">
            <img
              src={search}
              alt="search icon"
              className="absolute w-5 h-5 ml-2 "
            />

            <Input placeholder="Search customers" className="rounded-full" />
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
              <th className="p-1">Name</th>
              <th className="p-1">Email</th>
              <th className="p-1">Shipping Address</th>
              <th className="p-1">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#5C5F6A] font-semibold ">
            {customers.map((customer, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-300 ease-in-out"
              >
                <td className="">
                  <div className="flex justify-center items-center w-12 h-12 rounded gap-2">
                    <p className="bg-[#F6F6F6] text-[#4078FF] p-2">AH</p>
                  </div>
                </td>
                <td className=" font-semibold">{customer.name}</td>
                <td className="font-semibold">{customer.email}</td>
                <td className="">{customer.shippingAddress}</td>

                <td className="">
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
