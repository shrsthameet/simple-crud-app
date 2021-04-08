import {rootReducer} from "./rootReducer";
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;