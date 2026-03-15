import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react'


function App() {
//usestate(default value:give anything you want)
let [counter,setCounter]=useState(5)

const removeValue=()=>{
if(counter===0){
  alert('Counter value is now 0')
  
}
else{
    counter-=1
    setCounter(counter)
    
  }
}

const addValue=()=>{
  console.log('clicked',counter);
  
  counter+=1
  setCounter(counter)
  
}
  
// let counter=5
  return (
    <>
     <h1>gaurav and code</h1>
     <h1>Counter value: {counter}</h1>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
     <p>Footer:{counter}</p>
    </>
  )
}

export default App
