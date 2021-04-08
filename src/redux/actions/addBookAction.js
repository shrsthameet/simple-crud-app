import {ADD_BOOK_FAILED, ADD_BOOK_REQUESTED, ADD_BOOK_SUCCEEDED} from "./actionTypes";

//  Get all books list action creator
export const addBooksRequested = () => {
    return {
        type: ADD_BOOK_REQUESTED,
    };
};

export const addBooksSucceeded = (allBooks) => {
    return {
        type: ADD_BOOK_SUCCEEDED,
        payload: allBooks
    };
};

export const addBooksFailed = (error) => {
    return {
        type: ADD_BOOK_FAILED,
        payload: error
    };
};