import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      {/** a component that adds todos */}
      <TodoList />
    </div>
  );
};

export default App;
