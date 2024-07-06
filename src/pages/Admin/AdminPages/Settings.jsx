import React from "react";
import Button from "../../../components/Button";

export default function Settings() {
  return (
    <div className="bg-white h-full rounded-lg shadow-md">
      <h3 className="p-2 text-[#0E1422] font-interFont font-medium text-3xl px-6 py-8">
        Settings Page
      </h3>
      <hr className="bg-[#E9E9EB] border" />
      <form class="px-8 pt-6 pb-8 mb-4 w-1/3 mt-9">
        <div className="mb-2">
          <label
            className="block text-[#474B57] text-sm font-medium "
            for="title"
          >
            Site Name
          </label>
          <input
            className="appearance-none border rounded-md w-full py-2 px-3 text-[#474B57] leading-tight focus:outline-none focus:shadow-outline border-[#E6E7E8]"
            id="title"
            type="text"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-[#474B57] text-sm font-medium "
            for="password"
          >
            Support Email
          </label>
          <input
            className="appearance-none border border-[#E6E7E8] rounded-md w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-[#474B57] text-sm font-medium "
            for="password"
          >
            Monthly Order Goal
          </label>
          <input
            className="appearance-none border border-[#E6E7E8] rounded-md w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
          />
        </div>

        <div className="flex items-center justify-between mt-8">
          <Button label={"Save Changes"} />
        </div>
      </form>
    </div>
  );
}
