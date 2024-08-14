import React from "react";
import Button from "./Button";

export default function Newsletter() {
  return (
    <section className="hidden lg:flex items-center justify-between px-40  bg-[#F6F6F6] h-[310px]">
      <div>
        <h1 className="font-interFont font-semibold text-[32px] mb-4">
          Join Our Newsletter
        </h1>
        <p className="font-interFont font-normal text-[14px] mb-10 text-[#717171]">
          We love to surprise our subscribers with occasional gifts.
        </p>
      </div>

      <div className="flex ">
        <input
          type="text"
          className=" border border-[#E6E7E8] rounded-md outline-none mr-4  px-4"
          placeholder="Your email Address"
        />
        <Button label={"Subcribe"} />
      </div>
    </section>
  );
}
