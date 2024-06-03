import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import Details from "../components/Details";

const Product = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <ProductDetails />
      <Details />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
