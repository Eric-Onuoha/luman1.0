import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: ""
}

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: initialState,
    reducers:{
        updateCurrentUser(state, action){
            state.currentUser = action.payload;
        }
    }
});

export const {updateCurrentUser} = currentUserSlice.actions;
export const userReducer = currentUserSlice.reducer;
