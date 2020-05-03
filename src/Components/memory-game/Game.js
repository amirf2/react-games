import React, {Component} from 'react';
import MemoryGame from './Components/MemoryGame'
import Sidebar from './Components/Sidebar'


class Game extends Component {

  constructor(props) {

    super(props);

    this.state = {
        sidebarOpen: false,
        imageType: "cats",
        gameLevel: "hard",
        gameID: 0
    };
    
  }

  handleLevelChange = (event) =>{
    this.setState({gameLevel: event.target.value})
  }

  handleTypeChange = (event) => {
    this.setState({imageType: event.target.value})
  } 

  handleResetGame = (event) => {
    this.setState((prevState) => ({gameID: prevState.gameID+1}))
  } 

  render(){

    return (
      <div  className="container">
        {/*send handlers and game info to sidebar*/}
        <Sidebar
          handleLevelChange={this.handleLevelChange} 
          handleTypeChange={this.handleTypeChange} 
          handleResetGame={this.handleResetGame} 
          imageType={this.state.imageType} 
          gameLevel={this.state.gameLevel} 
        />
        <MemoryGame imageType={this.state.imageType} gameLevel={this.state.gameLevel} gameID={this.state.gameID}/>
        </div>
    )
  }

}

export default Game;

