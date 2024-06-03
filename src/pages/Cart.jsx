import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CartDetails from "../components/CartDetails";
import featured1 from "../assets/feature1.png";
import featured2 from "../assets/featured2.png";

export default function Cart() {
  return (
    <div className="mb-80">
      <Header />
      <NavBar />
      <div className="px-40 py-10 bg-[#F6F6F6]">
        <div>
          <h3 className="font-interFont font-bold text-[24px]">Cart </h3>
          <p className="font-interFont font-medium text-[14px] text-[#5C5F6A] mt-4">
            Ecommerce {">"} <span className="text-black">Cart</span>
          </p>
        </div>
      </div>

      <div className="px-40 flex justify-between mt-10">
        <div className="w-[60%] ">
          <h5 className="font-interFont font-semibold text-[16px]">
            Your Cart
          </h5>
          <div className="mt-3 border-t border-[#E9E9EB]"></div>

          <CartDetails
            label={"Raw Black T-Shirt Lineup"}
            price={"$75.00"}
            size={"M"}
            color="#98BE9E"
            image={featured1}
          />
          <CartDetails
            label={"Essential Neutrals"}
            price={"$22.00"}
            size={"M"}
            color="#A8B2FF"
            image={featured2}
          />
        </div>
        <div className="w-[30%] border border-[#E9E9EB] p-4 rounded-md">
          <h5 className="font-interFont font-semibold text-[16px] mt-4 mb-6">
            Order Summary
          </h5>
          <div className="text-[#5C5F6A] flex items-center justify-between mb-4">
            <p>Subtotal </p>

            <p className="text-[#0E1422] text-[14px] font-interFont font-bold">
              $ 90.00
            </p>
          </div>
          <div className="text-[#5C5F6A] flex items-center justify-between mb-4">
            <p>Shipping:</p>
            <p className="text-black font-bold">Free</p>
          </div>
          <div className="text-[#5C5F6A] flex items-center justify-between mb-4">
            <p> Tax:</p>
            <p className="text-black font-bold">$ 3.00</p>
          </div>

          <div className="mt-3 border-t border-[#E9E9EB] mb-4"></div>
          <div className="text-black font-bold flex items-center justify-between mb-6">
            <p>Total: </p>
            <p>$ 100.00</p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-lg w-full mb-6 text-interFont font-medium">
            Checkout
          </button>
          <Link>
            <p className="text-center underline text-interFont font-medium">
              Continue Shopping
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
