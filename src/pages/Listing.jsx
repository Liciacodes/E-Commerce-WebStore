import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Close from "../assets/icons/X.png";
import dropdown from "../assets/icons/DropdownIcon.png";
import ProductCard from "../components/ProductCard";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const categoryList = ["Trousers", " Shoes", "Handbags", " Hats", " Thermos"];

function valuetext(value) {
  return `$${value}`;
}

const minDistance = 10;

export default function Listing() {
  const [checkedItems, setCheckedItems] = useState({});
  const [value, setValue] = React.useState([20, 50]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="px-40 py-5 bg-[#F6F6F6] h-[64px]">
        <p className="font-interFont font-medium text-[14px] text-[#5C5F6A]">
          Ecommerce {">"} <span className="text-black font-bold">Search</span>
        </p>
      </div>

      <div className="flex mt-10 px-40 mb-10">
        <div className="border rounded w-1/5 h-[828px]">
          <div className="px-4">
            <h3 className="mb-6 font-bold text-[14px] font-interFont mt-4">
              Categories
            </h3>
            {categoryList.map((category) => (
              <div key={category}>
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    name={category}
                    checked={checkedItems[category] || false}
                    onChange={handleChange}
                    className="mr-2 w-[18px] h-[18px]  border-red-600"
                  />
                  <label className="  text-[#474B57] font-interFont text-sm leading-6">
                    {category}
                  </label>
                </div>
                <hr className="my-4 border-[#E9E9EB] w-full" />
              </div>
            ))}
          </div>
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
            <div className="block mt-2 mb-4 gap-3 w-[200px]">
              <button className="w-10 mr-2  h-10 rounded border  ">S</button>
              <button className="rounded w-10 mr-2  h-10 border ">M</button>
              <button className=" rounded w-10 mr-2   h-10 border  ">L</button>
              <button className=" rounded w-10 mr-2  h-10 border mb-4 ">
                XL
              </button>
              <button className=" rounded  w-10  h-10 border ">XXL</button>
            </div>
          </div>
          <div className="px-4 mt-8">
            <h3 className="mb-6 font-bold text-[14px] font-interFont mt-4">
              Price
            </h3>
            <div className="block mt-2 mb-4 gap-3 w-[200px] h-[16px]">
              <Box>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  color="black"
                />
              </Box>
            </div>
          </div>
        </div>
        <div className="mx-10 w-4/5  px-4 ">
          <h3 className="font-bold">Applied Filters:</h3>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex  items-center px-4 py-[2px] rounded-full border w-[111px] h-[36px]">
              <p className="">Perfume</p>
              <img src={Close} />
            </div>
            <div className="flex items-center px-4 py-[2px] rounded-full border w-[111px] h-[36px]">
              <p className="">Size: M</p>
              <img src={Close} />
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <p className="font-interFont font-medium text-[#5C5F6A]">
              Showing 1-9 of 36 results.
            </p>
            <p className="flex items-center gap-1 text-[#5C5F6A] font-interFont font-medium">
              SORT BY <img src={dropdown} className="ml-2" />
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 mt-8 gap-16">
            <ProductCard
              image={frame1}
              title={"Classic Monochrome Tees"}
              stockLabel={"IN STOCK"}
              price={"$27.00"}
            />

            <ProductCard
              image={frame2}
              title={"Monochromatic Wardrobe"}
              stockLabel={"IN STOCK"}
              price={"$35.00"}
            />

            <ProductCard
              image={frame3}
              title={"Essential Neutrals"}
              stockLabel={"IN STOCK"}
              price={"$22.00"}
            />

            <ProductCard
              image={frame4}
              title={"UTRAANET Black"}
              stockLabel={"IN STOCK"}
              price={"$43.00"}
            />

            <ProductCard
              image={frame1}
              title={"Classic Monochrome Tees"}
              stockLabel={"IN STOCK"}
              price={"$27.00"}
            />

            <ProductCard
              image={frame2}
              title={"Monochromatic Wardrobe"}
              stockLabel={"IN STOCK"}
              price={"$35.00"}
            />

            <ProductCard
              image={frame3}
              title={"Essential Neutrals"}
              stockLabel={"IN STOCK"}
              price={"$22.00"}
            />

            <ProductCard
              image={frame4}
              title={"UTRAANET Black"}
              stockLabel={"IN STOCK"}
              price={"$43.00"}
            />

            <ProductCard
              image={frame4}
              title={"UTRAANET Black"}
              stockLabel={"IN STOCK"}
              price={"$43.00"}
            />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
