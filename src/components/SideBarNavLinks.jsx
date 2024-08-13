import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function SideBarNavLinks({ to, icon, text }) {
  const location = useLocation();
  const isActiveParent = location.pathname.startsWith(to);

  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-5 text-[#5C5F6A] font-medium ${
          isActive || isActiveParent
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
