import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(0)
  //let counter= 15
  const addvalue=()=>{
    setCounter(counter+1)
  }
  const removevalue=()=>{
    
    setCounter(counter-1)
  }

  
  return (
    <>
    <h1>learning state in react {}</h1>
    <h2>counter value {counter}</h2>counter
    <button
    onClick={addvalue}>add value</button> {" "}
    <button onClick={removevalue}>remove value</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
