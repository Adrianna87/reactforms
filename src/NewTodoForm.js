import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addItem }) => {

  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    setFormData(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ formData, id: uuid() });
    setFormData("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo</label>
        <input
          id="todo"
          type="text"
          name="todo"
          placeholder="todo"
          value={formData}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm;