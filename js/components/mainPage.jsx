import React, {useState} from "react";
import ReactDOM from "react-dom";
import Original from "./original.jsx";
import Bonus from "./bonus.jsx";
import Rules from "./rules.jsx";

function MainPage(){
  const [displayOriginal,setOriginal] = useState("none")
  const [displayBonus,setBonus] = useState("none")
  const [displayButtons,setButtons] = useState("block")

  return(

  <div className="container-main">
      <div className = "main-images" style ={{display:displayButtons}}><img src = {"images/logo-bonus.svg"}/></div>
      <button className = " btn btn_xl" style ={{display:displayButtons}} onClick={()=>{setOriginal("flex");setButtons("none")}}>ORIGINAL</button>
      <button className = "btn btn_xl" style ={{display:displayButtons}} onClick={()=>{setBonus("flex");setButtons("none")}}>BONUS</button>
      <div className = "main-game" style={{display:displayOriginal}}> 
        <Original />
        <Rules game ={""} />
      </div>
      <div className = "main-game" style={{display:displayBonus}}>
        <Bonus />
        <Rules game ={"-bonus"} />
      </div>
  </div>
  )
}




export default MainPage;


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MainPage />, wrapper) : false;