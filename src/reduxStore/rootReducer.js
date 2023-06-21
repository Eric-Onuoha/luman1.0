import { combineReducers } from "redux";
import { currentUserReducer } from "./userReducer/user.reducer";

export const rootReducer = combineReducers({
    currentUser: currentUserReducer
})