import {VIEW_BOOK_FAILED, VIEW_BOOK_REQUESTED, VIEW_BOOK_SUCCEEDED} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    data: {},
    error: null
};

export const viewBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_BOOK_REQUESTED:
            return {
                ...state,
                isLoading: true,
                data: {},
                error: null
            };
        case VIEW_BOOK_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            };
        case VIEW_BOOK_FAILED:
            return {
                ...state,
                isLoading: false,
                data: {},
                error: action.payload
            };
        default:
            return state;
    }
};