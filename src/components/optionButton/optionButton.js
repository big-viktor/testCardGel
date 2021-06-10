/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import './optionButton.css';
import Vector from '../img/Vector.png';



const optionButton = ()  => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div>
            <button type="button" className="button-option" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <img src={Vector} alt="#"className="button-option-img"/> : <i class='check'></i>}
                
            </button>
        </div>
        </>
    );
  }
  
  export default optionButton;
  
  