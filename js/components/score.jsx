import React, {useEffect,useState} from 'react';

function Score(props) {
      
      return(
            <div className ="score">
                  <div className="score-tittle">
                        <img src = {`./images/logo${props.name}.svg`}/>
                  </div>
                  <div className = "score-counter">
                        <div className = "counter-tittle">SCORE</div>
                        <div className = "counter-number">{props.score}</div>
                  </div>
            </div>
      )
}


export default Score;