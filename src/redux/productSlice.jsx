import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        selectedCategory: "Alle Produkte"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const getSelectedCategory = state => state.products.selectedCategory;
export const { filterCategory } = productSlice.actions;
export default productSlice.reducer