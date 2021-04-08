import {EDIT_BOOKS_FAILED, EDIT_BOOKS_REQUESTED, EDIT_BOOKS_SUCCEEDED} from "./actionTypes";

//  Get all books list action creator
export const editBookRequested = () => {
    return {
        type: EDIT_BOOKS_REQUESTED,
    };
};

export const editBookSucceeded = (successMsg) => {
    return {
        type: EDIT_BOOKS_SUCCEEDED,
        payload: successMsg
    };
};

export const editBookFailed = (error) => {
    return {
        type: EDIT_BOOKS_FAILED,
        payload: error
    };
};