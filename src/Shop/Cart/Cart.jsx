import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import './Cart.css';
import { getCartItems, getTotalPrice, updateQuantity } from "../../redux/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ cartItemId: id, newQuantity }));
    };

    return (
        <div>
            <img className="category-image" 
               src={'https://img.freepik.com/premium-photo/cosmetic-bottle-containers-packaging-with-winter-seasonal-theme_175175-18.jpg?w=1060'}
               alt="accounting"
            />

            <h2>Warenkorb</h2>
            
            {cartItems.length === 0 ? (
                <h2>Ihr Warenkorb ist leer</h2>  
            ) : (
                <>
                    <div className="price">
                        <h2>Gesamtpreis: {totalPrice} €</h2>
                        <button className="checkout-button">Zur Kasse gehen</button>
                    </div>

                    {cartItems.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            onQuantityChange={handleQuantityChange}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Cart;




