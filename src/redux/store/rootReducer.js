import {combineReducers} from "redux";
import {allBookReducer} from "../reducers/allBookReducer";
import {addBookReducer} from "../reducers/addBookReducer";
import {deleteBookReducer} from "../reducers/deleteBookReducer";
import {bookByIdReducer} from "../reducers/bookByIdReducer";
import {editBookReducer} from "../reducers/editBookReducer";
import {viewBookReducer} from "../reducers/viewBookReducer";

export const rootReducer = combineReducers({
    allBookLists: allBookReducer,
    addNewBook: addBookReducer,
    deleteBook: deleteBookReducer,
    bookById: bookByIdReducer,
    editBook: editBookReducer,
    viewBook: viewBookReducer
});