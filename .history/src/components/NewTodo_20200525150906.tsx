import React from "react";

const NewTodo: React.FC = () => {
  return <form >
<div>
    <label htmlFor="todo-text">Todo text</label>
<input type='text' id='todo-text'/>
</div>
<button type="submit">ADD TODO</button>
  </form> 

export default NewTodo;
