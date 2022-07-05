import React from "react";

//import components
import Todo from "../components/Todo";

const TodoList = ({setTodos,todos,filteredTodos}) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
      {
        filteredTodos.map((todo) => {
          return (
          <Todo key={todo.id} id={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)
        })
        }
      </ul>
    </div>
  );
};

export default TodoList;
