import React from 'react';
import { useState } from 'react';


const orders = [100,200,300]

function App(props) {
    const [count, setCount] = useState(1); 

    const handleCount = () =>{
      setCount(prevState => prevState +1);
    }  
  return (
    
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>creation</button>
    </div>
  );
}

export default App;
