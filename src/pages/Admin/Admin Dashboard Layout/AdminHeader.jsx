import React from "react";
import { GoChevronRight } from "react-icons/go";
import logout from "../../../assets/icons/logout.png";

export default function AdminHeader() {
  return (
    <header className="py-2 px-6  items-center flex justify-between w-full">
      <div className="flex items-center">
        <p className="font-interFont font-medium text-[14px] text-black mr-1">
          Admin
        </p>
        <span>
          <GoChevronRight className="ml-2" />
        </span>
        <span className="text-black font-medium ml-2">Dashboard</span>
      </div>
      <div>
        <img src={logout} alt="logout" />
      </div>
    </header>
  );
}
