import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import search from "../../../assets/icons/Search.png";
import arrow from "../../../assets/icons/arrow up-down.png";
import { Link } from "react-router-dom";
import picture1 from "../../../assets/frame1.png";
import picture2 from "../../../assets/frame2.png";
import picture3 from "../../../assets/frame3.png";
import picture4 from "../../../assets/frame4.png";
import picture5 from "../../../assets/feature1.png";
import picture6 from "../../../assets/featured2.png";
import picture7 from "../../../assets/featured3.png";
import picture8 from "../../../assets/featured4.png";

function Products() {
  const products = [
    {
      name: "Mens Black T-Shirts",
      sku: "47514501",
      price: "$75.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      image: picture1,
    },
    {
      name: "Essential Neutrals",
      sku: "47514502",
      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      image: picture2,
    },
    {
      name: "Raw Black T-Shirt Lineup",
      sku: "47514502",
      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt",
      image: picture3,
    },
    {
      name: "Classic Monochrome Tees",
      sku: "47514502",
      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      image: picture4,
    },
    {
      name: "UTRAANET Black",
      sku: "47514502",
      price: "$43.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      image: picture5,
    },
    {
      name: "Elegant Ebony Sweatshirts",
      sku: "47514502",
      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      image: picture6,
    },
    {
      name: "Sleek and Cozy Black",
      sku: "47514502",
      price: "$30.00",
      stock: "In Stock",
      categories: "Hoodie",
      image: picture7,
    },
    {
      name: "MOCKUP Black",
      sku: "47514502",
      price: "$30.00",
      stock: "In Stock",
      categories: "T-shirt",
      image: picture8,
    },
    {
      name: "MOCKUP Black",
      sku: "47514502",
      price: "$30.00",
      stock: "In Stock",
      categories: "T-shirt",
      image: picture8,
    },
    {
      name: "MOCKUP Black",
      sku: "47514502",
      price: "$30.00",
      stock: "In Stock",
      categories: "T-shirt",
      image: picture8,
    },
  ];
  return (
    <div className="bg-white h-full rounded-lg shadow-md p-6">
      <header className="flex items-center justify-between gap-1">
        <h1 className="text-[#0E1422] font-interFont font-medium text-3xl">
          Products
        </h1>
        <div className="flex items-center gap-x-5">
          <Link to={"admin/add-products"}>
            <Button label={"Add Products"} />
          </Link>

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
      <div className="overflow-x-auto mt-6 h-[calc(100vh-200px)]">
        <table className="w-full min-w-[1000px] text-left mt-6">
          <thead className="border-t border-b border-[#E9E9EB] text-[#5C5F6A]">
            <tr className="text-[#5C5F6A]">
              <th className="p-4">
                <img src={arrow} />
              </th>
              <th className="p-1">Name</th>
              <th className="p-1">SKU</th>
              <th className="p-1">Price</th>
              <th className="p-1">Stock</th>
              <th className="p-1">Categories</th>
              <th className="p-1">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#5C5F6A] font-semibold ">
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-300 ease-in-out"
              >
                <td className="p-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-md"
                  />
                </td>
                <td className="p-1 font-semibold">{product.name}</td>
                <td className="p-1">{product.sku}</td>
                <td className="p-1">{product.price}</td>
                <td className="p-1">{product.stock}</td>
                <td className="p-1">{product.categories}</td>
                <td className="p-1">
                  <button className="text-gray-600 hover:text-gray-800">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
