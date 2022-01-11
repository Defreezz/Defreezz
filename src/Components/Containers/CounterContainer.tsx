import React, {ChangeEvent, Dispatch, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "../../Bll/selectors";
import {
    CounterReducersTypes, setAfterSaveValues,
    setCounter,
    setError,
    setMaxValue,
    setStartValue,
    setVersionCounter
} from "../../Bll/actions";
import {CounterV1} from "../Counters/Counter_v1";
import {CounterV2} from "../Counters/Counter_v2";
import {Switch} from "@material-ui/core";


export function CounterContainer() {

    const {
        counter,
        startValue,
        maxValue,
        error,
        versionCounter,
        afterSaveMaxValue,
        afterSaveStartValue,
    } = useSelector(selectCounter)
    const dispatch = useDispatch<Dispatch<CounterReducersTypes>>()



    //const [counter, setCounter] = useState<number>(0)
    const inc = () => {if (counter < maxValue) {dispatch(setCounter(counter + 1))}}
    const reset = () => {dispatch(setCounter(startValue))}

    // const [startValue, setStartValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(0)


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (Number.isInteger(+value)) {//проверка на целое число
            dispatch(setMaxValue(Number(e.currentTarget.value)))
        }
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if(Number.isInteger(+value)) {//проверка на целое число
            dispatch(setStartValue(Number(value)))
            dispatch(setCounter(Number(value)))
        }
    }
//error
    //const [error,setError] = useState<string>('')
    const onFocusHandler = () => {
        dispatch(setAfterSaveValues(0,0))
        dispatch(setError('enter values and press "save"'))}

//button save (counter v1)
    const saveSettingsHandler = () => {
        setLocalStorageValues()
        dispatch(setError(''))
        dispatch(setCounter(startValue))
        dispatch(setAfterSaveValues(maxValue,startValue))

    }
//button set (counter v2)
    const setSettingsHandler = () => {
        setLocalStorageValues()
        dispatch(setCounter(startValue))
        dispatch(setAfterSaveValues(maxValue,startValue))
    }

//useEffects
    //забирает из localstorage стартовое состояния или зануляет, если не проходит валидацию
    useEffect(() => { getLocalStorageHandler()}, [])

    useEffect(() => { setLocalStorageVersionCounter(versionCounter) }, [versionCounter])

//localstorage
    const setLocalStorageValues = () => {
        localStorage.setItem("MaxValue", JSON.stringify(maxValue))
        localStorage.setItem("StartValue", JSON.stringify(startValue))
        localStorage.setItem("afterSaveStartValue", JSON.stringify(startValue))
        localStorage.setItem("afterSaveMaxValue", JSON.stringify(maxValue))
    }
    const setLocalStorageVersionCounter = (version:boolean) => {
        localStorage.setItem("VersionCounter", JSON.stringify(version))}

    const getLocalStorageHandler = () => {
        let max = localStorage.getItem("MaxValue")
        let min = localStorage.getItem("StartValue")
        let version = localStorage.getItem("VersionCounter")

        dispatch(setVersionCounter(version && JSON.parse(version)))
        //если в localstorage нет значений
        if(max === null||min===null){
            dispatch(setMaxValue(0))
            dispatch(setStartValue(0))
            dispatch(setCounter(0))
            dispatch(setAfterSaveValues(0,0))
        }
        //если значения есть
        else if(Number.isInteger(Number(max) && Number(min))){
            dispatch(setMaxValue(max && JSON.parse(max)))
            dispatch(setStartValue(min && JSON.parse(min)))
            dispatch(setCounter(min && JSON.parse(min)))
            dispatch(setAfterSaveValues(max && JSON.parse(max),min && JSON.parse(min)))
        }
        //если в localstorage !number
        else{
            dispatch(setCounter(0))
            dispatch(setStartValue(0))
            dispatch(setMaxValue(0))
        }
    }

//UI
    return (
        versionCounter
            ?<div className="App">
            <div className={"switch"}>
            <span>
                v1
                <Switch
                    checked={versionCounter}
                    onChange={() => {
                        dispatch(setVersionCounter(!versionCounter));
                        setLocalStorageVersionCounter(versionCounter)}}
                />
                v2
            </span>
            </div>
                <CounterV2
                    startValue={startValue}
                    counter={counter}
                    maxValue={maxValue}
                    maxValueHandler={maxValueHandler}
                    inc={inc}
                    reset={reset}
                    startValueHandler={startValueHandler}
                    saveSettings={setSettingsHandler}
                />
        </div>
            : <div className="App">
                <div className={"switch"}>
                    <span>
                        v1
                        <Switch
                            checked={versionCounter}
                            onChange={() => {
                                dispatch(setVersionCounter(!versionCounter));
                                setLocalStorageVersionCounter(versionCounter)}}
                        />
                        v2
                    </span>
                </div>
                <CounterV1
                    afterSaveMaxValue={afterSaveMaxValue}
                    afterSaveStartValue={afterSaveStartValue}
                    startValue={startValue}
                    counter={counter}
                    maxValue={maxValue}
                    inc={inc}
                    reset={reset}
                    error={error}
                    maxValueHandler={maxValueHandler}
                    startValueHandler={startValueHandler}
                    onFocusHandler={onFocusHandler}
                    saveSettingsHandler={saveSettingsHandler}
                />
            </div>
    )
}