import { compose, legacy_createStore, applyMiddleware } from "redux";
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
    blacklist: [""]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
    Boolean
);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // to allow redux devtools in development

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const reduxStore = legacy_createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(reduxStore);