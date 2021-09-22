import React from 'react';

const Box = ({ backgroundColor, width, height, remove, id }) => {
  const handleRemove = () => remove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor
        }}
      />
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box