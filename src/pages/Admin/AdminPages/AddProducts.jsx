import React from "react";
import Button from "../../../components/Button";
import UploadImage from "../../../components/UploadImage";

export default function AddProducts() {
  return (
    <div className="bg-white h-full rounded-lg shadow-md">
      <h1 className="text-[#0E1422] font-interFont font-medium text-3xl px-6 py-2">
        Add Product
      </h1>
      <hr className="bg-[#E9E9EB] border" />
      <div className="flex flex-col md:flex-row md:gap-x-12">
        <form class="px-8 pt-6 pb-8 mb-4 w-1/3">
          <div class="mb-2">
            <label
              class="block text-[#474B57] text-sm font-medium "
              for="title"
            >
              Title
            </label>
            <input
              class="appearance-none border rounded-md w-full py-2 px-3 text-[#474B57] leading-tight focus:outline-none focus:shadow-outline border-[#E6E7E8]"
              id="title"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-[#474B57] text-sm font-medium "
              for="password"
            >
              Price
            </label>
            <input
              class="appearance-none border border-[#E6E7E8] rounded-md w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-[#474B57] text-sm font-medium "
              for="category"
            >
              Category
            </label>
            <input
              class="appearance-none border border-[#E6E7E8] rounded-md w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label class="block text-[#474B57] text-sm font-medium" for="slug">
              Slug
            </label>
            <input
              class="appearance-none border border-[#E6E7E8] rounded-md w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="slug"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label class="block text-[#474B57] text-sm font-medium" for="sku">
              SKU
            </label>
            <input
              class="appearance-none border border-[#E6E7E8] rounded-md w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-[#474B57] text-sm font-medium "
              for="description"
            >
              Description
            </label>
            <textarea
              class="appearance-none border border-[#E6E7E8] rounded-md w-full py-4 px-4 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
            />
          </div>
          <div class="flex items-center justify-between">
            <Button label={"Save Product"} />
          </div>
        </form>
        <form class="px-8 pt-6 pb-8 mb-4 w-1/3">
          <div class="mb-2">
            <label
              class="block text-[#474B57] text-sm font-medium "
              for="stock"
            >
              Stock Status
            </label>
            <input
              class="appearance-none border border-[#E6E7E8] rounded-md w-full py-2 px-3 text-[#474B57] leading-tight focus:outline-none focus:shadow-outline"
              id="stock"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-[#474B57] text-sm font-medium"
              for="quantity"
            >
              Available Quantity
            </label>
            <input
              class="rounded-md appearance-none border border-[#E6E7E8]  w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-[#474B57] text-sm font-medium"
              for="quantity"
            >
              Images
            </label>
            <input
              class="appearance-none border rounded-md border-[#E6E7E8] w-full py-2 px-3 text-[#474B57] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              placeholder="Choose product images"
            />
          </div>
          {/* <UploadImage /> */}

          <div className="px-4">
            <h3 className="mb-6 font-bold text-[14px] font-interFont mt-4">
              Color
            </h3>
            <div className="flex mt-2 mb-4 gap-3">
              <p className="w-6 h-6 rounded-full bg-[#A3BEF8]  border p-1 border-black"></p>
              <p className="w-6 h-6 rounded-full bg-[#FFD58A] "></p>
              <p className="w-6 h-6 rounded-full bg-[#83B18B] "></p>
              <p className="w-6 h-6 rounded-full bg-[#4078FF] "></p>
            </div>
          </div>
          <div className="px-4 mt-6">
            <h3 className="mb-6 font-bold text-[14px] font-interFont mt-4">
              Size
            </h3>
            <div className="block mt-2 mb-4 gap-3 ">
              <button className="w-10 mr-2  h-10 rounded border  ">S</button>
              <button className="rounded w-10 mr-2  h-10 border ">M</button>
              <button className=" rounded w-10 mr-2   h-10 border  ">L</button>
              <button className=" rounded w-10 mr-2  h-10 border mb-4 ">
                XL
              </button>
              <button className=" rounded  w-10  h-10 border ">XXL</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
