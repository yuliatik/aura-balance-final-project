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

