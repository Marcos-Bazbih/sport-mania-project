import { combineReducers } from "redux";
import shoesReducer from "./shoes-reducer";
import shirtsReducer from "./shirts-reducer";
import pantsReducer from "./pants-reducer";
import equipmentReducer from "./equipment-reducer";

const globalReducers = combineReducers({
    shoes: shoesReducer,
    shirts: shirtsReducer,
    pants: pantsReducer,
    equipment: equipmentReducer,
});

export default globalReducers;