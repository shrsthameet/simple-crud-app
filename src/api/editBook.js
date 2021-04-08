import {editBookFailed, editBookRequested, editBookSucceeded} from "../redux/actions/editBookAction";
import {updateRequest} from "../utils/apiHandler";

export const editBook = (id, formData, history) => async dispatch => {
    dispatch(editBookRequested());

    const response = await updateRequest(`/data/${id}`, formData);

    if (response.status === 200) {
        const successMsg = "Book updated successfully";
        dispatch(editBookSucceeded(successMsg));
        history.push("/");
    } else {
        const error = "Something went wrong. Cannot get the book you have requested.";
        dispatch(editBookFailed(error));
    }
};