import './AboutUs.css';
import { useState, useEffect } from 'react';
import image from './image.jpg';



// CountdownTimer-Komponente
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeRemaining(targetDate);
      setTimeLeft(time);

      // Wenn die Zeit abgelaufen ist, den Intervall stoppen
      if (time.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <div>
        <span>{timeLeft.days} Tage</span> 
        <span>{timeLeft.hours} Stunden</span> 
        <span>{timeLeft.minutes} Minuten</span> 
        <span>{timeLeft.seconds} Sekunden</span>
      </div>

      
    </div>
  );
};

// Funktion zum Berechnen der verbleibenden Zeit
const getTimeRemaining = (targetDate) => {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};

function AboutUs() {

  return (
    <div>

    <div>
      <h2>Eröffnung in wenigen Tagen...</h2>
      <CountdownTimer targetDate="2025-01-01T00:00:00" className="countdown"/>            
    </div>

      <div className='container'>
        <div className='text'>
        <h3>Gönn dir eine Auszeit – Erlebe die Vorteile einer wohltuenden Massage!</h3>
        <p>Stress? Verspannungen? Müdigkeit?</p> 
        <p>Es ist Zeit, Körper und Geist etwas Gutes zu tun! Entdecke, wie eine Massage dein Wohlbefinden steigern kann:</p>
        <p>Massage ist eine wunderbare Methode, um sowohl körperliche als auch geistige Gesundheit zu fördern.</p>
        <p>Sie kann helfen, Stress abzubauen, Schmerzen zu lindern, die Beweglichkeit zu erhöhen und die allgemeine Lebensqualität zu verbessern.</p>
        <p>Regelmäßige Massagen sind eine Investition in dein Wohlbefinden und eine ausgezeichnete Möglichkeit, sich sowohl zu entspannen als auch zu revitalisieren.</p>
      </div>

      <div className='image'>
        <img src={image} alt="massage" />
      </div>
    </div>   

    <div className="btn-container">
      <h3>Buche jetzt eine Massage mit 20 % Rabatt!</h3>
      <button className="book-button">Jetzt buchen</button>
    </div>

    <div>
        <h2>Unsere Zertifikate</h2>
      </div>
   </div>
  );
}

export default AboutUs;
