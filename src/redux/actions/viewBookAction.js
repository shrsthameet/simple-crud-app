import {VIEW_BOOK_FAILED, VIEW_BOOK_REQUESTED, VIEW_BOOK_SUCCEEDED} from "./actionTypes";

//  Get all books list action creator
export const viewBookRequested = () => {
    return {
        type: VIEW_BOOK_REQUESTED,
    };
};

export const viewBookSucceeded = (bookDesc) => {
    return {
        type: VIEW_BOOK_SUCCEEDED,
        payload: bookDesc
    };
};

export const viewBookFailed = (error) => {
    return {
        type: VIEW_BOOK_FAILED,
        payload: error
    };
};