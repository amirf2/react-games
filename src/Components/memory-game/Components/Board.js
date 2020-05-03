
import React, {Component} from 'react';
import Confetti from 'react-confetti'


var confetti = 
  <Confetti
    width={"1900"}
    height={"1000"}
    gravity={0.2}
    numberOfPieces={300}
  />

class Board extends Component {

    render(){
        const {images, boardSize, foundPairs} = this.props
        const fireworks = boardSize*2===foundPairs.length? confetti : undefined;
        return (
          <div onClick={this.handleClick}>
            {fireworks}
            <div className="container-fluid">  
              <div className="text-center">
               <img src="pictures/memory-game/titles/logo.png" alt="loading" className="image"/>
               </div>
                  <div className="row">
                     {images}
                   </div> 
           </div>
          </div>
        )
      }

}

export default Board