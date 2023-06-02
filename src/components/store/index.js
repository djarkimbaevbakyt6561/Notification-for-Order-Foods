import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./basket";
import { mealsReducer } from "./meals";
import { modalReducer } from "./modal";
import { snackBarReducer } from "./snackBar";

const rootReducer = combineReducers({
    basket: basketReducer,
    meals: mealsReducer,
    snackBar: snackBarReducer,
    modal: modalReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))