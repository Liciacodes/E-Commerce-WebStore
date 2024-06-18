import React from "react";
import logo from "../../../assets/icons/AdminLogo.png";
import SideBarNavLinks from "../../../components/SideBarNavLinks";
import { MdOutlineDashboard } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdStarOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";

export default function AdminSidebar() {
  return (
    <div className="fixed flex flex-col bg-white h-screen w-64 p-4">
      <div className="flex justify-center items-center gap-x-2 mt-20 lg:mt-0 mb-10">
        <img src={logo} />
        <h3 className="font-manropeFont font-extrabold text-[18px]">Admin</h3>
      </div>

      <nav className="flex flex-col mt-4">
        <SideBarNavLinks
          to="/"
          icon={<MdOutlineDashboard />}
          text="Dashboard"
        />
        <SideBarNavLinks to="/" icon={<CiShop />} text="Products" />
        <SideBarNavLinks to="/" icon={<FiShoppingCart />} text="Orders" />
        <SideBarNavLinks to="/" icon={<GoPerson />} text="Customers" />
        <SideBarNavLinks to="/" icon={<MdStarOutline />} text="Reviews" />
        <SideBarNavLinks to="/" icon={<IoSettingsOutline />} text="Settings" />
      </nav>
    </div>
  );
}
