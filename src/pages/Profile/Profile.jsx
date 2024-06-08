import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  FaShoppingCart,
  FaHeart,
  FaMapMarkerAlt,
  FaKey,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import HeaderWrapper from "../../components/HeaderWrapper";
import AccountNavigation from "./AccountNavigation";

export default function Profile() {
  return (
    <>
      <Header />
      <NavBar />
      <HeaderWrapper color={"#F6F6F6"} title={"My Account"} />
      <AccountNavigation />

      <Footer bgColor={"#E9E9EB"} />
    </>
  );
}

<div className="flex h-screen p-8">
  // Sidebar
  <div className="w-1/4 border-r border-gray-300 p-4">
    <ul className="space-y-6">
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
  {/* Main Content */}
  <div className="w-3/4 p-4">
    <h2 className="text-2xl font-bold mb-6">Orders</h2>
    <div className="space-y-4">
      {/* Order 1 */}
      <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Product"
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <p className="text-lg font-semibold">Raw Black T-Shirt Lineup</p>
            <p className="text-sm text-gray-600">Ordered on: 27 July 2023</p>
            <p className="text-lg font-medium">$70.00</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded-full">
            Processing
          </span>
          <button className="px-4 py-2 text-sm font-medium text-black border border-gray-400 rounded-md">
            View Item
          </button>
        </div>
      </div>
      {/* Order 2 */}
      <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Product"
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <p className="text-lg font-semibold">Monochromatic Wardrobe</p>
            <p className="text-sm text-gray-600">Ordered on: 6 March 2023</p>
            <p className="text-lg font-medium">$27.00</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
            Completed
          </span>
          <button className="px-4 py-2 text-sm font-medium text-black border border-gray-400 rounded-md">
            View Item
          </button>
        </div>
      </div>
    </div>
  </div>
</div>;
