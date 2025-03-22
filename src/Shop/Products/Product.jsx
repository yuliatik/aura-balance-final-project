import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";

const Product =({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    console.log(quantity)
    
    return(
        <div className="product-card">
            <div className="picture">
            <img src={product.image} alt={product.name} />
            </div> 

            <div className="product-info">                      
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <p className="product-description">{product.description}</p> 
            <ChangeQuantity quantity={quantity} setQuantity = {setQuantity} />
            <button className="product-button" onClick={() => dispatch(addItemToCart({product, quantity}))}>In den Warenkorb</button>
           </div>     

        </div>
    )
}

export default Product;

