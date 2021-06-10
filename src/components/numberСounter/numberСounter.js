import React, { useState } from 'react';
import './numberСounter.css';

const NumberCounter = ()  => {
    const [number, setNumber] = useState(1);
   
    return (
        <div className="container-number">
            <button className="number-button1" disabled={number === 1} onClick={() =>  {setNumber(number - 1 )}}>-</button>
            <p className="text-button-number">{number}</p>
            <button className="number-button2" onClick={() => {setNumber(number + 1 )}}>+</button>
        </div>
        
    );
  }
  
  export default NumberCounter;
  