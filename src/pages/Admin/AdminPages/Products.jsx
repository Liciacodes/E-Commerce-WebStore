import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import search from "../../../assets/icons/Search.png";
import arrow from "../../../assets/icons/arrow up-down.png";

function Products() {
  return (
    <div className="bg-white h-full rounded-lg shadow-md p-6">
      <header className="flex items-center justify-between gap-1">
        <h1 className="text-[#0E1422] font-interFont font-medium text-3xl">
          Products
        </h1>
        <div className="flex items-center gap-x-5">
          <Button label={"Add Products"} />
          <div className="relative flex items-center ">
            <img
              src={search}
              alt="search icon"
              className="absolute w-5 h-5 ml-2 "
            />
            <Input placeholder="Search products" className="rounded-full" />
          </div>
        </div>
      </header>
      <table className="w-full text-left mt-6">
        <thead className="border-t border-b border-[#E9E9EB] text-[#5C5F6A]">
          <tr className="text-[#5C5F6A]">
            {/* <th>
              <img src={arrow}></img>
            </th> */}
            <th className="py-3">Name</th>
            <th className="pb-2">SKU</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Stock</th>
            <th className="pb-2">Categories</th>
            <th className="pb-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-[#5C5F6A] font-semibold">
          <tr className="border-t  border-[#F6F6F6]">
            {/* <td>
              <img src={arrow}></img>
            </td> */}
            <td className="pt-6 pb-2 text-[#5C5F6A]">Mens Black T-Shirts</td>
            <td>20 Mar, 2023</td>
            <td>$75.00</td>
            <td>In Stock</td>
            <td>TShirt, Men</td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Essential Neutrals</td>
            <td>19 Mar, 2023</td>
            <td>$22.00</td>
            <td>In Stock</td>
            <td>TShirt, Men</td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Sleek and Cozy Black</td>
            <td>7 Feb, 2023</td>
            <td>$57.00</td>
            <td>In Stock</td>
            <td>TShirt</td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3 ">MOCKUP Black</td>
            <td>29 Jan, 2023</td>
            <td>$30.00</td>
            <td>In Stock</td>
            <td>TShirt, Raw</td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Sleek and Cozy Black</td>
            <td>27 Jan, 2023</td>
            <td>$27.00</td>
            <td>In Stock</td>
            <td>TShirt, Trend</td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Monochromatic Wardrobe</td>
            <td>27 Jan, 2023</td>
            <td>$27.00</td>
            <td>In Stock</td>
            <td>TShirt, Hoodie</td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3"> Essential Neutrals</td>
            <td>27 Jan, 2023</td>
            <td>$27.00</td>
            <td>In Stock</td>
            <td>TShirt, </td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Monochromatic Wardrobe</td>
            <td>27 Jan, 2023</td>
            <td>$27.00</td>
            <td>In Stock</td>
            <td>TShirt, Trend</td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
          <tr className="border-t  border-[#F6F6F6]">
            <td className="py-3">Elegant Ebony Sweatshirts</td>
            <td>27 Jan, 2023</td>
            <td>$27.00</td>
            <td>In Stock</td>
            <td>TShirt </td>
            <td className="text-[#5C5F6A] font-extrabold">...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Products;
