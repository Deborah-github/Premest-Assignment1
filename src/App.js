import React from 'react';
import cloud from './img/cloud.jpg';
import FirstComponents from './FirstComponent'
import './App.css';

function App() {
  return (
    <div>
      <FirstComponents/> 
       <p>This is a new world of premest</p>
        <img src={cloud} alt='cloud and sunshine'/>
    </div>
   
  );
}

export default App;
