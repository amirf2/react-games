import React, {Component} from 'react';
import {generateRandomNumbers} from '../utils'
import GameImage from './GameImage'
import Board from './Board'

const hardGamePairNums = 12 ; 
const advancedGamePairNums = 9; 
const mediumGamePairNums = 6; 
const easyGamePairNums = 3; 



class MemoryGame extends Component {

    constructor(props){
        super(props)
        this.state = {
          images  : [],
          selectedImages: [],
          foundPairs: [],
          boardSize: hardGamePairNums
        }
      }

      handleClick = (imageID) => {
        const {images, selectedImages, foundPairs} = this.state;
        //handle click only if the image is not already guessed or selected 
        if (!(foundPairs.includes(images[imageID]) || selectedImages.includes(images[imageID]))){
          //if it's the first image of the guessed pair then just add it to the selectedImage array
          if (selectedImages.length===0){
            this.setState({selectedImages: [images[imageID]]})
          //if it's is the second image of the guessed pair then check if both images are equal and reset selected images
          } else if (selectedImages.length===1){
              this.setState((prevState) => { 
                return {selectedImages: [...prevState.selectedImages,images[imageID]]}
              } , () => {
                        this.setState((prevState)=> {
                          const { selectedImages, foundPairs} = prevState;
                          //if both images are equal then add them to foundPairs array
                          if (selectedImages[0].url===selectedImages[1].url){
                              return {
                                foundPairs: [...foundPairs,selectedImages[0],selectedImages[1]],
                                selectedImages: []
                              }
                          } else setTimeout(() => {
                              this.setState({selectedImages: []})
                            }, 3000);
                      })})
            } 
      }
    }


      //convert the level game String to the number of images pairs
      stringLevelToNumber = () => {
        const {gameLevel} = this.props;
        return gameLevel==="hard"? hardGamePairNums : gameLevel==="advanced"? advancedGamePairNums : gameLevel==="medium"? mediumGamePairNums : easyGamePairNums;
      }


      updateBoard = () =>{
        const {imageType} = this.props;
        var boardSize = this.stringLevelToNumber();
        var urls = generateRandomNumbers(boardSize);
        urls = urls.map((element, index) => { 
          new Image().src =  "pictures/"+imageType+"/"+element+".jpg";
          return {key: index, url: "pictures/"+imageType+"/"+element+".jpg"}
        })
        this.setState({images: urls, boardSize: boardSize})
      }
      
      
      componentDidMount(){
        this.updateBoard();
      }
      
      
      render(){
        const {images, selectedImages, foundPairs, boardSize} = this.state;
        var imagesComp = images.map(element => {
          return <GameImage 
                    key={element.key} 
                    id={element.key}
                    image={element.url}  
                    handleClick={this.handleClick}
                    found={foundPairs.includes(element)}
                    selected={selectedImages.includes(element)}
                    boardSize={boardSize}
                  />
        });
        
        return (
          <Board images={imagesComp} foundPairs={this.state.foundPairs} boardSize={this.state.boardSize}/>
        )
      }
    
}

export default MemoryGame;   
