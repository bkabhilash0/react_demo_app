import { useState } from "react";
import ActionButton from "./ActionButton";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <ActionButton setCounter={setCounter}/>
      <p className="">{counter}</p>
      <ActionButton setCounter={setCounter} increment={true}/>
    </div>
  );
};

export default Counter;
