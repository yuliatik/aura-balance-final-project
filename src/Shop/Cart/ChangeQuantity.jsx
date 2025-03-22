const ChangeQuantity = ({ quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div className="quantity-container">
            <button className="quantity-btn" onClick={removeQuantity}>-</button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn" onClick={addQuantity}>+</button>
        </div>
    );
};

export default ChangeQuantity;








