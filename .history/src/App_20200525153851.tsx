import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./interfaces/todo.interface";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos((prevTodos: Todo[]) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
