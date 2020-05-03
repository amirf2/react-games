import React from "react";
import GamePreview from "./GamePreview"

function Index() {
    return (
        <div className="container">
            <div className="text-center">
                <img className="mt-5 img-fluid" src="pictures/home/title-index.gif" alt="loading" />
            </div>
            <div className="container mt-5 mb-5">
                    <div className="row justify-content-center mb-5 mt-5">
                        <GamePreview game="memory-game"/>
                        <GamePreview  game="tic-tac-toe"/>
                    </div>
            </div>
        </div>
    )
}

export default Index