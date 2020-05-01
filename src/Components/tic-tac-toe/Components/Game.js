import React, { useState, useEffect } from "react";
import Board from "./Board";
import * as gameMoves from "../Utils/GameMoves";


function Game() {

    const [squares, setSquares] = useState(Array(9).fill(gameMoves.emptySquare));
    const [turnNumber, setTurnNumber] = useState(1);
    const [startPlay, setStartPlay] = useState("player");
    const [level, setLevel] = useState("medium");

    useEffect(() => {
        if (computerTurn(turnNumber) && !checkWinner() && squares.some((x) => x === gameMoves.emptySquare)) {
            const strategy = level==="easy"? gameMoves.easyPlay: level==="medium"? gameMoves.mediumPlay : gameMoves.unbeatableStratagey
            setTimeout(() => strategy(squares, setSquares, turnNumber, setTurnNumber, startPlay), 300);
        }
    });


    const playerTurn = (turnNumber) => startPlay==="player"? turnNumber % 2 !== 0 : turnNumber % 2 === 0;
    const computerTurn = (turnNumber) =>  startPlay==="computer"? turnNumber % 2 !== 0 : turnNumber % 2 === 0;

    const handleClick = (i) => {
        if (playerTurn(turnNumber) && squares[i]===gameMoves.emptySquare) {
            const newSquares = squares.slice();
            if (squares[i] === gameMoves.emptySquare) {
                newSquares[i] = gameMoves.playerMark;
            }
            setSquares(newSquares);
            setTurnNumber(turnNumber + 1);
        }
    };

    const resetGame = (settings) => {
        const [player, difficulty] = settings;
        setSquares(Array(9).fill(gameMoves.emptySquare))
        setStartPlay(player);
        setTurnNumber(1);
        setLevel(difficulty);
    };

    const checkWinner = () => {
        for (const way of gameMoves.winningOptions) {
             const row =  squares[way[0]] +  squares[way[1]] +  squares[way[2]]
            if (row === "XXX" || row === "OOO")
                return squares[way[0]]==="X"? "Player" : "Computer";
        }
        return false;
    };

    const checkDraw = () => squares.every((x)=> x !== gameMoves.emptySquare);


    const winner = checkWinner();
    const draw = checkDraw();
    const winnerText = winner ? `Winner is: ${winner}` : draw? "Draw!" : "";

    return (
        <div>
            <Board
                squares={squares}
                handleClick={handleClick}
                winnerText={winnerText}
                gameOver={draw || winner}
                resetGame={resetGame}
            />
        </div>
    );
}

export default Game;
