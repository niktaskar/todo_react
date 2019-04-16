import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import './Todo.css';
import NewTodo from './NewTodo';

var apiKey = "8c86ed60197c61b5ca7df09c803f1dc8852261122d7c95c1ec939232f2066244"
var api = "https://api.kraigh.net/todos";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div className="App content">
        <div className="fixed">
          <div className="todo" id="todo-name">Nikash's ToDo App</div>
          <NewTodo div_id="todo-new-task" input_id="todo-task-input" button_id="todo-btn" handleAddEvent={this.handleAddEvent} />
          <div className="todo" id="todo-sort-by">
            <p>Sort by:</p>
            <select id="todo-sort-by" onChange={this.handleSort.bind(this)}>
              <option id="default">Default</option>
              <option id="created">Created</option>
              <option id="completed">Completed</option>
            </select>
          </div>
        </div>
        <div>
          <div className="todo" id="todo-div">
            <div className="todo-list" id="todo-list">
              <Todo todos={this.state.todos} handleComplete={this.handleComplete} handleDelete={this.handleDelete} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.renderToDo();
  }

  renderToDo() {
    var xhttp = new XMLHttpRequest()
    var todoList = [];

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Convert response to JSON
        todoList = JSON.parse(this.responseText);
      }
    }
    xhttp.open("GET", api, false);
    xhttp.setRequestHeader("x-api-key", apiKey);
    xhttp.send();
    console.log(todoList);
    this.setState({ todos: todoList });
  }

  handleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          var xhttp = new XMLHttpRequest();

          var data = {
            completed: todo.completed
          };

          // Send the request to API
          xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
            }
          }
          xhttp.open("PUT", api + "/" + id, true);
          xhttp.setRequestHeader("x-api-key", apiKey);
          xhttp.send(JSON.stringify(data));
        }
        return todo;
      })
    });
  }

  handleSort = (e) => {
    var todoList = this.state.todos;
    if (e.target.value === "Created") {
      todoList = todoList.sort(function (a, b) {
        return a.created - b.created;
      });
      this.setState({ todos: todoList });
    } else if (e.target.value === "Completed") {
      todoList = todoList.sort(function (a, b) {
        return a.completed - b.completed;
      });
      this.setState({ todos: todoList });
    } else {
      this.renderToDo();
    }
  }

  handleAddEvent = (e) => {
    if (document.getElementById("todo-task-input").value === null || document.getElementById("todo-task-input").value === "") {
      alert("Please input an event");
    } else {
      // If the value of input was not null or "" then take the input and add 
      // the inputted string into the database of the API
      var xhttp = new XMLHttpRequest();
      var newTodo = document.getElementById("todo-task-input").value;

      var data = {
        text: newTodo
      };

      xhttp.open("POST", api, false);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.setRequestHeader("x-api-key", apiKey);
      xhttp.send(JSON.stringify(data));

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          // var todo = JSON.parse(this.responseText);
        } else if (this.readyState === 4) {
          // console.log(this.responseText);
        }
      };

      document.getElementById("todo-task-input").value = "";

      // var created = new Date();
      // created = (created.getTime()/1000).toFixed(0);
      // var item = {
      //   completed: false,
      //   created: created,
      //   id: "0",
      //   text: newTodo,
      //   updated: created,
      //   user: "8c86ed60197c61b5ca7df09c803f1dc8852261122d7c95c1ec939232f2066244"
      // };

      // this.state.todos.push(item);
      // this.setState({
      //   todos: this.state.todos.map((todo) => {
      //     return todo;
      //   })
      // });

      this.renderToDo();
    }
  }

  handleDelete = (id) => {
    // this.setState({
    //   todos: this.state.todos.map((todo) => {
    //     if (todo.id === id) {
    //       var xhttp = new XMLHttpRequest();

    //       // Send the request to API
    //       xhttp.onreadystatechange = function () {
    //         if (this.readyState === 4 && this.status === 200) {
    //         }
    //       }
    //       xhttp.open("DELETE", api + "/" + id, true);
    //       xhttp.setRequestHeader("x-api-key", apiKey);
    //       xhttp.send();
    //     } else {
    //       return;
    //     }
    //     return todo;
    //   })
    // });
    var xhttp = new XMLHttpRequest();

    // Request to API to delete the item
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // console.log("success");
      }
    }

    xhttp.open("DELETE", api + "/" + id, false);
    xhttp.setRequestHeader("x-api-key", apiKey);
    xhttp.send();

    this.renderToDo();
  }
}

export default App;
