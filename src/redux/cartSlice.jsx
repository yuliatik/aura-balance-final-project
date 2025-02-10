import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeID = new Date().getTime()
            state.cartItems.push({
                id: timeID,
                productId: action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.product.price

            })
        },

        removeItemFromCart: (state, action) => {
            console.log(state.cartItems)
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
           }
        }
    })


export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer