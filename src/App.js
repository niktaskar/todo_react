import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import './Todo.css';
import NewTodo from './NewTodo';
import './NewTodo.css';

class App extends Component {
  render() {
    return (
      <div className="App content">
        <div className="fixed">
          <div className="todo" id="todo-name">Nikash's ToDo App</div>
          <div className="row" id="todo-new-task">
            <input type="text" className="col" id="todo-task-input"></input>
            <button className="col" id="todo-btn">Add a task</button>
            <NewTodo></NewTodo>
          </div>
        </div>
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
