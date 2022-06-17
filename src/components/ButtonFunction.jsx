import React from "react";

const ButtonFunction = ({tulisan = "Standard", color = "red"}) => {
    return <button style={{ color: color }}>{tulisan}</button>
}

export default ButtonFunction;