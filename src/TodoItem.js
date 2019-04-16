import React, { Component } from 'react';

var apiKey = "8c86ed60197c61b5ca7df09c803f1dc8852261122d7c95c1ec939232f2066244"
var api = "https://api.kraigh.net/todos";

class TodoItem extends Component {

  render() {
    var isCompleted;
    if(this.props.completed === true) {
      isCompleted = "complete";
    } else {
      isCompleted = "incomplete";
    }

    return (
      <div>
        <p className={isCompleted} id={this.props.id} api_id={this.props.api_id}>{this.props.id}</p>
        <button id={this.props.id} api_id={this.props.api_id} onClick={this.props.handleDelete.bind(this, this.props.api_id)}>Delete</button>
        <button id={this.props.id} api_id={this.props.api_id} onClick={this.props.handleComplete.bind(this, this.props.api_id)}>Completed</button>
        <hr></hr>
      </div>
    );
  }


}

export default TodoItem;

