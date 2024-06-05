import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function ResetPassword() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="px-40 py-10 bg-[#F6F6F6] ">
        <div>
          <h3 className="font-interFont font-bold text-[24px]">
            Reset Password
          </h3>
          <p className="font-interFont font-medium text-[14px] text-[#5C5F6A] mt-4">
            Ecommerce {">"}{" "}
            <span className="text-black font-bold">Reset Password</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-20 ">
        <form className="w-[320px]">
          <div className="mb-4 mt-10">
            <label
              htmlFor=""
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              New Password
            </label>
            <input
              type="email"
              className="border shadow appearance-none  rounded w-full py-[10px] px-[15px]"
            />
          </div>
          <div className="mb-4 mt-10">
            <label
              htmlFor=""
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="email"
              className="border shadow appearance-none  rounded w-full py-[10px] px-[15px]"
            />
          </div>

          <button className="bg-black mb-8 text-white w-full px-6 py-3 rounded mt-2">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
