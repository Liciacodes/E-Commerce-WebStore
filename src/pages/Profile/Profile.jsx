import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import HeaderWrapper from "../../components/HeaderWrapper";
import AccountNavigation from "./AccountNavigation";

export default function Profile() {
  return (
    <>
      <Header />
      <NavBar />
      <HeaderWrapper color={"#F6F6F6"} title={"My Account"} />
      <AccountNavigation />
      <Footer bgColor={"#E9E9EB"} />
    </>
  );
}
