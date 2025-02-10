import { dataProducts } from "../data/dataProducts";
import { removeItemFromCart } from '../../redux/cartSlice';
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {

    const products = dataProducts.find(item => item.id === cartItem.productId);
    
    const dispatch = useDispatch();
   
    return(
        <div>
            <p>{cartItem.quantity}</p>
            <p>{products.name}</p>
            <p>Preis: {products.price*cartItem.quantity} €</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/?size=100&id=102315&format=png&color=000000" alt="remove Item"/> 
            </span>
        </div>
    )
}

export default CartItem;





