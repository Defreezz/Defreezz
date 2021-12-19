import React, {useState} from 'react';
import './App.css';
import {Display} from "./Tablo/Display";
import {Button} from "./Buttons/Button/Button";


const startValue = 0
const maxValue = 5
const buttonName = ["INC","RESET"]

function App() {
    //BLL
    const [counter, setCounter] = useState<number>(startValue)
    const inc = () => {if(counter<=maxValue){setCounter(counter+1)}}
    const reset = () => {setCounter(0)}
    //UI
    return (
        <div className="App">
            <div className={"wrapper"}>
                <Display value={counter} maxValue={maxValue}/>

                <span className={"buttContainer"}>
            <Button  name={buttonName[0]} callback={inc} disabled={counter > 4}/>
            <Button  name={buttonName[1]} callback={reset} disabled={counter === 0}/>
                </span>
            </div>
        </div>
    );
}
export default App;
