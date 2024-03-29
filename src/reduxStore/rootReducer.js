// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { productReducer } from "./reducers/productList.reducer";
import { staffReducer } from "./reducers/staff.reducer";
import { salesReducer } from "./reducers/sales.reducer";
import { salesRepReducer } from "./reducers/salesRep.reducer";
import { stockReducer } from "./reducers/stock.reducer";
import { expenseReducer } from "./reducers/expense.reducer";
import { utilitiesReducer } from "./reducers/utilities.reducer";
import { debtReducer } from "./reducers/debt.reducer";
import { accountReducer } from "./reducers/account.reducer";
import { operationsMenuReducer } from "./reducers/operationsMenu";

export const rootReducer = combineReducers({
    currentUser: userReducer,
    productList: productReducer,
    staffList: staffReducer,
    salesRecord: salesReducer,
    salesRepRecord: salesRepReducer,
    stock: stockReducer,
    expenses: expenseReducer,
    utilities: utilitiesReducer,
    debtRecord: debtReducer,
    account: accountReducer,
    operationsMenu: operationsMenuReducer,
})