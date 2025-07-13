import React, { useState } from 'react';
import './Shop.css';
import AllCategories from './Filter/AllCategories';
import Products from './Products/Products';
import { useNavigate } from 'react-router-dom';
import ProductDetailsPage from './Products/ProductDetailsPage';


function Shop() {
    const [selectedCategory, setSelectedCategory] = useState('Alle Produkte');
    const navigate = useNavigate(); 


    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const goToCart = () => {
        navigate('/cart'); 
    };
   
    return (
        <div>
            <AllCategories onCategorySelect={handleCategorySelect} />     
           <button className="btn" onClick={goToCart}>
            <img className="cartIcon" src="https://img.icons8.com/?size=100&id=67440&format=png&color=000000" />
           </button>
            <Products selectedCategory={selectedCategory} />
        </div>



    );
}

export default Shop;




