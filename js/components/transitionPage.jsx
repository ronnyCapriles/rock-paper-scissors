import React, { useState, useEffect } from "react";

function TransitionPage(props) {

      const [winState, setWinState] = useState(null);
      const [machine, setMachine] = useState(null);
      const [user, setUser] = useState(null);
      const [display, setDisplay] = useState("none");
      const [displayWin,setDisplayWin]=useState("none");
      const [displayWait,setDisplayWait] = useState("flex");

      function setPlays(playsValue) {

            if (playsValue === 1) {
                  return ("rock");
            } else if (playsValue === 2) {
                  return ("scissors")
            } else if (playsValue === 3) {
                  return ("paper");
            } else if (playsValue === 4) {
                  return ("lizard")
            } else if (playsValue === 5){
                  return("spock")
            }
      }
      function Score(){
            if (props.state === 2) {
                  props.setScore(props.score+1)
            } else if (props.state === 3 && props.score !== 0) {
                  props.setScore(props.score-1)
            }
      }

      useEffect(() => {

            if (props.state === 1) {
                  setWinState("TIE")
            } else if (props.state === 2) {
                  setWinState("WIN")
            } else if (props.state === 3) {
                  setWinState("LOSE")
            }

            setMachine(setPlays(props.machine))
            setUser(setPlays(props.choose))

            setTimeout(() => {
                  setDisplay("flex")
                  setDisplayWait("none")
 
            }, 5000);
            setTimeout(() => {
                 
                  setDisplayWin("flex")
                  Score();
            }, 6000);

      },[props.state])

      return (
            <div className = "original-box_row">
                  <div className = "transition-ctn">
                        <div className = "trn-tittle">YOU PICKED</div>
                        <div className = {`original-button original-button_xl original-button_${user} `}><div className = "button-bg button-bg_xl"><img src={`./images/icon-${user}.svg`}/></div></div>
                  </div>
                  <div  className = "transition-ctn transition-ctn_center" style={{ display: displayWin }}>
                        <div  className = "trn-tittle trn-tittle_xl">YOU {winState}</div>
                        <button className = "btn btn_play" onClick={() => {props.playAgain(0)}}>PLAY AGAIN</button>
                  </div>
                  <div className = "transition-ctn" style={{ display: displayWait }}>
                        <div  className = "trn-tittle">THE HOUSE PICKED</div>
                        <div className ="wait-content"></div>
                  </div>
                  <div className = "transition-ctn" style={{ display: display }} >
                        <div className = "trn-tittle">THE HOUSE PICKED</div>
                        <div className = {`original-button original-button_xl original-button_${machine} original-button_animated `}><div className = "button-bg button-bg_xl button-bg_animated"><img src={`./images/icon-${machine}.svg`}/></div></div>
                  </div>
            </div>
      )
}

export default TransitionPage;