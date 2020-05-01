import React, {Component} from 'react';
import Option from './Option'


class Settings extends Component {

    render(props){
        return (
          <div>
                <Option optionType="Animal" key="animal" optionsData={["Cats","Dogs"]} selected={this.props.imageType} onChange={this.props.handleTypeChange}/>
                <br/>
                <Option optionType="Level" key="level" optionsData={["Easy","Medium","Advanced","Hard"]} selected={this.props.gameLevel} onChange={this.props.handleLevelChange}/>
                <br/>
                <button className="btn btn-success" onClick={this.props.handleResetGame}>Reset Game</button>
          </div>
        )
      }

}




export default Settings