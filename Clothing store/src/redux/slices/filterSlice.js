import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    men: true,
    women: true,
    children: true,
    productName: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setMenFilter: (state) => {
            state.men = !state.men;
        },

        setWomenFilter: (state) => {
            state.women = !state.women;
        },

        setChildrenFilter: (state) => {
            state.children = !state.children;
        },

        setProductNameFilter: (state, action) => {
            state.productName = action.payload;
        }
    }
})

export const { setMenFilter, setWomenFilter, setChildrenFilter, setProductNameFilter } = filterSlice.actions;

export const selectMenFilter = (state) => state.filter.men;
export const selectWomenFilter = (state) => state.filter.women;
export const selectChildrenFilter = (state) => state.filter.children;
export const selectProductNameFilter = (state) => state.filter.productName;

export default filterSlice.reducer;