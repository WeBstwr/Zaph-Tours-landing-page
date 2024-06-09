import "./assets/globals.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import TripTypes from "./pages/TripTypes/TripTypes";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/trip-types" element={<TripTypes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
