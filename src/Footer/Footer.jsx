import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Footer = () => {

  const navigate = useNavigate(); 

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;



