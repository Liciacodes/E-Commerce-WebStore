import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AdminLayout from "./pages/Admin/Admin Dashboard/AdminLayout";

function App() {
  return (
    <>
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
          <Route path="/admin-dashboard" element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
