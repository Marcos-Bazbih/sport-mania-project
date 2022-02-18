import { combineReducers } from "redux";
import itemsReducer from "./items";

const globalReducers = combineReducers({
    items: itemsReducer
});

export default globalReducers;