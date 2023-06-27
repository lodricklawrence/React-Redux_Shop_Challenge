import { createStore } from "redux";
import { combineReducers , applyMiddleware} from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer  from "./IceCream/IceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducers=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducers, composeWithDevTools(applyMiddleware(logger)) );

export default store