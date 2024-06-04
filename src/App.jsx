import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SuccessfulOrder from "./pages/SuccessfulOrder";
import FailedOrder from "./pages/FailedOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success-order" element={<SuccessfulOrder />} />
          <Route path="/failed-order" element={<FailedOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
