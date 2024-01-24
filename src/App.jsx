import React from 'react'
import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/Menu';
import GameOver from './components/GameOver';
import Header from './components/Header'

function App() { 
  
  const allCards = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg",
"5.jpg","6.jpg","7.jpg","8.jpg","9.jpg",
"10.jpg","11.jpg","12.jpg","13.jpg","14.jpg",
"15.jpg","16.jpg","17.jpg","18.jpg","19.jpg"];

  const [Cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [reset, setReset] = useState(false);
  const [endMessage, setEndMessage] = useState("");
  const [gameOver, setGameOver] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  const Randomize = () => {
    const newArray = [];
    const oldArray = Cards;
    const numberOfElements = Cards.length;

    for(let i = 0; i < numberOfElements; i++) {
      let randomIndex = Math.floor(Math.random() * oldArray.length);
      newArray.push(oldArray[randomIndex]);
      oldArray.splice(randomIndex,1);
    }

    setCards(newArray);
  
    if(clicks === newArray.length - 1){
      setReset(true);
      setGameOver(true);
      setEndMessage("you win");
    }
  }

  const failGame = () =>{
    setReset(true);
    setGameOver(true);
    setEndMessage("you lose");
  }

  function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
      return true;
    }
  
    return false;
  }

  const onClick = (url) =>{
    if(gameOver === false) {
      setClicks(clicks + 1);
      const newArray = selectedCards;
      newArray.push(url);
      setSelectedCards(newArray);
      if(containsDuplicates(newArray)){
        failGame();
      }
      else{
        Randomize();
      }
    }
  }

  const resetGame = () => {
    setGameOver(false);
    setClicks(0);
    setSelectedCards([]);
    setReset(false);
    setEndMessage("");
    Randomize();
  }

  const startGame = (diff) => {
    switch(diff) {
      case "Easy":
        setGameOver(false);
        setShowMenu(false);
        const ezArray = allCards;
        ezArray.splice(0,10);
        setCards(ezArray);
        break;
      case "Mid":
        setGameOver(false);
        setShowMenu(false);
        const midArray = allCards;
        midArray.splice(0,5);
        setCards(midArray);
        break;
      case "Hard":
        setGameOver(false);
        setShowMenu(false);
        const HardArray = allCards;
        setCards(HardArray);
        break;
    } 
  }

  const backToMenu = () =>{
    setGameOver(true);
    setReset(false);
    setShowMenu(true);
    setClicks(0);
    setSelectedCards([]);
    setEndMessage("");
  }

return (
  <>
  {showMenu && <Menu startGame={startGame}/>}
  {!gameOver &&<Header cards={Cards.length} clicks={clicks} backToMenu={backToMenu}/>} 
  <div className='main'>
      {!gameOver &&
      Cards.map((card) => (
        <Card url={card} onClick={onClick}
        key = {Math.floor(Math.random() * 100000)}/>
      ))}
  </div>
  {reset && <GameOver onClick={resetGame} endMessage={endMessage} returnToMenu={backToMenu}/>}
  </>
)
}

export default App;
