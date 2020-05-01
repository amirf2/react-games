
export const playerMark = "X";
export const computerMark = "O";
export const emptySquare = "";
export const CENTER_OR_DIAGONAL_SQUARE = 5
export const RANDOM_SQAURE = 10
export const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


export function putOnSquare(newSquares, position){
    let done = false;
    let directon = position === CENTER_OR_DIAGONAL_SQUARE? 2 : 1
    while (!done){
        const centerOrDiagonal = Math.floor(Math.random() * position);  
        if (newSquares[centerOrDiagonal*directon] === emptySquare){
            newSquares[centerOrDiagonal*directon] = computerMark;
            done=true;
        }
    }
}

export const easyPlay = (squares, setSquares, turnNumber,setTurnNumber) => {

    const newSquares = squares.slice();
    putOnSquare(newSquares,RANDOM_SQAURE);
    setTurnNumber(turnNumber + 1);
    setSquares(newSquares);
}

export const mediumPlay = (squares, setSquares, turnNumber,setTurnNumber) => {
    const newSquares = squares.slice();
    if(!canWinOrBlock(squares, newSquares))
        putOnSquare(newSquares,RANDOM_SQAURE);
    setTurnNumber(turnNumber + 1);
    setSquares(newSquares);
}

export const makeTwoOutOfThreeMarks = (squares, newSquares) => {
    for (const way of winningOptions) {
        const row =  squares[way[0]] +  squares[way[1]] +  squares[way[2]];
        if (row === computerMark){
            const index = squares[way[0]]===""? way[0] : way[1];
            newSquares[index] = computerMark;
            break;
        }    
    }
}

export const canBlockPlayer = (squares) => {
    for (const way of winningOptions) {
        if (
            squares[way[0]] + squares[way[1]] + squares[way[2]] ===
            `${playerMark}${playerMark}`
        ) {
            return way[way.findIndex((x) => squares[x] === emptySquare)];
        }
    }
    return -1;
};

export const canComputerWin = (squares) => {
    for (const way of winningOptions) {
        if (
            squares[way[0]] + squares[way[1]] + squares[way[2]] ===
            `${computerMark}${computerMark}`
        ) {
            return way[way.findIndex((x) => squares[x] === emptySquare)];
        }
    }
    return -1;
};


export const unbeatableStratageyComputerFirst = (squares, newSquares, turnNumber) => {
    if (turnNumber===1){
        putOnSquare(newSquares, CENTER_OR_DIAGONAL_SQUARE);
    }

    if (turnNumber===3){
        if (newSquares[4]===emptySquare){
            newSquares[4]=computerMark;
        } else {
            putOnSquare(newSquares, CENTER_OR_DIAGONAL_SQUARE);
        }

    }

    if (turnNumber===5){
        if (!canWinOrBlock(squares, newSquares))
            putOnSquare(newSquares, CENTER_OR_DIAGONAL_SQUARE)
    }

    if (turnNumber===7){
        if (!canWinOrBlock(squares, newSquares))
            makeTwoOutOfThreeMarks(squares, newSquares)
    }   

    if (turnNumber===9){
        const index = squares.findIndex((x) => x===emptySquare);
        newSquares[index]=computerMark;
    }
}

export const unbeatableStratageyPlayerFirst = (squares, newSquares, turnNumber) => {
    if (turnNumber===2){
        if (newSquares[4]===emptySquare){
            newSquares[4]=computerMark;
        } else {
            putOnSquare(newSquares, CENTER_OR_DIAGONAL_SQUARE)
        }
    }

    if (turnNumber===4){
        if (!canWinOrBlock(squares, newSquares)){
            if (newSquares[4]===computerMark){
                let done = false;
                while (!done){
                    let centerOrDiagonal = Math.floor(Math.random() * 4);  
                    centerOrDiagonal += centerOrDiagonal + 1;
                    if (newSquares[centerOrDiagonal] === emptySquare){
                        newSquares[centerOrDiagonal] = computerMark;
                        done=true;
                    }
                }
            } else putOnSquare(newSquares,CENTER_OR_DIAGONAL_SQUARE)
        }
    }

    if (turnNumber===6){
        if (!canWinOrBlock(squares, newSquares))
            putOnSquare(newSquares,RANDOM_SQAURE)
    }

    if (turnNumber===8){
        if (!canWinOrBlock(squares, newSquares))
            putOnSquare(newSquares,RANDOM_SQAURE)
    }
}

export const unbeatableStratagey = (squares, setSquares, turnNumber, setTurnNumber, startPlay) =>{
    let newSquares = squares.slice();
    if (startPlay === "computer"){
        unbeatableStratageyComputerFirst(squares, newSquares, turnNumber);
    } else {
        unbeatableStratageyPlayerFirst(squares, newSquares, turnNumber);
    }
    setTurnNumber(turnNumber + 1);
    setSquares(newSquares);

}

export const canWinOrBlock = (squares, newSquares) => {
    const index = canComputerWin(squares);
    if (index !==-1){
        newSquares[index]=computerMark;
    } else {
        const blockPlayerIndex = canBlockPlayer(squares);
        if (blockPlayerIndex !== -1) {
            newSquares[blockPlayerIndex] = computerMark;
        }
        else return false;
    }
    return true; 
}
