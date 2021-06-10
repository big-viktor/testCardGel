import React from 'react';
import './button.css';

const Button = (props)  => {
    return (
        <button className="button-container-text">{props.label}</button>
    );
  }
  
  export default Button;
  