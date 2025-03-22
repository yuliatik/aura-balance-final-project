import React, { useState } from 'react';
import './Contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Alle Felder sind Pflichtfelder');
      return;
    }
    setError('');
  
    console.log('Nachricht wurde gesendet:', { name, email, message });
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Kontaktieren Sie uns:</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
       
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Ihre Nachricht:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-input"
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Absenden</button>
      </form>

      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>

    </div>
  );
};

export default ContactForm;
