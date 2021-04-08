import {ALL_BOOKS_FAILED, ALL_BOOKS_REQUESTED, ALL_BOOKS_SUCCEEDED} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    data: [{}],
    error: null
};

export const allBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_BOOKS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                data: [{}],
                error: null
            };
        case ALL_BOOKS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            };
        case ALL_BOOKS_FAILED:
            return {
                ...state,
                isLoading: false,
                data: [{}],
                error: action.payload
            };
        default:
            return state;
    }
};