import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HeaderWrapper from "../../components/HeaderWrapper";
import Footer from "../../components/Footer";

export default function ForgotPassword() {
  return (
    <div>
      <Header />
      <NavBar />
      <HeaderWrapper title={"Forgot Password"} color={"#F6F6F6"} />

      <div className="flex justify-center mt-20 ">
        <form className="w-[320px]">
          <p className="text-[#474B57] font-interFont font-normal">
            Please enter the email address associated with your account. We'll
            promptly send you a link to reset your password.
          </p>
          <div className="mb-4 mt-10">
            <label
              htmlFor=""
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="border shadow appearance-none  rounded w-full py-[10px] px-[15px]"
            />
          </div>

          <button className="bg-black mb-8 text-white w-full px-6 py-3 rounded mt-2">
            Send reset link
          </button>
        </form>
      </div>
      <Footer bgColor={"#F6F6F6"} />
    </div>
  );
}
