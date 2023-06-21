import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";


const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const reduxStore = createStore(rootReducer, undefined, composedEnhancers);