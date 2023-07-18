// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { productReducer } from "./reducers/productList.reducer";
import { staffReducer } from "./reducers/staff.reducer";
import { salesReducer } from "./reducers/sales.reducer";
import { salesRepReducer } from "./reducers/salesRep.reducer";

export const rootReducer = combineReducers({
    currentUser: userReducer,
    productList: productReducer,
    staffList: staffReducer,
    salesRecord: salesReducer,
    salesRepRecord: salesRepReducer
})