import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HeaderWrapper from "../components/HeaderWrapper";

export default function LoginPage() {
  //   function onSignIn(googleUser) {
  //     var profile = googleUser.getBasicProfile();
  //     console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //     console.log("Name: " + profile.getName());
  //     console.log("Image URL: " + profile.getImageUrl());
  //     console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  //   }
  return (
    <div>
      <Header />
      <NavBar />
      <HeaderWrapper title={"Login"} color={"#F6F6F6"} />

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
                Email
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
                Password
              </label>
              <input
                type="password"
                className="border shadow appearance-none  rounded w-full py-[10px] px-[15px]"
              />
            </div>
            <p className="mt-4 text-right mb-4 font-interFont font-normal text-[#474B57]">
              Forgot Password?
            </p>

            <button className="bg-black mb-8 text-white w-full px-6 py-3 rounded">
              Login
            </button>
            <p className="text-center font-interFont font-normal text-[#5C5F6A]">
              Don't have an account? Sign up
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
