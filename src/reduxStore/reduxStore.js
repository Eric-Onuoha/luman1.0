import { configureStore } from "@reduxjs/toolkit";
import { compose } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger"; 
import { rootReducer } from "./rootReducer";


// const loggerMiddleware = (store) => (next) => (action) =>{ // customized loogerMiddleware
//     if (!action.type){
//         return next(action);
//     }

//     console.log("type", action.type);
//     console.log("payload", action.payload);
//     console.log("CurrentState: ", store.getState());

//     next(action);// next is synchorous and would need to complete before anyother code runs

//     console.log("Next State: ", store.getState());
// }

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["productList", "staffList", "salesRecord", "stock", "expenses", "utilities", "debtRecord"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
    Boolean
);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // to allow redux devtools in development


export const ReduxStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
    }).concat(middlewares),
    enhancers: composedEnhancer
});

export const persistor = persistStore(ReduxStore);