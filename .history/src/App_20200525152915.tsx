import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: "t1", text: "Finish the course!" },
  ]);

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
