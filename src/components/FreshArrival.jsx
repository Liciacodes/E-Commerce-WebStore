import React from "react";
import Button from "./Button";
import headerPhoto from "../assets/header-photo.png";
import { Link } from "react-router-dom";

export default function FreshArrival() {
  return (
    <section className="flex items-center justify-between px-40 bg-[#F6F6F6] h-[440px]">
      <div>
        <h1 className="font-interFont text-3xl mb-4">Fresh Arrivals Online</h1>
        <p className="font-interFont font-normal text-[14px] mb-10">
          Discover Our Newest Collection Today.
        </p>
        <Link to={"/product"}>
          <Button
            label={"View Collections"}
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
        </Link>
      </div>
      <div className="relative w-[340px] h-[340px] object-cover ">
        <img src={headerPhoto} alt="" />
      </div>
    </section>
  );
}
