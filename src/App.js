import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componant/Footer.js";
import Topbar from "./componant/Topbar.js";
import Home from "./componant/Home.js";
import Rooms from "./componant/Rooms";
import Places from "./componant/Places";
import Contact from "./componant/Contact";
import Faq from "./componant/Faq";
import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader pt-5 d-flex align-items-center justify-content-center">
      <Spinner animation="border" variant="primary" size="xl" />
    </div>
  );
};


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Topbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/places" element={<Places />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/FAQ" element={<Faq />} />
            </Routes>
          </main>
          <Footer />
        </Router>)}
      <ToastContainer />
    </>
  );
}

export default App;
