import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import featured1 from "../assets/feature1.png";
import featured2 from "../assets/featured2.png";
import Footer from "../components/Footer";

export default function Checkout() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="mb-40">
        <div className="px-40 py-10 bg-[#F6F6F6] ">
          <div>
            <h3 className="font-interFont font-bold text-[24px]">Checkout </h3>
            <p className="font-interFont font-medium text-[14px] text-[#5C5F6A] mt-4">
              Ecommerce {">"}{" "}
              <span className="text-black font-bold">Checkout</span>
            </p>
          </div>
        </div>
        <div className="px-40 flex justify-between mt-10">
          <div className="w-[60%] ">
            <h5 className="font-interFont font-semibold text-[16px]">
              Shipping Address
            </h5>

            <form class="w-full  mt-10">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Street Address
                  </label>
                  <input
                    class="w-full border px-[10px] py-[15px] rounded-md border-[#E6E7E8] appearance-none block mb-3 leading-tight outline-none "
                    type="text"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                    City
                  </label>
                  <input
                    class="w-full border px-[10px] py-[15px] rounded-md border-[#E6E7E8] appearance-none block mb-3 leading-tight outline-none"
                    type="text"
                  />
                  {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                    State
                  </label>
                  <input
                    class="w-full border px-[10px] py-[15px] rounded-md border-[#E6E7E8] appearance-none block mb-3 leading-tight outline-none"
                    type="text"
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Zipcode
                  </label>
                  <input
                    class="w-full border px-[10px] py-[15px] rounded-md border-[#E6E7E8] appearance-none block mb-3 leading-tight outline-none"
                    type="text"
                  />
                  {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Country
                  </label>
                  <input
                    class="w-full border px-[10px] py-[15px] rounded-md border-[#E6E7E8] appearance-none block mb-3 leading-tight outline-none"
                    type="text"
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    class="w-full border px-[10px] py-[15px] rounded-md border-[#E6E7E8] appearance-none block mb-3 leading-tight outline-none"
                    type="text"
                  />
                  {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    class="w-full border px-[10px] py-[15px] rounded-md border-[#E6E7E8] appearance-none block mb-3 leading-tight outline-none"
                    type="text"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="border-l border-[#E9E9EB]"></div>
          <div className="w-[30%] p-4 rounded-md">
            <h5 className="font-interFont font-semibold text-[16px] mt-4 mb-6">
              Your Order
            </h5>

            <div className="flex justify-between items-center mb-10 mt-8 ">
              <div className="flex">
                <img src={featured1} className="w-10 h-10 mr-2 rounded-full" />
                <img src={featured2} className="w-10 h-10 mr-2 rounded-full" />
                <img src={featured2} className="w-10 h-10 mr-2 rounded-full" />
              </div>
              <div>
                <button className="border px-6 py-3 rounded"> Edit Cart</button>
              </div>
            </div>
            <div className="text-[#5C5F6A] flex items-center justify-between mb-5">
              <p>Subtotal </p>

              <p className="text-[#0E1422] text-[14px] font-interFont font-bold">
                $ 90.00
              </p>
            </div>
            <div className="text-[#5C5F6A] flex items-center justify-between mb-5">
              <p>Shipping:</p>
              <p className="text-black font-bold">Free</p>
            </div>
            <div className="text-[#5C5F6A] flex items-center justify-between mb-6">
              <p> Tax:</p>
              <p className="text-black font-bold">$ 3.00</p>
            </div>

            <div className="mt-3 border-t border-[#E9E9EB] mb-10"></div>
            <div className="text-black font-bold flex items-center justify-between mb-5">
              <p>Total: </p>
              <p>$ 100.00</p>
            </div>
            <Link to={"/checkout"}>
              <button className="bg-black text-white px-6 py-3 rounded-lg w-full mb-4 text-interFont font-medium">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
