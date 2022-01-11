import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

export type IGlobalStateType = ReturnType<typeof rootReducers>

export const rootReducers = combineReducers({
    counter:counterReducer,
})

export const store = createStore(rootReducers)


// @ts-ignore
window.store = store


