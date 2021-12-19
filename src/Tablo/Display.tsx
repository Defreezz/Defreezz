import React from "react";

type DisplayType = {
    value:number
    maxValue:number
}

export function Display  ({value,maxValue}:DisplayType) {
    const displayStyle = (value === maxValue ? "displayMax" : "displayDefault")

    return (
        <div className={"display"}>
            <div className={displayStyle}>{value}</div>
        </div>
    )
}