import React from "react";
import Counter from "./components/Counter";
import { useContext } from "react";
import { CounterContext } from "./Context/Counter";
import Items from './components/Items'
import Cart from "./components/Cart";

const App = () => {
  const counterState=useContext(CounterContext);

  
  return (
    <>
      <h1>Context API in React JS!</h1>


      {/* <h2>Count is {counterState.count} </h2> */}
      {/* <Counter/> */}
      {/* <Counter/>
      <Counter/>
      <Counter/> */}

      <Items name={'MacBook Pro'} price={10000} />
      <Items name={'Pendrive'} price={5333} />
      <Items name={'Moblie'} price={2332} />
      <Cart/>

    </>
  );
}; 

export default App;
