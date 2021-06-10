import React from 'react';
import './card.css';
import OptionButton from '../optionButton/optionButton'
import Selector from './../selector/selector';
import NumberCounter from './../numberСounter/numberСounter';
import Button from './../button/button';

const Card = (prop)  => {
    return (
        <div className="container-card">
            <div className="content-group">
                <div className="content-new"><p className="text-new">NEW</p></div>
                <div> <img src={prop.src} alt="#" className="img-setting"/> </div>
                <div><OptionButton/> </div>
            </div>
            <div>
                <p className="text1">Шампунь</p>
                <p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div>
                    <div><Selector/></div>
                    <div className="price-text">200 грн</div>
                </div>
                <div className="content-checkbox">
                    <div>
                    <input type="checkbox" id="vehicle1" value="100" />100 мл
                    </div>
                    <div>
                    <input type="checkbox" id="vehicle1" value="100" />200 мл
                    </div>
                    <div>
                    <input type="checkbox" id="vehicle1" value="100" />300 мл
                    </div>
                </div>
                <div className="container-buttons">
                <NumberCounter/>
                <Button label="КУПИТЬ"/>
                </div>
            </div>
        </div>
        
    );
  } 
  
  export default Card;
  