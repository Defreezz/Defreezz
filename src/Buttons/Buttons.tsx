import {Button} from "./Button/Button";

type ButtonsType = {
    callbackInc: () => void
    callbackReset:  () => void
    value:number
}

export function Buttons(props:ButtonsType) {
    return (
        <span className={"buttContainer"}>
            <Button value={props.value} name={"INC"} callback={props.callbackInc} disabled={props.value>4}/>
            <Button value={props.value} name={"RESET"} callback={props.callbackReset} disabled={props.value===0}/>
        </span>
    )
}