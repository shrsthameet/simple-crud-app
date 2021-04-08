import {ALL_BOOKS_FAILED, ALL_BOOKS_REQUESTED, ALL_BOOKS_SUCCEEDED} from "./actionTypes";

//  Get all books list action creator
export const getAllBooksRequested = () => {
    return {
        type: ALL_BOOKS_REQUESTED,
    };
};

export const getAllBooksSucceeded = (allBooks) => {
    return {
        type: ALL_BOOKS_SUCCEEDED,
        payload: allBooks
    };
};

export const getAllBooksFailed = (error) => {
    return {
        type: ALL_BOOKS_FAILED,
        payload: error
    };
};