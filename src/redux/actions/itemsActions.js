export const GetData = (value) => (dispatch) => {
    dispatch({ type: "GET_DATA", payload: value });
}

export const AddItem = (value) => (dispatch) => {
    dispatch({ type: "ADD_ITEM", payload: value });
}

export const RemoveItem = (value) => (dispatch) => {
    dispatch({ type: "REMOVE_ITEM", payload: value });
}