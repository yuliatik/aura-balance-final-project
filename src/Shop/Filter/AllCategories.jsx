import React from 'react';
import Filter from './Filter';
import Cart from '../Cart/Cart';

const AllCategories = () => {
    return (
        <div>
            {/* <img src={"https://img.freepik.com/free-photo/top-view-arrangement-with-spa-products-marble-table_23-2148290980.jpg?t=st=1738795472~exp=1738799072~hmac=97177e0dc46e3a934c118ffe824a81487e44169da649bd2602b0e9d121abb5b8&w=900"} className="category-image" /> */}
            {/* <img src={"https://img.freepik.com/premium-photo/spa-wellness-composition-with-serum-towels-beauty-products_72402-1931.jpg?w=740"} className="category-image"  /> */}
            <img src={'https://images.pexels.com/photos/6690884/pexels-photo-6690884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="Körperpflege"  className="category-image"/>
            
            <h1>Luxus für deinen Körper – Pflege, die du verdienst!</h1>
            <p>"Entdecke die Kraft der Natur – Massage, Pflege und Aroma in jedem Produkt."</p>
            <div className="filter-container">
                    {['Alle Produkte', 'Trockenmassagebürste', 'Körpercreme', 'Körperöl', 'Kerzen']
                    .map(category => (<Filter key={category} category={category}/>))}
            </div>
            <Cart />
        </div>
    );
};

export default AllCategories;








