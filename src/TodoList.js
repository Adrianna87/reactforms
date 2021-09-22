import React, { useState } from 'react';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = (newTodo) => {
    setTodo(todo => [...todo, newTodo]);
  };
  const removeTodo = id => {
    setTodo(todo => todo.filter(todo => todo.id !== id))
  }
  const todoComponents = todo.map(todo => (
    <Todo
      remove={removeTodo}
      key={todo.id}
      id={todo.id}
      formData={todo.formData}
    />
  ));
  return (
    <div>
      <NewTodoForm addItem={addTodo} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList