import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
  };
  const removeBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };

  const boxComponents = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      remove={removeBox}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm newBox={add} />
      {boxComponents}
    </div>
  );
}

export default BoxList