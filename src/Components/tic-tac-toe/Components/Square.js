import React from "react";

function Square({ value, onClick, gameOver}) {
    const color = value==="X" ? "player" : "computer"
    const handleClick = gameOver? null : onClick;
    return (
        <button className={`square ${color}`} onClick={handleClick}>
            {value}
        </button>
    );
}

export default Square;

