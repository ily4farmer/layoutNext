import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, legacy_createStore  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksReducer } from "./booksReducer";

const reducer = combineReducers({
    books: booksReducer
})


type RootState = ReturnType<typeof reducer>

export const store = legacy_createStore(reducer, composeWithDevTools()) 

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector