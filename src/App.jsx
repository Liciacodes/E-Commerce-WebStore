import "./App.css";
import Browse from "./components/Browse";
import Features from "./components/Features";
import FreshArrival from "./components/FreshArrival";
import Header from "./components/Header";
import LatestFeatured from "./components/LatestFeatured";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <div>
        <Header />
        <NavBar />
        <FreshArrival />
        <Features />
        <Browse />
        <LatestFeatured />
        <Newsletter />
      </div>
    </>
  );
}

export default App;
