(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),s=n.n(i),d=n(1),r=n(2),l=n(4),c=n(3),p=n(5),u=(n(14),n(6),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e;return e=!0===this.props.completed?"complete":"incomplete",o.a.createElement("div",null,o.a.createElement("p",{className:e,id:this.props.id,api_id:this.props.api_id},this.props.id),o.a.createElement("button",{id:this.props.id,api_id:this.props.api_id,onClick:this.props.handleDelete.bind(this,this.props.api_id)},"Delete"),o.a.createElement("button",{id:this.props.id,api_id:this.props.api_id,onClick:this.props.handleComplete.bind(this,this.props.api_id)},"Completed"),o.a.createElement("hr",null))}}]),t}(a.Component)),h=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(u,{key:t.id,id:t.text,api_id:t.id,completed:t.completed,handleDelete:e.props.handleDelete,handleComplete:e.props.handleComplete})})}}]),t}(a.Component),m=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row",id:this.props.div_id},o.a.createElement("input",{type:"text",className:"col",id:this.props.input_id}),o.a.createElement("button",{className:"col",id:this.props.button_id,onClick:this.props.handleAddEvent.bind(this)},"Add a task"))}}]),t}(a.Component),v="8c86ed60197c61b5ca7df09c803f1dc8852261122d7c95c1ec939232f2066244",f="https://api.kraigh.net/todos",E=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleComplete=function(e){n.setState({todos:n.state.todos.map(function(t){if(t.id===e){t.completed=!t.completed;var n=new XMLHttpRequest,a={completed:t.completed};n.onreadystatechange=function(){4===this.readyState&&this.status},n.open("PUT",f+"/"+e,!0),n.setRequestHeader("x-api-key",v),n.send(JSON.stringify(a))}return t})})},n.handleSort=function(e){var t=n.state.todos;"Created"===e.target.value?(t=t.sort(function(e,t){return e.created-t.created}),n.setState({todos:t})):"Completed"===e.target.value?(t=t.sort(function(e,t){return e.completed-t.completed}),n.setState({todos:t})):n.renderToDo()},n.handleAddEvent=function(e){if(null===document.getElementById("todo-task-input").value||""===document.getElementById("todo-task-input").value)alert("Please input an event");else{var t=new XMLHttpRequest,a={text:document.getElementById("todo-task-input").value};t.open("POST",f,!1),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key",v),t.send(JSON.stringify(a)),t.onreadystatechange=function(){4===this.readyState&&200===this.status||this.readyState},document.getElementById("todo-task-input").value="",n.renderToDo()}},n.handleDelete=function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&this.status},t.open("DELETE",f+"/"+e,!1),t.setRequestHeader("x-api-key",v),t.send(),n.renderToDo()},n.state={todos:[]},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App content"},o.a.createElement("div",{className:"fixed"},o.a.createElement("div",{className:"todo",id:"todo-name"},"Nikash's ToDo App"),o.a.createElement(m,{div_id:"todo-new-task",input_id:"todo-task-input",button_id:"todo-btn",handleAddEvent:this.handleAddEvent}),o.a.createElement("div",{className:"todo",id:"todo-sort-by"},o.a.createElement("p",null,"Sort by:"),o.a.createElement("select",{id:"todo-sort-by",onChange:this.handleSort.bind(this)},o.a.createElement("option",{id:"default"},"Default"),o.a.createElement("option",{id:"created"},"Created"),o.a.createElement("option",{id:"completed"},"Completed")))),o.a.createElement("div",null,o.a.createElement("div",{className:"todo",id:"todo-div"},o.a.createElement("div",{className:"todo-list",id:"todo-list"},o.a.createElement(h,{todos:this.state.todos,handleComplete:this.handleComplete,handleDelete:this.handleDelete})))))}},{key:"componentWillMount",value:function(){this.renderToDo()}},{key:"renderToDo",value:function(){var e=new XMLHttpRequest,t=[];e.onreadystatechange=function(){4===this.readyState&&200===this.status&&(t=JSON.parse(this.responseText))},e.open("GET",f,!1),e.setRequestHeader("x-api-key",v),e.send(),console.log(t),this.setState({todos:t})}}]),t}(a.Component);s.a.render(o.a.createElement(E,null),document.getElementById("root"))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.b5eb46ef.chunk.js.map