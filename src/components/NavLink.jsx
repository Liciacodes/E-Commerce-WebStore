import React from "react";

export default function NavLink({ to, label, hasDropdown, ...props }) {
  return (
    <ul className="relative flex item-center">
      <li
        to={to}
        {...props}
        className="px-4 py-2 text-[#5C5F6A] hover:text-gray-900 flex items-center text-[14px] hover:bg-red-500 cursor-pointer hover:text-whit"
      >
        {label}{" "}
        {hasDropdown && (
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </li>
    </ul>
  );
}
