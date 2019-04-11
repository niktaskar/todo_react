import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div>
        <div className="todo" id="todo-div">
          <div className="todo-list" id="todo-list">
            <div>
              <p className="incomplete">Web Dev Assignment 9</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 8</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 7</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 6</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 5</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 4</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 3</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 2</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
            <div>
              <p className="complete">Web Dev Assignment 1</p>
              <button>Delete</button>
              <button>Completed</button>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
