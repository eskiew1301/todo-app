import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos, selectedTab } = props;

  const filterTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, index) => {
        return <TodoCard 
        key={index} 
        index={todos.findIndex(val=>val.input==todo.input)}
        {...props} 
        todo={todo} 
        />;
      })}
    </>
  );
};

export default TodoList;
