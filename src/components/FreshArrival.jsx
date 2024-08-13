import React from "react";
import Button from "./Button";
import headerPhoto from "../assets/header-photo.png";
import { Link } from "react-router-dom";

export default function FreshArrival() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-auto bg-[#F6F6F6] md:h-[440px] px-10 md:px-[162px]">
      <div className="flex flex-col justify-center">
        <h1 className="font-interFont text-[32px] mb-3 font-semibold">
          Fresh Arrivals Online
        </h1>
        <p className="font-interFont font-normal text-[14px] mb-12">
          Discover Our Newest Collection Today.
        </p>
        <Link to="/product">
          <Button
            label="View Collections"
            icon={
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z"
                  fill="white"
                />
              </svg>
            }
          />
        </Link>
      </div>
      <div className="relative max-w-[340px] max-h-[340px] ">
        <img
          src={headerPhoto}
          alt="Fresh arrivals"
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
}
