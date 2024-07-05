import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBarNavLinks({ to, icon, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` flex items-center px-4 py-4 text-[#5C5F6A] font-medium ${
          isActive
            ? "bg-[#F6F6F6] rounded-lg font-medium text-[#0E1422]"
            : "hover:bg-gray-200 rounded-lg "
        }`
      }
    >
      <span className="mr-3 text-xl">{icon}</span>
      <span className="text-lg">{text}</span>
    </NavLink>
  );
}
