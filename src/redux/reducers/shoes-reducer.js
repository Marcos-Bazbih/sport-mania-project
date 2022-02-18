import itemsTypes from "../actions/itemsTypes";
import { PostShoe, DeleteShoe } from "../../services/shoes-service.service";

const shoesReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case itemsTypes.GET_DATA:
            return payload;

        case itemsTypes.ADD_ITEM:
            return PostShoe(payload);

        case itemsTypes.REMOVE_ITEM:
            return DeleteShoe(payload);

        default:
            return state
    }
}

export default shoesReducer;