import React from 'react';
import Filter from './Filter';


const AllCategories = () => {
    return (
        <div className="category-container">   
            <img src={'https://plus.unsplash.com/premium_photo-1675018083368-3fe2b1cbd530?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Körperpflege"  className="category-image"/>
            <h1>Luxus für deinen Körper – Pflege, die du verdienst!</h1>
            <h4>"Entdecke die Kraft der Natur – Massage, Pflege und Aroma in jedem Produkt."</h4>
            
            <div className="filter-container">
                    {['Alle Produkte', 'Trockenmassagebürste', 'Körpercreme', 'Körperöl', 'Kerzen']
                    .map(category => (<Filter key={category} category={category}/>))}
            </div>
        </div>   );
};

export default AllCategories;




















