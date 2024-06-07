import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import failed from "../assets/icons/failed-transaction.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
import HeaderWrapper from "../components/HeaderWrapper";

export default function FailedOrder() {
  return (
    <div>
      <Header />
      <NavBar />
      <HeaderWrapper title={"Failed Order"} color={"#FBD9D0"} />

      <div className="flex flex-col items-center justify-center mt-[70px] mb-[100px] ">
        <img src={failed} alt="success-order" />
        <h3 className="font-bold text-[24px]">Oops! There was an issue</h3>
        <p className="text-[16px] text-center w-[360px] mb-6">
          Oops! There was a problem processing your order. Please review the
          details and try again.
        </p>
        <Button
          label={"Reorder"}
          icon={
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>
      <Footer />
    </div>
  );
}
