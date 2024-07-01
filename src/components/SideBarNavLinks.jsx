import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBarNavLinks({ to, icon, text }) {
  return (
    <NavLink
      to={to}
      className="flex items-center px-4 py-4 text-[#5C5F6A] font-medium transition-colors duration-200 hover:bg-[#F6F6F6] hover:rounded hover:text-[#0E1422] hover:font-medium"
      // activeClassName="bg-red-500"
    >
      {/* <Icon className="mr-3 text-xl" /> */}
      <span className="mr-3 text-xl">{icon}</span>
      <span className="text-lg">{text}</span>
    </NavLink>
  );
}
