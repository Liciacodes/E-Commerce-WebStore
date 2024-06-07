import React from "react";
import chevronDown from "../assets/icons/Chevron Down.png";

export default function NavLink({ to, label, hasDropdown, ...props }) {
  return (
    <ul className="relative flex item-center">
      <li
        to={to}
        {...props}
        className="px-4 py-2 text-[#5C5F6A] hover:text-gray-900 flex items-center text-[14px] cursor-pointer"
      >
        {label}
        {hasDropdown && <img src={chevronDown} className="w-5 h-5 ml-1 mt-1" />}
      </li>
    </ul>
  );
}
