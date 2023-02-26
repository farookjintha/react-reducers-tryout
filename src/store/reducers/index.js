import { combineReducers } from "redux";
import cartReducer from "./cart.reducers";
import counterReducer from "./counter.reducers";

const allReducers = combineReducers({
    counter: counterReducer,
    cart: cartReducer
});

export default allReducers;