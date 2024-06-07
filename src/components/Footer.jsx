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
    <div className="px-40 " style={{ backgroundColor: bgColor }}>
      <footer className="mt-20 flex justify-between w-full py-20">
        <div>
          <div>
            <div className="flex items-center ">
              <img src={logo} alt="logo" />
              <div>
                <h1 className="text-[20px] font-extrabold font-manropeFont ml-2">
                  ECommerce
                </h1>
              </div>
            </div>
          </div>
          <div className="mb-6 mt-6">
            <p className="font-interFont font-normal text-[#5C5F6A] width-[272px]">
              DevCut is a YouTube channel for <br /> practical project-based
              learning.
            </p>
          </div>
          <div className="flex gap-x-6">
            <img src={github} />
            <img src={instagram} />
            <img src={Youtube} />
          </div>
        </div>
        <div className="flex justify-between gap-x-40 text-[#878A92]">
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
          <div className="flex justify-between gap-x-4 mt-4">
            <img
              src={mastercard}
              alt="mastercard logo"
              className="text-[#878A92]"
            />
            <img src={amex} alt="amex logo" className="text-[#878A92]" />
            <img src={visa} alt=" visa logo" className="text-[#878A92]" />
          </div>
        </div>
      </footer>

      <div className="border border-t "></div>
      <p className="text-center text-[#5C5F6A] mt-10  font-interFont font-normal text-sm pb-10">
        © 2023 DevCut. All rights reserved.
      </p>
    </div>
  );
}
