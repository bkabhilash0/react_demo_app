import React, { useState } from "react";

const ActionButton = (props) => {
  const isIncrement = props.increment;
  const setCounter = props.setCounter;
  console.log(props);

  const increment = () => {
    console.log("Increment");
    //   setCounter(counter+1)
    // setCounter(() => counter+1)
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    setCounter((counter) => counter - 1);
  };

  // if (10 > 20){
  //     console.log("True")
  // }else{
  //     console.log("false")
  // }

  // const result = 10 > 20 ? console.log("True") : console.log("False")

  return (
    <button className="" onClick={isIncrement ? increment : decrement}>
      {isIncrement ? "+" : "-"}
    </button>
  );
};

export default ActionButton;
