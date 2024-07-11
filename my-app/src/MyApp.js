import React from 'react'

import {useState, useEffect} from 'react';

function MyApp() {
    const name='Hafsa'
    const [counter, setCounter]= useState(0);
     useEffect(()=>{
      
      //we never change stats manually like this: counter=100 no we do it by set 
      setCounter(100);
     },[]);
    return (
        <div className="App">
        <h4>Hello Sir ! you name is :{name}</h4>
        <button onClick={() => setCounter((previous)=>previous-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick ={()=> setCounter((next)=>next+1)}> +</button>
  
        </div>
      );
  
}

export default MyApp