import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
  return (
    <div>
      <Header />
      <NavBar />

      <section className="bg-white border px-40  border-t-[#F6F6F6] h-[600px] mt-5">
        <ProductDetails />
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
