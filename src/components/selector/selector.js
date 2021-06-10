import React, { useState } from 'react';
import './selector.css';

const Selector = ()  => {

    const [isShown, setIsShown] = useState(true);
    const [isArr, setIsArrr] = useState(["Желтий","Красный","Зеленый"]);
    const [ite, setIte] = useState("Цвет");
    const listItems = isArr.map((number) =>
    <button className="text-color" key={number} onClick={()=> setIte(number)  }>{number}</button>
  );
    return (
    <div className="container-selector"
    onMouseEnter={() => setIsShown(false)}
    onMouseLeave={() => setIsShown(true)}
    >
        <div className="content-select">
          <div>
             <p className="selector-color">{ite}</p>
          </div>
          <div>
            <i className={isShown ? 'check-bottom':'check-bottom-revers'}></i>
          </div>
        </div>
        {isShown ? null : <div className="container-arr">{listItems}</div>  } 
    </div>
        
    );
  }
  
  export default Selector;
  