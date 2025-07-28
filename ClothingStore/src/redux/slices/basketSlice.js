import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: JSON.parse(localStorage.getItem('basket')) || [],
    reducers: {
        addToBasket: (state, action) => {
            const updatedStateAdd = [...state, action.payload]
            localStorage.setItem('basket', JSON.stringify(updatedStateAdd))
            return updatedStateAdd;
        },

        deleteFromBasket: (state, action) => {
            const updatedStateRemove = state.filter(card => card.id !== action.payload);
            localStorage.setItem('basket', JSON.stringify(updatedStateRemove));
            return updatedStateRemove;
        },

        clearBasket: (state, action) => {
            localStorage.removeItem('basket');
            return [];
        },

        changeNumber: (state, action) => {
            state.forEach((card) => {
                if (card.id === action.payload.id && action.payload.type === 'increment' && card.productNum < card.quantity) {
                    card.productNum++;
                    card.finalPrice = card.startPrice * card.productNum;
                } else if (card.id === action.payload.id && action.payload.type === 'decrement' && card.productNum > 1) {
                    card.productNum--;
                    card.finalPrice = card.startPrice * card.productNum;
                }
            })
            localStorage.setItem('basket', JSON.stringify(state));
        }
    }
})

export const { addToBasket, deleteFromBasket, clearBasket, changeNumber } = basketSlice.actions;

export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;