// import Filter from "./Filter/Filter";
// import Products from "./Products/Products";
// import React from "react";
// import './Shop.css';
// import AllCategories from "./Filter/AllCategories";
// import Cart from "./Cart/Cart";
 

// function Shop() {
//     return (
//         <div>
//             <Products />
//             <Filter />
//             <AllCategories />
//             <Cart />
//         </div>
//     );
// }

// export default Shop;

// import React, { useState } from 'react';
// import './Shop.css';
// import AllCategories from './Filter/AllCategories';
// import Products from './Products/Products';

// function Shop() {
//     const [selectedCategory, setSelectedCategory] = useState('all');

    // Функция для обновления выбранной категории
//     const handleCategorySelect = (category) => {
//         setSelectedCategory(category);
//     };

//     return (
//         <div className="shop-container">
//             {/* Передаем функцию выбора категории в AllCategories */}
//             <AllCategories onCategorySelect={handleCategorySelect} />
            
//             {/* Передаем выбранную категорию в Products для фильтрации */}
//             <Products selectedCategory={selectedCategory} />
//         </div>
//     );
// }

// export default Shop;

import React, { useState } from 'react';
import './Shop.css';
import AllCategories from './Filter/AllCategories';
import Products from './Products/Products';


function Shop() {
    const [selectedCategory, setSelectedCategory] = useState('Alle Produkte');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="shop-container">
            <AllCategories onCategorySelect={handleCategorySelect} />          
            <Products selectedCategory={selectedCategory} />
        </div>
    );
}

export default Shop;



