import React from 'react';
import ReactDOM from 'react-dom';

// Todolist组件，大写字母开头
import Todolist from './Todolist';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
  document.getElementById('root')
);
