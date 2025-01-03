import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Reviews from "./components/Review";
import Review from "./components/Review";
import ContactForm from "./components/Contact";
import Contact from "./components/Contact";
import Terms from "./components/Terms"
import Slider from "./components/Slider";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";
import Loader from "./components/Loader";
import Policy from "./components/Policy";


const App = () => {


  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();

    setTimeout(handleComplete, 2000);
  }, [location]);

  return (
    <>
            {loading && <Loader />}

    <main>
   
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />

        <Route path="home" element={<Home/>}/>
      </Routes>
  
    </main>
  </>
  );
};

export default App;
