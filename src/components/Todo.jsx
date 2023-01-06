import React, { useState } from "react";

const Todo = ({ el, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(el.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = (e) => {
      onUpdate(el.id, newValue);
      setIsEdit(false);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        <span className="todoTitle" >{el.title}</span>
        <button onClick={() => setIsEdit(true)} className="button">Edit</button>
        <button onClick={()=> onDelete(el.id)} className="buttonDelete">Delete</button>
      </div>
    );
  };

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;
