import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HeaderWrapper from "../../components/HeaderWrapper";
import Footer from "../../components/Footer";

export default function ResetPassword() {
  return (
    <div>
      <Header />
      <NavBar />

      <HeaderWrapper title={"Reset Password"} color={"#F6F6F6"} />

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
      <Footer bgColor={"#F6F6F6"} />
    </div>
  );
}
