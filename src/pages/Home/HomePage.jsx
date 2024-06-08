import React from "react";
import Browse from "../../components/Browse";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import FreshArrival from "../../components/FreshArrival";
import Header from "../../components/Header";
import LatestFeatured from "../../components/LatestFeatured";
import NavBar from "../../components/NavBar";
import Newsletter from "../../components/Newsletter";

export default function HomePage() {
  return (
    <div>
      <Header />
      <NavBar />
      <FreshArrival />
      <Features />
      <Browse />
      <LatestFeatured />
      <Newsletter />
      <Footer />
    </div>
  );
}
