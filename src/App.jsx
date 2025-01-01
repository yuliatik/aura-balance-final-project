import React from "react";
import AboutUs from './AboutUs/AboutUs';
import './App.css'
import Footer from './Footer/Footer';
import Reviews from './Review/Review';
import Slideshow from './Slideshow/Slideshow';
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pricing from "./Navbar/Pricing";
import Contact from "./Navbar/Contact";
import './Navbar/Navbar.css';


function App() {
  return <Router>
    <div>
  <nav>
    <Link to = "/" className='link'>Startseite</Link>
    <Link to="/about" className="link">Unsere Leistungen</Link>
    <Link to="/pricing" className="link">Preise</Link>
    <Link to="/contact" className='link'>Kontakt</Link>
  </nav>

 <Routes>
    <Route path="/" element={<><Slideshow /><AboutUs /><Reviews /></>} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="pricing" element={<Pricing/>}/>
 </Routes>
 <Footer />
 </div> 
</Router>  

       
}


export default App
