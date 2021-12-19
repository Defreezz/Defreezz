import React from "react";

type ButtonType = {
    name: string
    callback: () => void
    disabled:boolean
}

export function Button ({name,callback,disabled}:ButtonType) {

    return (
        <button
            className={"butt"}
            disabled={disabled}
            onClick={callback}>
            {name}
        </button>
    )
}