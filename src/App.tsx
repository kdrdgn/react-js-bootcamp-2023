import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './01-basic-hooks/Counter';
import SwitchButton from './02-advance-hooks/SwitchButton';
import Input from './02-advance-hooks/Input';
import Todo from './03-custom-hooks/Todo';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Counter />
      <SwitchButton />
      <Input />
      <hr />
      <Todo />
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default App;
