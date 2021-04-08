import {bookByIdFailed, bookByIdRequested, bookByIdSucceeded} from "../redux/actions/bookByIdAction";
import {getRequest} from "../utils/apiHandler";

export const bookById = (id) => async dispatch => {
    dispatch(bookByIdRequested());

    const response = await getRequest(`/data/${id}`);

    if (response.status === 200) {
        const bookById = response.data;
        dispatch(bookByIdSucceeded(bookById));
    } else {
        const error = "Something went wrong. Cannot get the book you have requested.";
        dispatch(bookByIdFailed(error));
    }
};