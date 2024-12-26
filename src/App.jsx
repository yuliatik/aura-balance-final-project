import React from "react";
import AboutUs from './AboutUs/AboutUs';
import './App.css'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Reviews from './Review/Review';
import Slideshow from './Slideshow/Slideshow';


function App() {
  

  return (    
      <div className='App'>
        <Navbar />
        <Slideshow />
        <AboutUs />
        <Reviews />
        <Footer />  
      </div>
      
    
  )
}

export default App
