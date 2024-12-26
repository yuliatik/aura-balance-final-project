  import React from 'react';
  import './Navbar.css';
  import About from './About';
  import Pricing from './Pricing';
  import Contact from './Contact';
  // import Home from './Home';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

  function Navbar() {
     return <Router>
       <nav>
          <Link to = "/" className='link'>Startseite</Link>
          <Link to = "/about" className='link'>Unsere Leistungen</Link>
          <Link to = "/pricing" className='link'>Preise</Link>
          <Link to = "/contact" className='link'>Kontakt</Link>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />} />  */}
          <Route path = "/about" element={<About/>}/>
          <Route path = "/pricing" element = {<Pricing/>} />
          <Route path = "/contact" element = {<Contact/>} />      
        </Routes>   
    </Router> 
}
  

  export default Navbar;



