import { createSlice } from "@reduxjs/toolkit";
import { menClothing, womenClothing } from '../../data/cardData';

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        menClothing,
        womenClothing
    },
});

export default cardSlice.reducer;