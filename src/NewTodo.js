import React, { Component } from 'react'
import './Todo.css';

var apiKey = "8c86ed60197c61b5ca7df09c803f1dc8852261122d7c95c1ec939232f2066244"
var api = "https://api.kraigh.net/todos";

export class NewTodo extends Component {
  render() {
    return (
      <div className="row" id={this.props.div_id}>
        <input type="text" className="col" id={this.props.input_id}></input>
        <button className="col" id={this.props.button_id} onClick={this.props.handleAddEvent.bind(this)}>Add a task</button>
      </div>
    )
  }
}

export default NewTodo
