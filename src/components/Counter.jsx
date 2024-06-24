import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/Counter'

const Counter = () => {
 
    const counterContext=useContext(CounterContext);
  return (
    <>
    <div>
        <button style={{color: 'white', background: 'green'}} onClick={()=> counterContext.setCount(counterContext.count+1)}>Increment</button>
        <button style={{color: 'white', background: 'red'}} onClick={()=> counterContext.setCount(counterContext.count-1)}>Decrement</button>
    </div>
    </>  
  )
}

export default Counter