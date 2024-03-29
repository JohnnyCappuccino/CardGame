import React from "react";

function Card({url, onClick}){
return(
  <div className="cardParent">
      <div className="Card" 
        onClick={()=> onClick(url)}
        style={{backgroundImage: `url(/Images/${url})`}}>  
      </div>
  </div>
)

}


export default Card;