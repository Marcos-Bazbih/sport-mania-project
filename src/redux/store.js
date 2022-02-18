import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import globalReducers from "./reducers";
const middlewares = [thunk];

const store = createStore(globalReducers, {
    shoes:[],
    shirts:[],
    pants:[],
    equipment:[]
},
    compose(applyMiddleware(...middlewares))
)

export default store;