import {viewBookFailed, viewBookRequested, viewBookSucceeded} from "../redux/actions/viewBookAction";
import {getRequest} from "../utils/apiHandler";

export const viewBook = (bookID) => async dispatch => {
    dispatch(viewBookRequested());

    const response = await getRequest(`/data/${bookID}`);

    if (response.status === 200) {
        const bookDesc = response.data;
        dispatch(viewBookSucceeded(bookDesc));
    } else {
        const error = "Something went wrong. Cannot get the book.";
        dispatch(viewBookFailed(error));
    }
};