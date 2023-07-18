import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const salesSlice = createSlice({
    name: "salesRecord",
    initialState: {},
    reducers: {
        updateSalesRecord: (state, action) => {
        state.salesRecord = action.payload;
        },
        addSales: (state, action) => {
            const { DTCSales, currentDate } = action.payload;
            state.salesRecord[currentDate] = DTCSales;
            addCollectionAndDocuments("DTCSales", currentDate, DTCSales);

        }
    }
});

    export const { updateSalesRecord, addSales } = salesSlice.actions;
    export const salesReducer = salesSlice.reducer;
