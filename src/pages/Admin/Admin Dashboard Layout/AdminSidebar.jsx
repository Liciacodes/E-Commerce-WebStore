import React, { useState } from "react";
import logo from "../../../assets/icons/AdminLogo.png";
import SideBarNavLinks from "../../../components/SideBarNavLinks";
import { MdOutlineDashboard } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdStarOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { FiMenu } from "react-icons/fi"; // Import menu icon for toggle button

export default function AdminSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md "
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static flex flex-col bg-white h-screen w-[260px] transition-transform duration-300 border-r-[#E9E9EB] border ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        } lg:translate-x-0 z-40`}
      >
        <div className="p-4">
          <div className="flex justify-center items-center gap-x-2 mt-8 mb-10">
            <img src={logo} alt="Admin Logo" />
            <h3 className="font-manropeFont font-extrabold text-[18px]">
              Admin
            </h3>
          </div>

          <nav className="flex flex-col mt-20 mb-8">
            <SideBarNavLinks
              to="/admin/dashboard"
              icon={<MdOutlineDashboard size={24} />}
              text="Dashboard"
            />
            <SideBarNavLinks
              to="/admin/products"
              icon={<CiShop size={24} />}
              text="Products"
            />
            <SideBarNavLinks
              to="/admin/orders"
              icon={<FiShoppingCart size={24} />}
              text="Orders"
            />
            <SideBarNavLinks
              to="/admin/customers"
              icon={<GoPerson size={24} />}
              text="Customers"
            />
            <SideBarNavLinks
              to="/admin/reviews"
              icon={<MdStarOutline size={24} />}
              text="Reviews"
            />
            <SideBarNavLinks
              to="/admin/settings"
              icon={<IoSettingsOutline size={24} />}
              text="Settings"
            />
          </nav>
        </div>
        <div className=" ">
          <hr className="mt-4" />
          <SideBarNavLinks
            to="/admin/extras"
            icon={<FiPlus size={24} className="ml-6" />}
            text="Extras"
          />
        </div>
      </div>

      {/* Overlay for when the sidebar is open on small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
