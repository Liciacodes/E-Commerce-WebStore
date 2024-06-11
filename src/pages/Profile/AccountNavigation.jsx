import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { GrLogout } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { RiKey2Line } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import Orders from "./Orders";
import WishList from "./WishList";
import ShippingAddress from "./ShippingAddress.jsx";
import AccountDetails from "./AccountDetails.jsx";
import ChangePassword from "./ChangePassword.jsx";
import NoOrders from "./NoOrders.jsx";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaMapMarkerAlt,
//   FaKey,
//   FaUser,
//   FaSignOutAlt,
// } from "react-icons/fa";

export default function AccountNavigation() {
  const [activeLink, setActiveLink] = useState("orders");

  const sections = [
    {
      key: "orders",
      label: "Orders",
      icon: <LuShoppingCart className="text-gray-600" size={24} />,
    },
    {
      key: "wishlist",
      label: "Wishlist",
      icon: <FaRegHeart className="text-gray-600" size={24} />,
    },
    {
      key: "address",
      label: "Address",
      icon: <GrDeliver className="text-gray-600" size={24} />,
    },
    {
      key: "password",
      label: "Password",
      icon: <RiKey2Line className="text-gray-600" size={24} />,
    },
    {
      key: "accountDetail",
      label: "Account Detail",
      icon: <HiOutlineUser className="text-gray-600" size={24} />,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <HiOutlineLogout className="text-gray-600" size={24} />,
    },
  ];
  return (
    <div className="flex px-40 h-screen">
      <div className="w-1/4 mt-8">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section.key}
              className={`flex items-center space-x-3 cursor-pointer p-3 rounded-lg ${
                activeLink === section.key
                  ? "bg-gray-200  w-[212px] "
                  : "text-gray-800"
              }`}
              onClick={() => setActiveLink(section.key)}
            >
              {section.icon}
              <span
                className={`${
                  activeLink === section.key
                    ? "text-[#0E1422] font-semibold"
                    : "text-[#5C5F6A]"
                } text-lg`}
              >
                {section.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/4 p-4 border-l  border-gray-300">
        {/* <Orders /> */}
        {/* <WishList /> */}
        {/* <ShippingAddress /> */}
        {/* <AccountDetails /> */}
        {/* <ChangePassword /> */}
        <NoOrders />
      </div>
    </div>
  );
}
