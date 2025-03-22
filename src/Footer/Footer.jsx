import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Footer = () => {

  const navigate = useNavigate(); 

  const handleNavigateToAbout = () => {
    navigate('/about');
  }

  const handleNavigateToServices = () => {
    navigate('/shop'); 
  };

  const handleNavigateToContact = () => {
    navigate('/contact'); 
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>Kontakt:</h4>
          <ul>
            <li>Steinstraße 4</li>
            <li>22529 Hamburg</li>
            <li>E-mail: kontakt@aura-balance.com</li>
            <li>Telefon: +49 174 5962835</li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Unsere Öffnungszeiten:</h4>
          <ul className="opening-hours">
            <li>Montag - Freitag: 10:00 - 21:00</li>
            <li>Samstag: 10:00 - 16:00</li>
            <li>Sonntag: Geschlossen</li>
          </ul>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© 2024 Aura Balance. Alle Rechte vorbehalten.</p>
        <p>Entwickelt von yuliatik für die Lernzwecke.</p>
        <ul className="footer-links">
          <li><a href="#" onClick={handleNavigateToAbout}>Home</a></li>
          <li><a href="#" onClick={handleNavigateToServices}>Shop</a></li>
          <li><a href="#" onClick={handleNavigateToContact}>Kontakt</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;



