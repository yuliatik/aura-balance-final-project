import React, { useState, useEffect } from "react";
import './App.css';
import LoaderPage from './Loader/LoaderPage';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Slideshow from './Slideshow/Slideshow';
import Reviews from './Review/Review';
import Footer from './Footer/Footer';
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Shop from "./Navbar/Shopping";
import Cart from "./Shop/Cart/Cart";
import './Navbar/Navbar.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);  
  const [menuOpen, setMenuOpen] = useState(false);  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);  
    }, 3000);  
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);  
  };

  if (isLoading) {
    return <LoaderPage />;  
  }

  return (
    <Router>
      <div>
        <nav>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <div className="left-links">
              <Link to="/" className="link">Startseite</Link>
              <Link to="/about" className="link">Unsere Leistungen</Link>
            </div>

            <div className="heading">
              <h2>Aura-Balance</h2>
            </div>

            <div className="right-links">
              <Link to="/contact" className="link">Kontakt</Link>
              <Link to="/shop" className="link">Shop</Link>
              <Link to="/cart" className="link">Warenkorb</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<><Slideshow /><AboutUs /><Reviews /></>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
