import {EDIT_BOOKS_FAILED, EDIT_BOOKS_REQUESTED, EDIT_BOOKS_SUCCEEDED} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    status: "",
    error: null
};

export const editBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_BOOKS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                status: "",
                error: null
            };
        case EDIT_BOOKS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                status: action.payload,
                error: null
            };
        case EDIT_BOOKS_FAILED:
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