import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const stockSlice = createSlice({
    name: "stock",
    initialState: {},
    reducers: {
        updateStock: (state, action) => {
        state.stock = action.payload;
        },
        addStock: (state, action) => {
            const { newStock, currentDate } = action.payload;
            state.stock[currentDate] = newStock;
            addCollectionAndDocuments("Stock", currentDate, newStock);
        }
    }
});

    export const { addStock, updateStock } = stockSlice.actions;
    export const stockReducer = stockSlice.reducer;
