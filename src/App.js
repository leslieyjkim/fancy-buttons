import { useState, useReducer } from 'react';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight(light === "on"? "off":"on"); //the name was switched to 'switchLight' from 'handleClick'
  
  // const [angryApp, setAngryApp] = useState(0);
  
  const [angryApp, dispatch] = useReducer((angryApp, amount) => {
    return angryApp> 1 ? 0 : angryApp+ 0.1;
    }, 0)

  // const increaseAnger = (amount) => {
  //   if (angryApp < 1){
  //     setAngryApp(angryApp + amount);
  //   }else{
  //     setAngryApp(0);
  //   }
  // }


  return (
    <div className={`App ${dark}`}>    
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={dispatch} />
        <CounterButton increaseAnger={dispatch}/>
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={dispatch}/>
        <TextRepeaterButton increaseAnger={dispatch}/>
      </section>
    </div>
  );
}

export default App;
