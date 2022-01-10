import {ACTIONS_TYPES, CounterReducersTypes} from "./actions";

export type InitialStateType = {
    counter:number
    startValue: number
    maxValue: number
    versionCounter:boolean
    error:string
}
const initialState = {
    counter:0,
    startValue: 0,
    maxValue:0,
    versionCounter:false,
    error:'',
}

export const counterReducer =(state:InitialStateType = initialState, action:CounterReducersTypes):InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.SET_COUNTER:
        case ACTIONS_TYPES.SET_START_VALUE:
        case ACTIONS_TYPES.SET_MAX_VALUE:
        case ACTIONS_TYPES.SET_ERROR:
        case ACTIONS_TYPES.SET_VERSION_COUNTER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}