import React from "react";

export default function ShippingAddress() {
  return (
    <div className="ml-7">
      <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block tracking-wide text-[#474B57] text-xs font-medium mb-2"
              for="grid-password"
            >
              Street Address
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border  border-[#E6E7E8]  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="street address"
              type="password"
              placeholder="2436 Naples Avenue"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block tracking-wide text-[#474B57] text-xs font-medium mb-2"
              for="grid-first-name"
            >
              City
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-[#E6E7E8] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Panama City"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block  tracking-wide text-[#474B57] text-xs font-medium mb-2"
              for="grid-last-name"
            >
              State
            </label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="FL"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block tracking-wide text-[#474B57] text-xs font-medium mb-2"
              for="grid-first-name"
            >
              Zip Code
            </label>
            <input
              class="appearance-none block w-full  text-gray-700  border border-[#E6E7E8] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="32405"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block  tracking-wide text-[#474B57] text-xs font-medium mb-2"
              for="grid-last-name"
            >
              Country
            </label>
            <input
              class="appearance-none block w-full  text-gray-700 border border-[#E6E7E8] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="United States"
            />
          </div>
          <button className="bg-[#0E1422] rounded px-6 py-3 mt-10 mx-3 text-white">
            Save Changes{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
