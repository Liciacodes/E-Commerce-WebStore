import React from "react";
import github from "../assets/icons/Github.png";
import instagram from "../assets/icons/Instagram.png";
import Youtube from "../assets/icons/Youtube.png";
import logo from "../assets/icons/Logomark.png";
import mastercard from "../assets/icons/Mastercard.png";
import amex from "../assets/icons/Amex.png";
import visa from "../assets/icons/Visa.png";

export default function Footer({ bgColor }) {
  return (
    <div
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      style={{ backgroundColor: bgColor }}
    >
      <footer className="mt-20 flex flex-col space-y-10 lg:flex-row lg:space-y-0 justify-between w-full py-20">
        <div>
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold font-manropeFont ml-2">
              ECommerce
            </h1>
          </div>
          <div className="mb-6 mt-6">
            <p className="font-interFont font-normal text-[#5C5F6A]">
              DevCut is a YouTube channel for{" "}
              <br className="hidden sm:inline" /> practical project-based
              learning.
            </p>
          </div>
          <div className="flex gap-x-4">
            <img src={github} alt="GitHub" className="w-6 h-6" />
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
            <img src={Youtube} alt="YouTube" className="w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-[#878A92]">
          <div>
            <h3 className="mb-4">SUPPORT</h3>
            <p className="mb-5">FAQ</p>
            <p className="mb-5">Terms of use</p>
            <p className="mb-5">Privacy Policy</p>
          </div>
          <div>
            <h3 className="mb-4">COMPANY</h3>
            <p className="mb-5">About us</p>
            <p className="mb-5">Contact</p>
            <p className="mb-5">Careers</p>
          </div>
          <div>
            <h3 className="mb-4">SHOP</h3>
            <p className="mb-5">My Account</p>
            <p className="mb-5">Checkout</p>
            <p className="mb-5">Cart</p>
          </div>
        </div>

        <div>
          <h3 className="text-[#878A92]">ACCEPTED PAYMENTS</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <img src={mastercard} alt="Mastercard logo" className="w-12 h-8" />
            <img src={amex} alt="Amex logo" className="w-12 h-8" />
            <img src={visa} alt="Visa logo" className="w-12 h-8" />
          </div>
        </div>
      </footer>

      <div className="border border-t"></div>
      <p className="text-center text-[#5C5F6A] mt-10 font-interFont font-normal text-xs sm:text-sm pb-10">
        © 2023 DevCut. All rights reserved.
      </p>
    </div>
  );
}
