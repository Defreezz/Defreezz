import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Tablo/Display";
import {Button} from "./Buttons/Button/Button";



function App () {
    //BLL

    const [counter, setCounter] = useState<number>(0)
    const inc = () => {if (counter < maxValue) {setCounter(counter + 1) }}
    const reset = () => {setCounter(startValue)}


    const  [startValue,setStartValue] = useState<number>(0)


    const [maxValue, setMaxValue] = useState<number>(0)
    const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {setMaxValue(Number(e.currentTarget.value))}


    //  локалстораж
    const setLocalStorage = () => {
        localStorage.setItem("MaxValue",JSON.stringify(maxValue))
        localStorage.setItem("StartValue",JSON.stringify(startValue))
    }
    useEffect(() => {getLocalStorageHandler()},[])

    const getLocalStorageHandler = () => {
        let max = localStorage.getItem("MaxValue")
        let min = localStorage.getItem("StartValue")
        setMaxValue(max && JSON.parse(max))
        setStartValue(min && JSON.parse(min))
        setCounter(min && JSON.parse(min))
        max ===null && setCounter(0)
        max===null &&setStartValue(0)
        max===null &&setMaxValue(0)
    }


    // стейт отображения настроек счетчика
    const [mode, setMode] = useState<boolean>(true)
    const saveSettings = () => {
        setMode(!mode)
        setLocalStorage()
        setCounter(startValue)
    }
//логика ошибки


    //UI
    return (
        mode
            ? <div className="App">
                <div className={"wrapper"}>
                    <Display value={counter} maxValue={maxValue} startValue={startValue}/>
                    <span className={"buttContainer"}>
                    <Button name={"INC"} callback={inc} disabled={counter >= maxValue}/>
                    <Button name={"RESET"} callback={reset} disabled={counter === startValue}/>
                    <Button name={"SET"} callback={() => {setMode(!mode)}}/>
                </span>
                </div>
            </div>
            : <div className="App">
                <div className={"wrapper"}>
                    <div className={"display"}>

                        <span className={maxValue<=startValue?"spanError":""}>Max Value </span>
                        <input
                            value={maxValue}
                            className={maxValue<=startValue?"inputSetError":"inputSet"}
                            type={"number"}
                            onChange={maxValueHandler}
                        />
                        <br/>
                        <span className={maxValue<=startValue?"spanError":""}>Start Value</span>
                        <input
                            value={startValue}
                            className={maxValue<=startValue || startValue < 0?"inputSetError":"inputSet"}
                            type={"number"}
                            onChange={(e)=>{setStartValue(Number(e.currentTarget.value)); setCounter(Number(e.currentTarget.value))}}
                        />
                    </div>

                    <span className={"buttContainerSet"}>
                    <Button
                        disabled={startValue >= maxValue || startValue < 0}
                        name={"SAVE"}
                        callback={saveSettings}

                    />
                </span>
                </div>
            </div>
    )

}

export default App;
