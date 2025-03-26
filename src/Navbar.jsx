import React, { useState } from 'react';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar/Navbar.css';
import Contact from "./Navbar/Contact";
import Cart from "./Shop/Cart/Cart";
import Footer from './Footer/Footer';
import MainPage from './pages/MainPage';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shopping';


function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

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
                    <Route path="/" element={<MainPage />} />
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

export default Navbar;
