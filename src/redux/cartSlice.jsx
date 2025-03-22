import { createSlice } from '@reduxjs/toolkit';

const loadCart = () => {
    const savedCart = localStorage.getItem('cartItems'); 
    if (savedCart) {
        return JSON.parse(savedCart); 
    }
    return []; 
};

const saveCart = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: loadCart(), 
    },

    reducers: {
        addItemToCart: (state, action) => {
            const timeID = new Date().getTime();
            state.cartItems.push({
                id: timeID,
                productId: action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.product.price,
                price: action.payload.product.price, 
            });
            saveCart(state.cartItems); 
        },

        removeItemFromCart: (state, action) => {
            console.log(state.cartItems);
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            );
        saveCart(state.cartItems); 
        },

        updateQuantity: (state, action) => {
            const { cartItemId, newQuantity } = action.payload;
            const item = state.cartItems.find(cartItem => cartItem.id === cartItemId);
            if (item) {
                item.quantity = newQuantity;
                item.totalPrice = item.price * newQuantity; 
                saveCart(state.cartItems); 
            }
        },
    }
});


export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return total + cartItem.totalPrice;
    }, 0);
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
  
     
