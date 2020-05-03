import React from "react";
import {Link} from "react-router-dom";


function GamePreview({game}) {
    return (
        <div className="col-6 col-md-6 mb-5 mt-5">
            <div className="mb-4">
                <Link to={`/${game}`}>
                    <img className="card-img-top" src={`pictures/home/${game}-intro.jpg`} alt="loading" />
                </Link>
            </div>
        </div>
    )
}

export default GamePreview;






