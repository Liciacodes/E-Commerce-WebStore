import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HeaderWrapper from "../../components/HeaderWrapper";
import Footer from "../../components/Footer";

export default function SignUp() {
  return (
    <div>
      <Header />
      <NavBar />

      <HeaderWrapper title={"Signup"} color={"#F6F6F6"} />

      <div className="flex justify-center mt-10 ">
        <div className="w-[350px]">
          <button
            type="button"
            className="border px-6 py-3 rounded inline-flex items-center justify-center font-interFont font-medium text-[#5C5F6A] w-full"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google icon"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
          <div className="flex items-center mt-8 w-full">
            <hr className="w-48" /> <p className="mx-3">OR</p>{" "}
            <hr className="w-48" /> <p className=""></p>
          </div>

          <form
            action="
       "
          >
            <div className="mb-4">
              <label
                htmlFor=""
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="email"
                className="border shadow appearance-none  rounded w-full py-[10px] px-[15px]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="password"
                className="border shadow appearance-none  rounded w-full py-[10px] px-[15px]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="border shadow appearance-none  rounded w-full py-[10px] px-[15px]"
              />
            </div>
            <p className="mt-4  mb-4 font-interFont font-normal text-[#474B57]">
              By creating an account you agree with our Terms of Service,
              Privacy Policy,
            </p>

            <button className="bg-black mb-8 text-white w-full px-6 py-3 rounded">
              Create Account
            </button>
            <p className="text-center font-interFont font-normal text-[#5C5F6A]">
              Already have an account? Log in
            </p>
          </form>
        </div>
      </div>
      <Footer bgColor={"#F6F6F6"} />
    </div>
  );
}
