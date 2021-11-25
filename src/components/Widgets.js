import React from "react"

export const Loader = () => {
    let spinner = []
    for (let i = 0; i < 12; i++) { spinner.push(<div key={`lds_${i}`}></div>) }
    return <div className="lds-spinner">{spinner}</div>
}