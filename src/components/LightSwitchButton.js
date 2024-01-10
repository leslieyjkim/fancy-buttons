import React from 'react'; //optional
import { useState } from "react";

function LightSwitchButton(props){
    const {light, switchLight} = props;  
    //switched the name from setLight to 'switchLight'
    // Since the handleClick function only calls switchLight
    // const handleClick = () => switchLight(); 
    //we moved switchLight to App.js
    const handleClick = () => {
        switchLight();
        props.increaseAnger(0.1);
    };

  return (
    // We will skip using handleClick, and instead give switchLight directly to the onClick event listener
    // <button onClick={handleClick} className="LightSwitchButton">
    <button className="LightSwitchButton"
            onClick={switchLight}>
    {light === "on" && <span><i>💡</i> I'm on!</span>}
    {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;

