import React from "react";

function Header({cards,clicks ,backToMenu}){
return (
<div className="header">
  <button onClick={()=>backToMenu()}>Menu</button>
  <div>
    <p>Cards remaining</p>
    <p>{clicks}/{cards}</p>
  </div>
</div>
);
}

export default Header;