import { getCartItems } from "../redux/cartSlice";
import Cart from "../Shop/Cart/Cart";
import CartItem from "../Shop/Cart/CartItem";



function CartPage({cartItem}){
    return(
        <div>   
           <CartItem cartItem = {cartItem} />
        </div>
       
    )
}

export default CartPage;