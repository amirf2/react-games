import React from "react";
import TicTacToe from "./Components/tic-tac-toe/Components/Game";
import MemoryGame from "./Components/memory-game/Game";

import Index from "./Components/Index"
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
    return(
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/tic-tac-toe" component={TicTacToe}/>
                <Route exact path="/memory-game" component={MemoryGame}/>
                <Route component={Index}/>
            </Switch>
        </BrowserRouter >
    )
}

export default App;
