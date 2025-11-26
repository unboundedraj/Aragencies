import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import AboutUs from "../pages/Aboutus/AboutUs.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";
import ContactUs from "../pages/Contactus/ContactUs.tsx";
import Gallery from "../pages/Gallery/Gallery.tsx";
import OurProducts from "../pages/Ourproducts/OurProducts.tsx";
import Navbar from "../components/Navbar";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
