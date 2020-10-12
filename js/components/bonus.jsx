import React, {useState,useEffect} from 'react';
import TransitionPage from "./transitionPage.jsx";
import Score from "./score.jsx";
import Rules from "./rules.jsx";

function Bonus(){

      // tie:1
      // win:2
      // lose:3

      // rock:1
      // scissors:2
      // paper:3
      // lizard:4
      // spock: 5

      useEffect(() => {
            randomValue();
      })

      function randomValue() {
            var random = Math.floor(Math.random() * 5) + 1;
            return random
      }

      function handleChoose(choose) {

            var random = randomValue()
            SetMachineState(random)
            setChoose(choose);

            let win = 0;
            if (choose === random) {
                  win = 1;

            } else if ((choose === 1 && random === 2) || (choose === 1 && random === 4) || (choose === 2 && random === 3) || (choose === 2 && random === 4) || (choose === 3 && random === 1) || 
                  (choose === 3 && random === 1) || (choose === 4 && random === 3) || (choose === 4 && random === 5) || (choose === 5 && random === 1) || (choose === 5 && random === 2)) {

                  win = 2;

            } else if (choose != 0 && random != 0) {
                  win = 3;
            }
            return (win)

      }
      const [winState, setWinState] = useState(0);
      const [score,setScore] = useState(0);
      const [machine, SetMachineState] = useState(null);
      const [choose, setChoose] = useState(null)


      if (winState === 0) {
            return (
                  <div className="original">
                        <Score name = {"-bonus"} score ={score} />
                        <div className="original-box">
                              <div className = "original-bg"><div className = "outside-bg"><img src ="./images/bg-pentagon.svg"/></div></div>
                              <div className = "original-ctn">
                                    
                                    <div className = "original-button original-button_scissors original-button_bonus" onClick={() => { setWinState(handleChoose(2)) }}><div className = "button-bg button-bg_bonus"><img src="./images/icon-scissors.svg"/></div></div>
                                    <div className = "ctn-choose ctn-choose_m0">
                                          <div className = "original-button original-button_spock original-button_bonus" onClick={() => { setWinState(handleChoose(5)) }}><div className = "button-bg button-bg_bonus"><img src="./images/icon-spock.svg"/></div></div>
                                          <div className = "original-button original-button_paper original-button_bonus" onClick={() => { setWinState(handleChoose(3)) }}><div className = "button-bg button-bg_bonus"><img src="./images/icon-paper.svg"/></div></div>
                                    </div>
                                    <div className = "ctn-choose ctn-choose_small">
                                          <div className = "original-button original-button_lizard original-button_bonus" onClick={() => { setWinState(handleChoose(4)) }}><div className = "button-bg button-bg_bonus"><img src="./images/icon-lizard.svg"/></div></div>
                                          <div className = "original-button original-button_rock original-button_bonus" onClick={() => { setWinState(handleChoose(1)) }}><div className = "button-bg button-bg_bonus"><img src="./images/icon-rock.svg"/></div></div>
                                    </div>
                              </div>
                              
                        </div>
                  </div>

            )
      } else {
            return (
                  <div className="original"> 
                        <Score name = {"-bonus"} score ={score} />
                        <TransitionPage machine={machine} choose={choose} state={winState} playAgain={setWinState} setScore ={setScore} score ={score} />      
                  </div>
            )

      }
}

export default Bonus;