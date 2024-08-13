import React from "react";
import Button from "./Button";
import categoryImage from "../assets/Category Image.png";

export default function Browse() {
  return (
    <section className="flex items-center justify-between px-4 md:px-20 lg:px-40 bg-gradient-to-r from-[#F6F6F6] to-blue-[#FFFFFF00] h-[310px]">
      <div>
        <h1 className="font-interFont font-semibold text-[24px] md:text-[32px] mb-4">
          Browse Our Fashion Paradise!
        </h1>
        <p className="font-interFont font-normal text-[14px] mb-10">
          Step into a world of style and explore our diverse collection of
          clothing categories.
        </p>
        <Button
          label={"Start Browsing"}
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
      <div className=" ">
        <img src={categoryImage} alt="category-image" className="" />
      </div>
    </section>
  );
}
