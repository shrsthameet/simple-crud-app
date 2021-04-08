import {addBooksFailed, addBooksRequested, addBooksSucceeded} from "../redux/actions/addBookAction";
import {postRequest} from "../utils/apiHandler";

export const addNewBook = (finalData, history) => async dispatch => {
    dispatch(addBooksRequested());

    const response = await postRequest("/data", finalData);

    if (response.status === 201) {
        const allBooks = response.data;
        dispatch(addBooksSucceeded(allBooks));
        history.push("/");
    } else {
        const error = "Something went wrong. Please try again later.";
        dispatch(addBooksFailed(error));
    }
};