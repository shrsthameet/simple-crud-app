import {DELETE_BOOKS_FAILED, DELETE_BOOKS_REQUESTED, DELETE_BOOKS_SUCCEEDED} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    status: "",
    error: null
};

export const deleteBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_BOOKS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                status: "",
                error: null
            };
        case DELETE_BOOKS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                status: action.payload,
                error: null
            };
        case DELETE_BOOKS_FAILED:
            return {
                ...state,
                isLoading: false,
                status: "",
                error: action.payload
            };
        default:
            return state;
    }
};