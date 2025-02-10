// import { dataProducts } from "../data/dataProducts";
// import { useSelector } from "react-redux";
// import { getSelectedCategory } from "../../redux/productSlice";
// import React from 'react';
// import Product from './Product';

// import Product from "./Product";

// const Products = () => {
//     const selectedCategory = useSelector(getSelectedCategory);

//     return(
//         <div className="products-container">
//             {dataProducts
//                 .filter(product => {
//                     return selectedCategory === product.category; 
//                 })
//                 .map(product => <Product key={product.id} product={product} />)
//             }
//         </div>
//     );
// }

// export default Products;

//последний вариант окончательный

// const Products = () => {
//     const selectedCategory = useSelector(getSelectedCategory);

//     return (
//         <div className="products-container">
//             {dataProducts
//                 .filter(product => {
//                     // Если выбрана категория "Alle Produkte", показываем все товары
//                     if (selectedCategory === "Alle Produkte") return true;
//                     return selectedCategory === product.category;
//                 })
//                 .map(product => <Product key={product.id} product={product} />)
//             }
//         </div>
//     );
// }

// export default Products;





// import React from 'react';
// import { dataProducts } from '../data/dataProducts';
// import Product from './Product';

// const Products = ({ selectedCategory }) => {
   
//     const filteredProducts = selectedCategory === 'all' 
//         ? dataProducts 
//         : dataProducts.filter(product => product.category === selectedCategory);

//     return (
//         <div className="products-container">
//             {filteredProducts.map(product => (
//                 <Product key={product.id} product={product} />
//             ))}
//         </div>
//     );
// };

// export default Products;

import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/productSlice';
import { dataProducts } from '../data/dataProducts';
import Product from './Product';

const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);  

    return (
        <div className="products-container">
            {dataProducts
                .filter(product => {
                    if (selectedCategory === "Alle Produkte") return true;
                    return selectedCategory === product.category;
                })
                .map(product => <Product key={product.id} product={product} />)
            }
        </div>
    );
};

export default Products;
