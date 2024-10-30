import React from "react";

const TodoCard = (props) => {
  const { todo, handleDeleteTodo,index, handleCompleteTodo } = props;


  return (
    <div className="card todo-item">
      
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button onClick={()=>{handleCompleteTodo(index)}} disabled={todo.complete}>
          <h6>Done</h6>
        </button>
        <button onClick={()=>{
          handleDeleteTodo(index)
        }}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;