import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const expenseSlice = createSlice({
    name: "expenses",
    initialState: {},
    reducers: {
        updateExpense: (state, action) => {
        state.expenses = action.payload;
        },
        addExpense: (state, action) => {
            const { newExpense, currentDate } = action.payload;
            state.expenses[currentDate] = newExpense;
            addCollectionAndDocuments("Expenses", currentDate, newExpense);
        }
    }
});

    export const { addExpense, updateExpense } = expenseSlice.actions;
    export const expenseReducer = expenseSlice.reducer;
