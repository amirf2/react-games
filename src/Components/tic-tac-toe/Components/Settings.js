import React, {useState} from "react";
import Category from "./SettingsForm/Category"

function Settings({resetGame}) {
    
    const [settings,setSettings] = useState(["player","medium"]);

    const handleOptionChange = (e) => {
        const {name,value} = e.target;
        const [player, diffcultiy] = settings;
        if (name==="playsFirst"){
            setSettings([value,diffcultiy]);
        }
        if (name==="difficulty"){
            setSettings([player,value]);
        }    
    }

    return (
            <div>
                <div className="d-flex justify-content-center">
                    <h3>Settings</h3>
                </div>
                <Category name="playsFirst" onChange={handleOptionChange} checked={settings[0]} label={"Plays First:"} data={["player","computer"]}/>
                <Category name="difficulty" onChange={handleOptionChange} checked={settings[1]} label={"Difficulty:"} data={["easy","medium","hard"]}/>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-sm btn-primary" onClick={() => resetGame(settings)}>Reset Game</button>
                </div>
            </div>
    );
}

export default Settings;




