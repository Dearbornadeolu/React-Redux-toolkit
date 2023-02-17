import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increament = ()=>{
    dispatch({type: 'INC'})
  }
  const decreament =()=>{
    dispatch({type : 'DEC'
    })
  }
  const addBy =()=>{
    dispatch({type : 'ADD', payload : 10})
  }
  return (
    <div >
    <h1>Counter App</h1>
    <h2>{counter}</h2>
    <button onClick={increament}>Increment</button>
    <button onClick={decreament}>Decrement</button>
    <button onClick={addBy}>Add Value by 10</button>
    </div>
  )
}

export default App
