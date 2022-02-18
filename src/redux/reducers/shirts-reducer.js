import itemsTypes from "../actions/itemsTypes";

const shirtsReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case itemsTypes.GET_DATA:
            return payload;

        default:
            return state
    }
}

export default shirtsReducer;