import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div className="cart-container">
            <button className="cart" ><img className="cartIcon" src="https://img.icons8.com/?size=100&id=67440&format=png&color=000000"/></button> 
            {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            <p>Total: {totalPrice} €</p>
                    
        </div>
    )
}

export default Cart;

