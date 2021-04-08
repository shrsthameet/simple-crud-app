import {BOOK_BY_ID_FAILED, BOOK_BY_ID_REQUESTED, BOOK_BY_ID_SUCCEEDED} from "./actionTypes";

//  Get all books list action creator
export const bookByIdRequested = () => {
    return {
        type: BOOK_BY_ID_REQUESTED,
    };
};

export const bookByIdSucceeded = (bookById) => {
    return {
        type: BOOK_BY_ID_SUCCEEDED,
        payload: bookById
    };
};

export const bookByIdFailed = (error) => {
    return {
        type: BOOK_BY_ID_FAILED,
        payload: error
    };
};