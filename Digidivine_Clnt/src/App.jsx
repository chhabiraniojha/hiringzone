import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import aos styles

import Navebar from "./components/navbar/Navebar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Header from "./components/topHeader/Header";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contactUs/ContactUs";
import About from "./components/about/About";
import ScrollToTopOnRouteChange from "./components/scrool/ScrollToTopOnRouteChange";
import Blogs from "./components/blogs/Blogs";
import Services from "./components/allServices/Service";

function App() {
  const [open, setOpen] = useState(true);
  const [navOpen, SetNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    SetNavOpen(!navOpen);
  };
  useEffect(() => {
    AOS.init({
      once: false, // Trigger animation only once
    });
  }, []);

  return (
    <>
      {/* <Sidebar open={open} navOpen={navOpen} navStatus={isActive} SetNavOpen={SetNavOpen}/> */}
      <Header />
      <Navebar
        open={open}
        navOpen={navOpen}
        handleOpen={handleOpen}
        className="sticky top-0 z-50"
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Home />
            </>
          }
        ></Route>
        {/* <Route
          path="/contact"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <ContactUs />
            </>
          }
        ></Route> */}
        {/* <Route
          path="/about"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <About />
            </>
          }
        ></Route>  */}
        {/* <Route
          path="/blog"
          element={
            <>
              <ScrollToTopOnRouteChange />
              < Blogs />
            </>
          }
        ></Route> */}
        {/* <Route
          path="/services"
          element={
            <>
              <ScrollToTopOnRouteChange />
              <Services/>
            </>
          }
        ></Route> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
