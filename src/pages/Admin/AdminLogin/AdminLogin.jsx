import React from "react";
import logo from "../../../assets/icons/AdminLogo.png";

export default function AdminLogin() {
  return (
    <div className="lg:bg-[#E9E9EB] md:bg-[#E9E9EB] md:w-screen md:h-screen   lg:w-screen lg:h-screen flex items-center justify-center">
      <div className="bg-white md:w-2/3 md:h-[480px] lg:w-[384px] w-full h-full lg:h-[453px] rounded-lg p-8">
        <div className="flex justify-center items-center gap-x-2 mt-12 lg:mt-0">
          <img src={logo} />
          <h3 className="font-manropeFont font-extrabold text-[18px]">Admin</h3>
        </div>
        <form className="mt-20">
          <div className="mb-8 lg:mb-4">
            <label
              htmlFor=""
              className="block text-[#474B57] text-interFont text-[14px] font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div className="mb-8 lg:mb-4">
            <label
              htmlFor=""
              className="block text-[#474B57] text-interFont text-[14px] font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <button className="bg-[#0E1422] text-white py-3 px-4 w-full mt-8 rounded font-interFont font-medium text-[14px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
