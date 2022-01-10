import React, {ChangeEvent, useState} from "react";
import {Display} from "../Tablo/Display";
import {Button} from "../Buttons/Button/Button";

type CounterType = {
    counter:number
    maxValue:number
    startValue:number
    maxValueHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    startValueHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    saveSettings:()=>void
    inc:()=>void
    reset:()=>void



};

export function CounterV2({
                              counter,
                              maxValue,
                              startValue,
                              maxValueHandler,
                              startValueHandler,
                              saveSettings,
                              inc,
                              reset,
                          }:CounterType) {

    const [mode, setMode] = useState<boolean>(true)
    const spanError = maxValue < startValue || maxValue < 0 ? "spanError" : "spanDefault"
    const inputError = maxValue < startValue || maxValue < 0 ? "inputSetError" : "inputSet"

    return (
            mode
            ? <div >
            <div className={"wrapper"}>
                <Display value={counter} maxValue={maxValue} />
                <span className={"buttContainer"}>
                    <Button name={"INC"} callback={inc} disabled={counter >= maxValue}/>
                    <Button name={"RESET"} callback={reset} disabled={counter === startValue}/>
                    <Button name={"SET"} callback={() => {setMode(!mode)}}/>
                </span>
            </div>
        </div>
            : <div className={"wrapper"}>
            <div className={"display"}>
                <span className={spanError}>Max Value </span>
                <input
                    value={maxValue}
                    min={0}
                    className={inputError}
                    onChange={maxValueHandler}
                />
                <br/>
                <span className={spanError}>Start Value</span>
                <input
                    value={startValue}
                    className={inputError}
                    min={0}
                    onChange={startValueHandler}
                />
            </div>
            <span className={"buttContainerSet"}>
                    <Button
                        disabled={startValue >= maxValue || startValue < 0}
                        name={"SAVE"}
                        callback={()=>{setMode(!mode);saveSettings()}}
                    />
                </span>
        </div>

    )}