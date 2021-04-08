import {DELETE_BOOKS_FAILED, DELETE_BOOKS_REQUESTED, DELETE_BOOKS_SUCCEEDED} from "./actionTypes";

//  Delete book action creator
export const deleteBookRequested = () => {
    return {
        type: DELETE_BOOKS_REQUESTED,
    };
};

export const deleteBookSucceeded = (deleteSuccess) => {
    return {
        type: DELETE_BOOKS_SUCCEEDED,
        payload: deleteSuccess
    };
};

export const deleteBookFailed = (error) => {
    return {
        type: DELETE_BOOKS_FAILED,
        payload: error
    };
};