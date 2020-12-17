import React, {useState} from 'react';
import Count from './count.js';
import './App.css';

function App() {
  
  let [count, setCount]=useState(0);
  let[isMorning,setMorning]=useState(true)
  
  return (
    <div className={` ${isMorning ? 'colorCheck':'box' }`} >

    <h2>Time of Day is  {isMorning ? 'Morning':'Night'} </h2>
      
  <Count countValue={count} />
  <br/>

<button 
onClick= { () => setCount(count + 1) 
} >Update Count</button>


<br/>

<button onClick={ ()=> setMorning(!isMorning) }
>Change Day</button>


    </div>
  );
}

export default App;
