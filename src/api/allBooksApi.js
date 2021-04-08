import {
    getAllBooksFailed,
    getAllBooksRequested,
    getAllBooksSucceeded
} from "../redux/actions/allBooksAction";
import {getRequest} from "../utils/apiHandler";

export const allBooksApi = () => async dispatch => {
    dispatch(getAllBooksRequested());

    const response = await getRequest("/data");

    if (response.status === 200) {
        const allBooks = response.data;
        dispatch(getAllBooksSucceeded(allBooks));
    } else {
        const error = response.statusText;
        dispatch(getAllBooksFailed(error));
    }
};