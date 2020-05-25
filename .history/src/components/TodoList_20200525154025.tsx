import React from "react";
import { Todo } from "../interfaces/todo.interface";

interface TodoListProps {
  items: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
