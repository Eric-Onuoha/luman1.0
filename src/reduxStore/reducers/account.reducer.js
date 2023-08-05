import { createSlice } from "@reduxjs/toolkit";
import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const accountSlice = createSlice({
    name: "account",
    initialState: {},
    reducers: {
        updateAccount: (state, action) => {
        state.account = action.payload;
        },
        addAccount: (state, action) => {
            const { currentDate, updatedAccount } = action.payload;
            state.account[currentDate] = updatedAccount;
            addCollectionAndDocuments("Account", currentDate, updatedAccount);
        }
    }
});

    export const { addAccount, updateAccount } = accountSlice.actions;
    export const accountReducer = accountSlice.reducer;
