import React from 'react';
import Filter from './Filter';


const AllCategories = () => {
    return (
        <div className="category-container">   
            <img src={'https://images.pexels.com/photos/6690884/pexels-photo-6690884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="Körperpflege"  className="category-image"/>
            <h1>Luxus für deinen Körper – Pflege, die du verdienst!</h1>
            <h3>"Entdecke die Kraft der Natur – Massage, Pflege und Aroma in jedem Produkt."</h3>
            
            <div className="filter-container">
                    {['Alle Produkte', 'Trockenmassagebürste', 'Körpercreme', 'Körperöl', 'Kerzen']
                    .map(category => (<Filter key={category} category={category}/>))}
            </div>
        </div>   );
};

export default AllCategories;




















