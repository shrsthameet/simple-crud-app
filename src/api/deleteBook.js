import {deleteBookFailed, deleteBookRequested, deleteBookSucceeded} from "../redux/actions/deleteBookAction";
import {deleteRequest} from "../utils/apiHandler";

export const deleteBook = (id, handleClose) => async dispatch => {
    dispatch(deleteBookRequested());

    const response = await deleteRequest(`/data/${id}`);
    if (response.status === 200) {
        const successMsg = "Successfully deleted book.";
        dispatch(deleteBookSucceeded(successMsg));
        handleClose();
    } else {
        const error = response.statusText;
        dispatch(deleteBookFailed(error));
    }
};