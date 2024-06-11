import React from "react";

export default function AccountDetails() {
  return (
    <div className="ml-7">
      <h2 className="text-2xl font-bold mb-6">Account Details</h2>
      <div className="w-12 h-12 rounded-full bg-[#F0F1FF] flex justify-center items-center">
        <p className="text-[#4078FF]">AN </p>
      </div>
      <form action=" " className="  pt-6 pb-8 mb-4 mt-8">
        <div>
          <label htmlFor="" className="block  font-medium mb-1">
            Full name
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border rounded px-[15px] py-[10px] outline-none w-[60%]"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="block  font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="border rounded px-[15px] py-[10px] outline-none w-[60%]"
          />
        </div>
        <button className="bg-[#0E1422] rounded px-6 py-3 mt-10  text-white">
          Save Changes
        </button>
      </form>
    </div>
  );
}
