import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Dishes from './Dishes'
import Slider from './Slider'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Services from './Services'
import Objective from './Objective'
import Settings from './Setting'


const Homepage = () => {
  const [backgroundColorColor, setbackgroundColorColor] = useState(
    localStorage.getItem("backgroundColor") || "#91bdaa"
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--backgroundColor-color", backgroundColorColor);
    localStorage.setItem("backgroundColorColor", backgroundColorColor);
  }, [backgroundColorColor]);

  return (
    <div>
    <Navbar />
    <Settings setbackgroundColorColor={setbackgroundColorColor} /> 

    <main>
      <div id="home">
        <Home />
      </div>

      <div id="dishes">
        <Dishes />
      </div>

      <div id="">
       
      <Slider/>
      </div>
     <div id="">
        <Objective/>
      </div> 
      <div id="">
        <Services/>
      </div>



      
      <div id="contact">
      <Contact/>
      </div>
    </main>
<Footer/>
 
  </div>
  )
}

export default Homepage