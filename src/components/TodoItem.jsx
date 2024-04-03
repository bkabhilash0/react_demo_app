import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo">
      <div className="details">
        <h1>{props.todo}</h1>
        <p>April 4, 2024</p>
      </div>
      <div className="actions">
        <div className="action"></div>
        <div className="action"></div>
      </div>
    </div>
  );
};

export default TodoItem;
