import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course!" }];
  return (
    <div className="App">
      {/** a component that adds todos */}
      <TodoList items={todos} />
    </div>
  );
};

export default App;
