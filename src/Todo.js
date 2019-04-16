import React, { Component } from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

var apiKey = "8c86ed60197c61b5ca7df09c803f1dc8852261122d7c95c1ec939232f2066244"
var api = "https://api.kraigh.net/todos";

class Todo extends Component {

  render() {
    return (
      this.props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.text} api_id={todo.id} completed={todo.completed} handleDelete={this.props.handleDelete} handleComplete={this.props.handleComplete}/>
      ))
    );
  }
}

export default Todo;
