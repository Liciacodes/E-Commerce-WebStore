import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  FaShoppingCart,
  FaHeart,
  FaMapMarkerAlt,
  FaKey,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AccountNavigation() {
  return (
    <div className="flex px-40 h-screen">
      <div className="w-1/4 border-r border-gray-300">
        <ul className="space-y-8">
          <li className="flex items-center space-x-3">
            <FaShoppingCart className="text-gray-600" />
            <span className="text-lg text-gray-800">Orders</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaHeart className="text-gray-600" />
            <span className="text-lg text-gray-800">Wishlist</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-gray-600" />
            <span className="text-lg text-gray-800">Address</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaKey className="text-gray-600" />
            <span className="text-lg text-gray-800">Password</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaUser className="text-gray-600" />
            <span className="text-lg text-gray-800">Account Detail</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaSignOutAlt className="text-gray-600" />
            <span className="text-lg text-gray-800">Logout</span>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-6">Orders</h2>
        <div className="space-y-4">
          {/* <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"></div> */}
        </div>
      </div>
    </div>
  );
}
