import React from 'react';

const Todo = ({ formData, id, remove }) => {
  const handleDelete = () => remove(id);
  return (
    <div>
      <li>{formData}</li>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}
export default Todo