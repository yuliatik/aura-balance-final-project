import './AboutUs.css';
import image from './image.jpg';
import { useNavigate } from 'react-router-dom';

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

      <div className="btn-container">
        <h3>Buche jetzt eine Massage mit 20 % Rabatt!</h3>
        <button className="book-button" onClick={handleBooking}>
          Massage wählen
        </button>
      </div>

      <div className="container">
        <div className="image">
          <img
            src={'https://charismaticplanet.com/wp-content/uploads/2018/06/Fragrance-and-Aroma.jpg'}
            alt="bodyproducts"
          />
        </div>

        <div className="text">
          <h3>Wir laden dich herzlich ein, unseren Shop für exklusive Körperpflegeprodukte zu besuchen!</h3>
          <p>Entdecke hochwertige Cremes, Düfte, Öle und vieles mehr, um sich und Ihrer Haut etwas Besonderes zu gönnen.</p>
          <p>Kommen Sie vorbei und lassen Sie sich von unseren einzigartigen Produkten inspirieren.</p>
          <p>Wir freuen uns auf Ihren Besuch!</p>
        </div>
      </div>

      <div className="btn-container">
        <h3>Für Ihre Haut nur das Beste – Entdecken Sie unsere Produkte!</h3>
        <button className="book-button" onClick={handleShopping}>
        Zu unseren Produkten
        </button>
      </div>
    </div>
  );
}

export default AboutUs;


