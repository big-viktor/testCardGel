import React, { useCallback } from 'react';
import './App.css';
import Card from './components/card/card';
import Group from './components/img/Group.jpg'
import Groupe from './components/img/Group 626.jpg'
import Image from './components/img/image.png'



function App() {
  const item = [{
    id:'0',
    img:Group},
    {
    id:'1',
    img:Image},
    {
    id:'2',
    img:Groupe}
  ] 
  const listItems = item.map((number) =>
   <Card key={number.id} src={number.img}  />
  );
  console.log(item)
  // const renderItem = useCallback(() => <Card  />, []);
  return (
    <div className="App">
      {listItems}
     {/* {item.map((number) => renderItem({number}))} */}
    </div>
  );
}

export default App;
