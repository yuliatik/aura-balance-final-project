// src/components/Footer.js
import React from 'react';
import './Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h4>Kontakt:</h4>
          <p>Steinstraße 4</p>
          <p>22529 Hamburg</p>
          <p>E-mail: kontakt@aura-balance.com</p>
          <p>Telefon: +49 174 5962835</p>
        </div>

        <div>
        <h4>Unsere Öffnungszeiten</h4>
         <ul className="opening-hours">
          <li>Montag - Freitag: 10:00 - 21:00</li>
          <li>Samstag: 10:00 - 16:00</li>
          <li>Sonntag: Geschlossen</li>
         </ul>
         </div>

         

         <p>© 2024 Aura Balance. Alle Rechte vorbehalten.</p>

        <p>Entwickelt von yuliatik für die Lernzwecke.</p>
        <ul className="footer-links">
          <li><a href="#about">Über uns</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
       
        
     </div>
     
    </footer>
  );
};

export default Footer;

