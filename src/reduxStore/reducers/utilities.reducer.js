import { createSlice } from "@reduxjs/toolkit";
// import { addCollectionAndDocuments } from "../../firestore/postToFirestore.utils";

export const utilitiesSlice = createSlice({
    name: "utilities",
    initialState: {},
    reducers: {
        updateUtilities: (state, action) => {
        state.utilities = action.payload;
        }
    }
});

    export const { updateUtilities,  } = utilitiesSlice.actions;
    export const utilitiesReducer = utilitiesSlice.reducer;
