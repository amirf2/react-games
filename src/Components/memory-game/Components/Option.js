import React, {Component} from 'react';

const typeTitle = "pictures/titles/type.png"
const levelTitle = "pictures/titles/level.png"


class Option extends Component {


    render(){
        const {optionType, optionsData, selected, onChange} = this.props;
        var res = optionsData.map((name) =>
            <div key={name}>
                <input 
                    type="radio"
                    className="big-radio-btn"
                    name={optionType}
                    value={name.toLowerCase()}
                    checked={selected === name.toLowerCase()}
                    onChange ={onChange}
                />
                <b className="font">{name}</b>
            </div>
        )

        return (
            <div>
                {optionType==="Animal"?  <img src={typeTitle} style={{width: "50%"}} alt="none" /> : <img src={levelTitle} style={{width: "50%"}} alt="none" />}
                {res}   
            </div>
        )
      }



}

export default Option