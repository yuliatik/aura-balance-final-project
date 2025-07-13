import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dataProducts } from '../data/dataProducts';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = dataProducts.find(p => p.id === parseInt(id));

  if (!product) return <h2 style={{ textAlign: "center", padding: "50px" }}>Produkt nicht gefunden.</h2>;

  return (
    <div className="product-details-container">
          
      <div className="product-card">
        <div className="picture">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <p><strong>Preis:</strong> {product.price} €</p>
          <p className="full-description">{product.description}</p>
           <button className="back-button" onClick={() => navigate(-1)}>← Zurück</button>
        </div>
        </div>
    </div>
  );
};

export default ProductDetailsPage;
