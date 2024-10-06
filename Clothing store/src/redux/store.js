import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        basket: basketSlice,
        filter: filterSlice
    }
});

export default store;