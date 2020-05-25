import React from "react";
import { Todo } from "../interfaces/todo.interface";

interface TodoListProps {
  items: Todo[];
  todoDeleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, todoDeleteHandler }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => todoDeleteHandler(item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
