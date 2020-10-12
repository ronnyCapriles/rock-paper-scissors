import React, {useState} from 'react';

function Rules(props){
      const [displayRules, setDisplayRules] = useState("none")
      const [displayButton, setDisplayButton] = useState("block");
      
      return(
            <div className ="rules">
                  <div className = "rules-outside" style = {{display:displayRules}}>
                        <div className = "rules-inside">
                              <div className = "rules-ctn">
                                    <div className = "rules-tittle">RULES</div>
                                    <img src ={`./images/image-rules${props.game}.svg`}/>
                                    <div className ="rules-close" onClick = {()=> {setDisplayButton("block");setDisplayRules("none")}}>
                                          <img src = "./images/icon-close.svg"/>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <button className = "btn"style = {{display:displayButton}} onClick ={()=>{setDisplayRules("block");setDisplayButton("none")}}>RULES</button>
            </div>
      )
}

export default Rules;