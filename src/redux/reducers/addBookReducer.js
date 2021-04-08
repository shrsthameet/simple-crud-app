import {ADD_BOOK_FAILED, ADD_BOOK_REQUESTED, ADD_BOOK_SUCCEEDED} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    status: "",
    data: [{}],
    error: null
};

export const addBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_REQUESTED:
            return {
                ...state,
                isLoading: true,
                status: "",
                data: [{}],
                error: null
            };
        case ADD_BOOK_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                status: "New book added to database.",
                data: action.payload,
                error: null
            };
        case ADD_BOOK_FAILED:
            return {
                ...state,
                isLoading: false,
                status: "",
                data: [{}],
                error: action.payload
            };
        default:
            return state;
    }
};