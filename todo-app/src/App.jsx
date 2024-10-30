import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Tabs from "./Components/Tabs";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

import "./fanta.css";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  };
  const [selectedTab, setSelectedTab] = useState("Open");

  const handleCompleteTodo = (index) => {
    //update/edit/modify
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  };

  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });

    setTodos(newTodoList);
    handleSaveData(newTodoList)
  };

  const handleSaveData=(currTodos)=>{
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    let db = [];
    db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos)
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
