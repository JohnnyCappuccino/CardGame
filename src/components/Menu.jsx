import React from "react";
import { useState } from "react";

let ezClass="notSelected";
let midClass="Selected";
let hardClass="notSelected";

const selectDiff = (diff) =>{
  switch(diff){
    case "ez":
      ezClass="Selected"
      midClass="notSelected"
      hardClass="notSelected"
      break;
    case "mid":
      ezClass="notSelected"
      midClass="Selected"
      hardClass="notSelected"
      break;
    case "hard":
      ezClass="notSelected"
      midClass="notSelected"
      hardClass="Selected"
      break;
  }
}

function Menu({startGame}){

  const [gameMode,setGameMode] = useState("Mid");

  const changeDifficulty  =  (NewDiff) =>{
    setGameMode(NewDiff);
    console.log(gameMode);
  }

  return(
    <div className="menu">
      <h1>Please select game mode</h1>
      <div className="gameModes">
        <button onClick={() => {changeDifficulty("Easy"); selectDiff("ez");}} className={ezClass}>Easy</button>
        <button onClick={() => {changeDifficulty("Mid"); selectDiff("mid");}} className={midClass}>Medium</button>
        <button onClick={() => {changeDifficulty("Hard"); selectDiff("hard");}} className={hardClass}>Hard</button>
      </div>
      <button className="buttonMain" onClick={() => startGame(gameMode)}>Start Game</button>
    </div>
  )
}

export default Menu;