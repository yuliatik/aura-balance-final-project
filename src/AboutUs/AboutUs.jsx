import './AboutUs.css';
import { useState, useEffect } from 'react';
import image from './image.jpg';
import { useNavigate } from 'react-router-dom';

// CountdownTimer-Komponente
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeRemaining(targetDate);
      setTimeLeft(time);

      if (time.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown">
      <span>{timeLeft.days} Tage</span>
      <span>{timeLeft.hours} Stunden</span>
      <span>{timeLeft.minutes} Minuten</span>
      <span>{timeLeft.seconds} Sekunden</span>
    </div>
  );
};

const getTimeRemaining = (targetDate) => {
  const total = Date.parse(targetDate) - Date.now();
  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
};

function AboutUs() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/about');
  };

  const handleShopping = () => {
    navigate('/shop');
  };

  return (
    <div>
      <div>
        <h2>Eröffnung in wenigen Tagen...</h2>
        <CountdownTimer targetDate="2025-01-01T00:00:00" />
      </div>

      <div className="container">
        <div className="text">
          <h3>Gönn dir eine Auszeit – Erlebe die Vorteile einer wohltuenden Massage!</h3>
          <p>Stress? Verspannungen? Müdigkeit?</p>
          <p>Es ist Zeit, Körper und Geist etwas Gutes zu tun!</p>
          <p>Entdecke, wie eine Massage dein Wohlbefinden steigern kann.</p>
        </div>

        <div className="image">
          <img src={image} alt="Massage" />
        </div>
      </div>

       {/* LINK ZUR MASSAGE */}
      <div className="btn-container">
        <h3>Buche jetzt eine Massage mit 20 % Rabatt!</h3>
        <button className="book-button" onClick={handleBooking}>
          Jetzt buchen
        </button>
      </div>

       {/* LINK ZUM SHOP */}
       <div className="container">
      <div>
        <img className="image-two" src={'https://charismaticplanet.com/wp-content/uploads/2018/06/Fragrance-and-Aroma.jpg'} alt='bodyproducts' />
       </div>

       <div className="text">
        <h3>Wir laden dich herzlich ein, unseren Shop für exklusive Körperpflegeprodukte zu besuchen!</h3>
        <p>Entdecke hochwertige Cremes, Düfte, Öle und vieles mehr, um sich und Ihrer Haut etwas Besonderes zu gönnen.</p>
        <p>Kommen Sie vorbei und lassen Sie sich von unseren einzigartigen Produkten inspirieren.</p>
        <p>Wir freuen uns auf Ihren Besuch!</p>
       </div>

       </div>

       <div className="btn-container">
        <button className="book-button" onClick={handleShopping}>
          Zum Shop
        </button>
      </div>


      <div>
        <h2>Unsere Zertifikate</h2>
      </div>
    </div>
  );
}

export default AboutUs;
