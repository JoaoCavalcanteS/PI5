import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const InputPersonalizado = ({ suffix, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Se o valor não termina com o sufixo, adicione-o
    if (!inputValue.endsWith(suffix)) {
      setValue(inputValue + suffix);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <Form.Control
      {...props}
      value={value}
      onChange={handleChange}
    />
  );
};

const App = () => {
  return (
    <div>
      <InputPersonalizado type="email" suffix="@anthill.com" autoFocus />
    </div>
  );
};

export default App;
