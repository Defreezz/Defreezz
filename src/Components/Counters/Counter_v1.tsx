import React, {ChangeEvent} from 'react';
import {Button} from "../Buttons/Button/Button";
import {Display} from "../Tablo/Display";

type CounterType = {
    counter: number
    maxValue: number
    startValue: number
    error: string
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onFocusHandler: () => void
    saveSettingsHandler: () => void
    inc: () => void
    reset: () => void
};

export function CounterV1({
                              counter,
                              maxValue,
                              startValue,
                              error,
                              maxValueHandler,
                              startValueHandler,
                              onFocusHandler,
                              saveSettingsHandler,
                              inc,
                              reset,
                          }: CounterType) {
    const spanError = maxValue < startValue || maxValue < 0 ? "spanError" : "spanDefault"
    const inputError = maxValue < startValue || maxValue < 0 ? "inputSetError" : "inputSet"
    return (
        <div className={"v1"}>
            <div className={"wrapper"}>
                <div className={"display"}>
                    <span
                        className={spanError}>
                        Max Value
                    </span>
                   <input
                        onFocus={onFocusHandler}
                        value={maxValue}
                        className={inputError}
                        min={0}
                        onChange={maxValueHandler}
                    />
                    <br/>
                    <span
                        className={spanError}>
                        Start Value
                    </span>
                    <input
                        onFocus={onFocusHandler}
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
                        callback={saveSettingsHandler}
                    />
                </span>
            </div>
            <div>
                <div className={"wrapper"}>
                    {error
                        ? <div className={"display"}>
                            <div className={"error"}>{error}</div>
                        </div>
                        : <Display value={counter} maxValue={maxValue}/>
                    }
                    <span className={"buttContainer"}>
                    <Button name={"INC"} callback={inc} disabled={error ? true : false || counter === maxValue}/>
                    <Button name={"RESET"} callback={reset} disabled={error ? true : false || counter === startValue}/>
                </span>
                </div>
            </div>
        </div>
    );
}

