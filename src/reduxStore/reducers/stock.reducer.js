import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const stockSlice = createSlice({
    name: "stock",
    initialState: {},
    reducers: {
        updateStock: (state, action) => {
        state.stock = action.payload;
        },
        // addStock: (state, action) => {
        //     const { srFormResponse, currentDate } = action.payload;
        //     state.salesRepRecord[currentDate] = srFormResponse;
        //     addCollectionAndDocuments("SRSales", currentDate, srFormResponse);
        // }
    }
});

    export const { updateStock } = stockSlice.actions;
    export const stockReducer = stockSlice.reducer;
