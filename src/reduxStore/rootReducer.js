// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer/user.reducer";

export const rootReducer = combineReducers({
    currentUser: userReducer
})