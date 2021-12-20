import React from "react";

type DisplayType = {
    value:number
    maxValue:number
    startValue:number
}

export function Display  ({value,maxValue,startValue}:DisplayType) {
    const displayStyle = (value === maxValue ? "displayMax" : "displayDefault")

    return (
        <div className={"display"}>
            {startValue > maxValue
            ?<div className={displayStyle}>{"АШИПКА"}</div>
            :<div className={displayStyle}>{value}</div>}
        </div>
    )
}