import { compose, legacy_createStore, applyMiddleware } from "redux";
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

const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
    Boolean
);
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const reduxStore = legacy_createStore(rootReducer, undefined, composedEnhancers);