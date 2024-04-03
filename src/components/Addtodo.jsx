import  { useState } from "react";
import { useStore } from "../utils/store";

const Addtodo = () => {
  const [value, setValue] = useState("");
  const addTodo = useStore((state) => state.addTodo)

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    console.log(value);
    addTodo(value)
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter the Todo"
        value={value}
        onChange={changeHandler}
      />
      <button className="add-btn" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};

export default Addtodo;
