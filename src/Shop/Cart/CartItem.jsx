import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "./ChangeQuantity";
import { removeItemFromCart } from "../../redux/cartSlice";
import { dataProducts } from "../data/dataProducts";
import './Cart.css';

const CartItem = ({ cartItem, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const [totalPrice, setTotalPrice] = useState(cartItem.totalPrice);

    const dispatch = useDispatch();
    const products = dataProducts.find(item => item.id === cartItem.productId);

    useEffect(() => {
        setTotalPrice(products.price * quantity);
        onQuantityChange(cartItem.id, quantity); 
    }, [quantity, products.price, cartItem.id, onQuantityChange]);

    return (
        <div className="cart-item">

            <div className="cart-item-image">
            <img className="img" src={products.image} alt={products.name} />
            </div>

            <div className="cart-item-details">
            <p>{products.name}</p>
            <p>Preis: {totalPrice} €</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            </div>

            <div className="cart-item-remove">
           <span onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
                <img 
                    className="icon" 
                    src="https://img.icons8.com/?size=100&id=102315&format=png&color=000000" 
                    alt="remove Item"/>
           </span>
            </div>
        </div>
    );
};

export default CartItem;




















