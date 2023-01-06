import React, { useState } from "react";
import Todo from "./Todo";
import './TodoApp.css'

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("")
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((todo) => todo.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id)=>{
    const temp = todos.filter((todo) => todo.id !== id)
    setTodos(temp);

  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          value={title}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Create todo"
          className="buttonCreate"
          onClick={handleSubmit}
        />
      </form>
      <div className="todosContainer">
        {todos?.map((el) => (
          <Todo key={el.id} el={el} onUpdate={handleUpdate} 
          onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
