import './App.css';

import React from 'react';
import Button from './components/Button';


const App = () => {
   const onClickHandler = (song) => {
    alert(song);
   }
  return (
    <div style={{ padding: "50px", backgroundColor: "lightblue"}}>
      <Button text="Play La la la!" onClickHandler={() => onClickHandler ("la la la")}/>
      <Button text="Play Li li li!" onClickHandler={() => onClickHandler ("li li li")}/>
    </div>

  );
};


  

export default App;
