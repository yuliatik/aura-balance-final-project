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
import Shop from "./Navbar/Shopping";
import './Navbar/Navbar.css';
import CartPage from "./Navbar/CartPage";
// import CartItem from "./Shop/Cart/CartItem";



function App() {
  return <Router>
    <div>
  <nav>
    <Link to = "/" className='link'>Startseite</Link>
    <Link to="/about" className="link">Unsere Leistungen</Link>
    <Link to="/pricing" className="link">Preise</Link>
    <Link to="/contact" className='link'>Kontakt</Link>
    <Link to="/shop" className='link'>Shop</Link>
    {/* <Link to="/cart" className='link'><button className="cart" ><img className="cartIcon" src="https://img.icons8.com/?size=100&id=67440&format=png&color=000000"/></button></Link> */}
  
    <Link to="/cart" className="link">
        <button className="cart">
            <img className="cartIcon" src="https://img.icons8.com/?size=100&id=67440&format=png&color=000000" />
        </button>
    </Link>

  </nav>

 <Routes>
    <Route path="/" element={<><Slideshow /><AboutUs /><Reviews /></>} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="pricing" element={<Pricing/>}/>
    <Route path="shop" element={<Shop/>}/>
    {/* <Route path="cart" element={<CartItem />} /> */}
    <Route path="/cart" element={<CartPage />} />
</Routes>
 <Footer />
 </div> 
</Router>  

       
}


export default App
