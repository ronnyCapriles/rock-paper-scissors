import React, { useState, useEffect } from "react";
import TransitionPage from "./transitionPage.jsx";
import Score from "./score.jsx";
import Rules from "./rules.jsx";

function Original() {

      // tie:1
      // win:2
      // lose:3

      // rock:1
      // scissors:2
      // paper:3

      const [winState, setWinState] = useState(0);
      const [score,setScore] = useState(0);
      const [machine, SetMachineState] = useState(null);
      const [choose, setChoose] = useState(null)


      useEffect(() => {
            randomValue();
      })

      function randomValue() {
            var random = Math.floor(Math.random() * 3) + 1;
            return random
      }


      function handleChoose(choose) {

            var random = randomValue()
            SetMachineState(random)
            setChoose(choose);

            let win = 0;
            if (choose === random) {
                  win = 1;

            } else if ((choose === 1 && random === 2) || (choose === 2 && random === 3) || (choose === 3 && random === 1)) {
                  win = 2;

            } else if (choose != 0 && random != 0) {
                  win = 3;
            }
            return (win)

      }

      if (winState === 0) {
            return (
                  <div className="original">
                        <Score name = {""} score ={score} />
                        <div className="original-box">
                              <div className = "original-bg"><div className = "outside-bg"><img src ="./images/bg-triangle.svg"/></div></div>
                              <div className = "original-ctn">
                                    <div className = "ctn-choose">
                                          <div className = "original-button original-button_paper" onClick={() => { setWinState(handleChoose(3)) }}><div className = "button-bg"><img src="./images/icon-paper.svg"/></div></div>
                                          <div className = "original-button original-button_scissors" onClick={() => { setWinState(handleChoose(2)) }}><div className = "button-bg"><img src="./images/icon-scissors.svg"/></div></div>
                                    </div>
                                    <div className = "original-button original-button_rock" onClick={() => { setWinState(handleChoose(1)) }}><div className = "button-bg"><img src="./images/icon-rock.svg"/></div></div>
                              </div>
                        </div>
                        
                  </div>

            )
      } else {
            return (
                  <div className="original">
                        <Score name = {""} score ={score} />
                        <TransitionPage machine={machine} choose={choose} state={winState} playAgain={setWinState} setScore ={setScore} score ={score} />
                  </div>
            )

      }
}

export default Original
