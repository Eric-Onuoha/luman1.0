import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const salesRepSlice = createSlice({
    name: "salesRepRecord",
    initialState: {},
    reducers: {
        updateSalesRepRecord: (state, action) => {
        state.salesRepRecord = action.payload;
        },
        addSalesRepRecord: (state, action) => {
            const { srFormResponse, currentDate } = action.payload;
            state.salesRepRecord[currentDate] = srFormResponse;
            addCollectionAndDocuments("SRSales", currentDate, srFormResponse);
        }
    }
});

    export const { updateSalesRepRecord, addSalesRepRecord } = salesRepSlice.actions;
    export const salesRepReducer = salesRepSlice.reducer;
