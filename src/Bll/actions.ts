export enum ACTIONS_TYPES {
    SET_COUNTER = 'Counter/SET_COUNTER',
    SET_START_VALUE = 'Counter/SET_START_VALUE',
    SET_MAX_VALUE = 'Counter/SET_MAX_VALUE',
    SET_ERROR = 'Counter/SET_ERROR',
    SET_VERSION_COUNTER='Counter/SET_VERSION_COUNTER',
    SET_AFTER_SAVE_VALUES='Counter/SET_AFTER_SAVE_VALUES'
}
export type SetCounterType = {
    type:ACTIONS_TYPES.SET_COUNTER
    payload:{
        counter:number
    }
}
export type SetStartValueType = {
    type:ACTIONS_TYPES.SET_START_VALUE
    payload:{
        startValue:number
    }
}
export type SetMaxValueType = {
    type:ACTIONS_TYPES.SET_MAX_VALUE
    payload:{
        maxValue:number
    }
}
export type SetErrorValueType = {
    type:ACTIONS_TYPES.SET_ERROR
    payload:{
        error:string
    }
}
export type SetVersionCounterType = {
    type:ACTIONS_TYPES.SET_VERSION_COUNTER
    payload:{
        versionCounter:boolean
    }
}
export type SetAfterSaveValues = {
    type:ACTIONS_TYPES.SET_AFTER_SAVE_VALUES
    payload:{
        afterSaveMaxValue:number
        afterSaveStartValue:number
    }
}

export type CounterReducersTypes =
    SetCounterType |
    SetStartValueType |
    SetMaxValueType |
    SetErrorValueType |
    SetVersionCounterType |
    SetAfterSaveValues

export const setCounter = (counter:number):SetCounterType => {
    return {
        type:ACTIONS_TYPES.SET_COUNTER,
        payload:{
            counter,
        },
    }
}
export const setStartValue = (startValue:number):SetStartValueType => {
    return {
        type:ACTIONS_TYPES.SET_START_VALUE,
        payload:{
            startValue,
        },
    }
}
export const setMaxValue = (maxValue:number):SetMaxValueType => {
    return {
        type:ACTIONS_TYPES.SET_MAX_VALUE,
        payload:{
            maxValue,
        },
    }
}
export const setError = (error:string):SetErrorValueType => {
    return {
        type:ACTIONS_TYPES.SET_ERROR,
        payload:{
            error,
        },
    }
}
export const setVersionCounter = (versionCounter:boolean):SetVersionCounterType => {
    return {
        type:ACTIONS_TYPES.SET_VERSION_COUNTER,
        payload:{
            versionCounter,
        },
    }
}
export const setAfterSaveValues = (afterSaveMaxValue:number,afterSaveStartValue:number):SetAfterSaveValues => {
    return {
        type:ACTIONS_TYPES.SET_AFTER_SAVE_VALUES,
        payload:{
            afterSaveMaxValue,
            afterSaveStartValue,
        },
    }
}