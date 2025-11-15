import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product =({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    console.log(quantity)
    
    return(
        
        <div className="product-card">
          <div className="picture">
        <Link to={`/product/${product.id}`}>
          <img  src={product.image}  alt={product.name} />
        </Link>
      </div>   

            <div className="product-info">                      
            <h4>{product.name}</h4>
            <p>{product.price} €</p> 
             <ChangeQuantity quantity={quantity} setQuantity = {setQuantity} />
            <button className="product-button" onClick={() => dispatch(addItemToCart({product, quantity}))}>In den Warenkorb</button>
           </div>     

        </div>
    )
}

export default Product; 





