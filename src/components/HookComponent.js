import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HookComponent = () => {
  const [firstName, setFirstName] = useState('Tom');
  const [lastName, setLastName] = useState('Riddle');
  const [todos, setTodos] = useState([]);

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    console.log('state updated');
  });

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="text-center mt-5">
      <input onChange={handleFirstNameChange} value={firstName} />
      <input onChange={handleLastNameChange} value={lastName} />
      <ul className="text-left">
        {todos.map((todo, i) => (
          <li key={i}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookComponent;
