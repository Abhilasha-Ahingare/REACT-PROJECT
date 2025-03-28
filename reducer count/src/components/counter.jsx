import React, { useReducer } from "react";
import "../components/counter.css"
let initail = 0;
const reducerFun = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "derement") {
    return state - 1;
  } else if (action.type === "reset") {
    return initail;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducerFun, initail);

  return (
    <>
     <div className="counter-container">
      <p className="counter-display">Counter: {state}</p>
      <div className="counter-buttons">
        <button className="increment" onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button className="decrement" onClick={() => dispatch({ type: "derement" })}>Decrement</button>
        <button className="reset" onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
    </>
  );
};

export default Counter;
