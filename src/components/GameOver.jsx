import React from "react";

function GameOver({onClick, endMessage, returnToMenu}){
  return(
    <div className="menu">
      <h1>{endMessage}</h1>
      <div>
        <button className="buttonMain" onClick={onClick}>Play Again</button>
        <button className="buttonMain" onClick={returnToMenu}>Menu</button>
      </div>
    </div>
  )
}

export default GameOver;