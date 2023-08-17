import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    operationsMenu: "Update"
}

export const operationsMenuSlice = createSlice({
    name: "operationsMenu",
    initialState: initialState,
    reducers:{
        updateOperationsMenu(state, action){
            state.operationsMenu = action.payload;
        }
    }
});

export const {updateOperationsMenu} = operationsMenuSlice.actions;
export const operationsMenuReducer = operationsMenuSlice.reducer;
