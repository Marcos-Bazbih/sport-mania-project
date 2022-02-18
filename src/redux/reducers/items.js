import itemsTypes from "../actions/itemsTypes";

const itemsReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case itemsTypes.ADD_TODO:
            return [...state, payload];

        default:
            return state;
    }
}

export default itemsReducer;