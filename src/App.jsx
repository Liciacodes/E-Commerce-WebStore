import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout Page/Checkout";
import SuccessfulOrder from "./pages/After Payment/SuccessfulOrder";
import FailedOrder from "./pages/After Payment/FailedOrder";
import LoginPage from "./pages/User Authentication/LoginPage";
import SignUp from "./pages/User Authentication/SignupPage";
import ForgotPassword from "./pages/User Authentication/ForgotPassword";
import ResetPassword from "./pages/User Authentication/ResetPassword";
import Listing from "./pages/Listing/Listing";
import Profile from "./pages/Profile/Profile";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import AdminLayout from "./pages/Admin/Admin Dashboard Layout/AdminLayout";
import Dashboard from "./pages/Admin/AdminPages/Dashboard";
import "@mantine/charts/styles.css";
import Products from "./pages/Admin/AdminPages/Products";
import Orders from "./pages/Admin/AdminPages/Orders";
import Customers from "./pages/Admin/AdminPages/Customers";
import Review from "./pages/Admin/AdminPages/Reviews";
import Settings from "./pages/Admin/AdminPages/Settings";
import AddProducts from "./pages/Admin/AdminPages/AddProducts";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success-order" element={<SuccessfulOrder />} />
          <Route path="/failed-order" element={<FailedOrder />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/my-account" element={<Profile />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="add-products" element={<AddProducts />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="reviews" element={<Review />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
