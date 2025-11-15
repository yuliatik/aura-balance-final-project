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

      <div className='header'>
        <h1>Hezlich Willkomen im Schönheits-und Gesundheitsstudio!</h1>
      </div>

      <div className='picture'>
      <img src="https://images.unsplash.com/photo-1745327883348-8d78cb4661b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="massage" width="400px" height="300px"/> 
      <img src="https://images.unsplash.com/photo-1700142360825-d21edc53c8db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774" alt="massage" width="400px" height="300px" />
      <img src="https://images.unsplash.com/photo-1636737249734-f180af754ab8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580" alt="massage" width="400px" height="300px" />
      </div>  

  <div className="container">
  <div className="text">  
    <h3>Unsere Massagestudio steht für natürliche Schönheit und tiefe Entspannung!</h3>
    <p>Jeder Griff ist eine Einladung, loszulassen und neue Energie zu spüren.
    Ob klassische Massage, Aromatherapie oder Gesichtsbehandlung – wir kümmern uns mit Hingabe um dein Wohlbefinden.
    Unsere erfahrenen Therapeuten nehmen sich Zeit für dich und stimmen jede Behandlung individuell auf deine Bedürfnisse ab.
    Jede Berührung ist achtsam, jeder Moment ist auf dich abgestimmt – für ein rundum harmonisches Erlebnis.
    </p>
  </div>
  <div className="image">
    <img src={image} alt="Massage-Behandlung" />
  </div>
</div>

 <div className="btn-container">
   <h3>Buche jetzt eine Massage mit 20 % Rabatt!</h3>
      <button className="book-button" onClick={handleBooking}>Zu unseren Leistungen</button>
  </div>

       <section className="important-section">
        <h2>Was für uns wichtig ist</h2>
        <div className="important-columns">
          <div className="column">
            <h4>🕊️ Natürliche Balance</h4>
            <p>
              Wir glauben an die Kraft der Berührung und die Harmonie zwischen Körper und Geist.
              Unsere Massagen helfen, Stress abzubauen, Verspannungen zu lösen und innere Ruhe zu finden.
              Jede Behandlung ist ein Schritt zu mehr Gleichgewicht und Wohlbefinden.
            </p>
          </div>

          <div className="column">
            <h4>🌿 Reine, hochwertige Öle</h4>
            <p>
              Wir verwenden ausschließlich natürliche, kaltgepresste Öle und Aromen, die die Haut pflegen und regenerieren.
              Unsere Produkte sind frei von Parabenen, Silikonen und künstlichen Duftstoffen – sanft zur Haut und zur Natur.
              Ihre Gesundheit und Ihr Wohlgefühl stehen für uns an erster Stelle.
            </p>
          </div>

          <div className="column">
            <h4>🤲 Individuelle Betreuung</h4>
            <p>
              Jeder Mensch ist einzigartig – und so auch jede Massage.
              Vor jeder Behandlung besprechen wir Ihre Wünsche und Bedürfnisse, um die Massage perfekt auf Sie abzustimmen.
              So entsteht ein persönliches Ritual der Entspannung und Erneuerung.
            </p>
          </div>
        </div>
      </section>

     <div className="container">
        <div className="image">
          <img
            src={'https://charismaticplanet.com/wp-content/uploads/2018/06/Fragrance-and-Aroma.jpg'}
            alt="bodyproducts"
          />
        </div>
            <div className="text">
          <h3 class="size">Wir laden dich herzlich ein, unseren Shop für exklusive Körperpflegeprodukte zu besuchen!</h3>
          <p>Unsere Haut verdient liebevolle Pflege und natürliche Schönheit.
            In unserem Studio findest du hochwertige Produkte, die Körper und Seele verwöhnen.
            Jedes Öl, jeder Duft und jede Creme wurde mit Sorgfalt ausgewählt, um dein Wohlbefinden zu fördern.
            Erlebe, wie kleine Pflegerituale große Wirkung entfalten können.</p>
            <p>Besuche unseren Shop und entdecke exklusive Körperpflegeprodukte – wir freuen uns auf dich!</p>
         
        </div>
       
      </div> 

  <div className="shop-block">
  <div className="shop-text">
    <h3>Entdecke unseren exklusiven Shop für Körperpflegeprodukte!</h3>
    <p>
      Wir bieten hochwertige, natürliche Produkte, die deine Haut pflegen und verwöhnen – 
      von Ölen und Cremes bis hin zu Düften. Gönn dir etwas Besonderes und erlebe pure Entspannung zu Hause.
    </p>
    <button className="book-button" onClick={handleShopping}>
      Zum Shop
    </button>
  </div>
</div> 

  </div>
  );
}

export default AboutUs;


