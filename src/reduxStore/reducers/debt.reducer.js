import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const debtSlice = createSlice({
    name: "debtRecord",
    initialState: {},
    reducers: {
        updateDebtRecord: (state, action) => {
        state.debtRecord = action.payload;
        },
        addDebtRecord: (state, action) => {
            // const { newExpense, currentDate } = action.payload;
            // state.expenses[currentDate] = newExpense;
            // addCollectionAndDocuments("Expenses", currentDate, newExpense);
        }
    }
});

    export const { addDebtRecord, updateDebtRecord } = debtSlice.actions;
    export const debtReducer = debtSlice.reducer;
