import React from "react";
import star from "../assets/icons/Star.png";
import dot from "../assets/icons/Vector.png";
import ProductCard from "./ProductCard";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";

export default function Details() {
  return (
    <div className=" px-40 mt-20 mb-40 ">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <div className="flex items-center bg-[#F6F6F6] rounded-md px-10 py-3 mb-4">
            <img src={dot} className="font-bold" />
            <h2 className=" ml-2">Details</h2>
          </div>

          <div className="inline-flex px-10 py-3">
            <img src={star} />
            <span className="ml-3">Reviews</span>
          </div>
        </div>

        <div className="w-[70%]">
          <h1 className="mb-8 text-black font-bold">Detail</h1>
          <div className="text-[#5C5F6A] text-[16px] w-[755px]">
            <p>
              Elevate your everyday style with our Men's Black T-Shirts, the
              ultimate wardrobe essential for modern men. Crafted with
              meticulous attention to detail and designed for comfort, these
              versatile black tees are a must-have addition to your collection.
              The classic black color never goes out of style. Whether you're
              dressing up for a special occasion or keeping it casual, these
              black t-shirts are the perfect choice, effortlessly complementing
              any outfit.
            </p>

            <ul className="list-disc mt-8">
              <li>Premium Quality</li>
              <li> Versatile Wardrobe Staple</li>
              <li> Available in Various Sizes </li>
              <li> Tailored Fit</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-black text-[24px] font-interFont font-bold">
          You might also like
        </h1>
        <p className="text-[#878A92] font-medium font-interFont mb-10">
          SIMILAR PRODUCTS
        </p>
      </div>

      <div className="flex justify-between">
        <ProductCard
          image={frame1}
          title={"Classic Monochrome Tees"}
          stockLabel={"IN STOCK"}
          price={"$35.00"}
        />
        <ProductCard
          image={frame2}
          title={"Classic Monochrome Tees"}
          stockLabel={"IN STOCK"}
          price={"$35.00"}
        />
        <ProductCard
          image={frame3}
          title={"Classic Monochrome Tees"}
          stockLabel={"IN STOCK"}
          price={"$35.00"}
        />
        <ProductCard
          image={frame4}
          title={"Classic Monochrome Tees"}
          stockLabel={"IN STOCK"}
          price={"$35.00"}
        />
      </div>
    </div>
  );
}
