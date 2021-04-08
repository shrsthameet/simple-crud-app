import {BOOK_BY_ID_FAILED, BOOK_BY_ID_REQUESTED, BOOK_BY_ID_SUCCEEDED} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    data: {},
    error: null
};

export const bookByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_BY_ID_REQUESTED:
            return {
                ...state,
                isLoading: true,
                data: {},
                error: null
            };
        case BOOK_BY_ID_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            };
        case BOOK_BY_ID_FAILED:
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