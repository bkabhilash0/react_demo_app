import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";
import { useStore } from "../utils/store";

const Todo = () => {
  const todos = useStore((state) => state.todos)
  return (
    <>
      <h1>Todo App</h1>
      <Addtodo/>
      {todos.length > 0 ? (
        <div className="todos">
        {todos.map((todo,index) => {
            return <TodoItem key={index} todo={todo}/>
        })}
        </div>
      ) : (
        <p>No Todos Available</p>
      )}
    </>
  );
};

export default Todo;
