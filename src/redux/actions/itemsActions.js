export const addItem = (value) => (dispatch) => {
    dispatch({ type: "ADD_TODO", payload: value });
}

export const RemoveItem = (value) => (dispatch) => {
    dispatch({ type: "REMOVE_TODO", payload: value });
}