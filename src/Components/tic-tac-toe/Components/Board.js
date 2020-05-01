import React from "react";
import Square from "./Square";
import Settings from "./Settings";

function Board({squares, winnerText, handleClick, gameOver, resetGame}) {
    const squaresComp = squares.map((x, i) => (
        <Square key={i} value={squares[i]} onClick={() => handleClick(i)} gameOver={gameOver} />
    ));

    return (
        <div>
            <div className="d-flex justify-content-center mt-5 mb-3">
                <div className="text-center">
                <img src="title.png" alt="loading" className="image"/>
               </div>

            </div>
            <div className="board-row">{squaresComp.slice(0, 3)}</div>
            <div className="board-row">{squaresComp.slice(3, 6)}</div>
            <div className="board-row">{squaresComp.slice(6, 9)}</div>
            <div className="d-flex justify-content-center mt-5">
            </div>
              <Settings resetGame={resetGame}/>
              <h3 className="mt-5 text-center"><strong>{winnerText}</strong></h3>

        </div>
    );
}

export default Board;
