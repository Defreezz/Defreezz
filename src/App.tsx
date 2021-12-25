import React, { useEffect, useState} from 'react';
import './App.css';
import {CounterV2} from "./Counter_v2";
import {Switch} from "@material-ui/core";
import {CounterV1} from "./Counter_v1";


function App() {
//логика отображения версиии счетчика
    const [changeVersion, setChangeVersion] = useState<boolean>(false)

//localstorage
    const setLocalStorage = (version:boolean) => {
        localStorage.setItem("VersionCounter", JSON.stringify(version))    }

    const getLocalStorageHandler = () => {
        let version = localStorage.getItem("VersionCounter")
        setChangeVersion(version && JSON.parse(version))

    }

    useEffect(() => {
        getLocalStorageHandler()
        //setLocalStorage()
    }, [])
    useEffect(() => {
        setLocalStorage(changeVersion)
    }, [changeVersion])



//UI

    return (
        changeVersion
            ? <div className="App">
                <div className={"switch"}>
                <span>
                    v1
                    <Switch
                        checked={changeVersion}
                        onChange={() => { setChangeVersion(!changeVersion);setLocalStorage(changeVersion)}}
                    />
                    v2
                </span>
                </div>
                <CounterV2/>
            </div>
            : <div className="App">
                <div className={"switch"}>
                   <span>
                    v1
                    <Switch
                        checked={changeVersion}
                        onChange={() => {setChangeVersion(!changeVersion);setLocalStorage(changeVersion)}}
                    />
                    v2
                </span>


                </div>
                <CounterV1/>
            </div>
    )


}

export default App;
