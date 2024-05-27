import React from "react";
import Input from "./Input";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <div className="py-4 px-40 flex items-center justify-between gap-x-2">
      <div className="flex items-center">
        <svg
          className="w-10 h-10 text-gray-800 bg-black px-[7px] py-[6px] rounded-full"
          width="16"
          height="27"
          viewBox="0 0 16 27"
          fill="fill"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4769 4.84854L6.20402 1.05509C5.61195 0.692919 4.93884 0.501499 4.25319 0.500305C2.20945 0.500305 0.334752 2.21225 0.334752 4.60502V18.8073L12.4769 11.4669C14.9083 9.99466 14.9083 6.31996 12.4769 4.84854ZM3.84837 11.948V4.36793L10.1163 8.15667L3.84837 11.948Z"
            fill="white"
          />
          <path
            d="M15.8489 26.4844C15.8489 26.5273 3.99081 26.466 3.99081 26.466L2.94336 26.3425C1.24672 26.144 -0.0557464 24.6233 0.00196809 22.8346C0.00196809 22.7917 0.00565199 22.7519 0.00810792 22.7103C0.0547076 21.9365 0.326076 21.1961 0.78582 20.5885C0.972526 20.3461 1.20091 20.1425 1.45916 19.9882L10.4782 14.5725C12.3414 13.4535 13.8931 13.062 14.6999 11.0341C14.9974 10.2757 15.126 9.45617 15.0757 8.6379L15.0446 8.08655L15.9651 13.4204C16.083 14.3264 15.9013 15.2537 15.4211 16.0169C15.1326 16.4785 14.7475 16.8653 14.2951 17.1479L3.82954 22.3943C3.81908 22.4006 3.80897 22.4074 3.79925 22.4149C3.51273 22.6293 3.68955 23.1069 4.04034 23.0867L12.7515 23.1403C14.4433 23.0417 15.8526 24.7112 15.8489 26.4844Z"
            fill="white"
          />
        </svg>

        <h1 className="text-[20px] font-extrabold font-manropeFont ml-2">
          ECommerce
        </h1>
      </div>
      <div>
        <ul className="flex items-center ">
          <NavLink to={"/"} label={"Home"} />
          <NavLink to={"/"} label={"Categories"} hasDropdown />
          <NavLink to={"/"} label={"About"} />
          <NavLink to={"/"} label={"Contact"} />
        </ul>
      </div>

      <Input placeholder="Search products" />
    </div>
  );
}
