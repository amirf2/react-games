import React from "react";
import {Link} from "react-router-dom";


function Index() {
    return (
        <div className="container">
            <div className="text-center">
                <img className="mt-5 img-fluid" src="title-index.gif" alt="loading" />
            </div>
                <div class="container mt-5 mb-5">
                    <div class="row justify-content-center">
                            <div className="col-6 text-center mt-5 mb-5">
                                <Link to="/memory-game">
                                    <img className="image-intro" src="memory-game-intro.jpg" alt="loading" />
                                </Link>
                            </div>
                            <div className="col-6 text-center">
                                <Link to="/tic-tac-toe">
                                    <img className="image-intro2 mt-5" src="tic-tac-toe-intro.jpg" alt="loading" />
                                </Link>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Index