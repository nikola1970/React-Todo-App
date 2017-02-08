var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var uuid = require('node-uuid');

var TodoAPI = require("TodoAPI");



var TodoApp = React.createClass({

    getInitialState: function(){
        return {
            todos: TodoAPI.getTodos() || []
        };
    },

    componentDidUpdate: function(){
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo: function(newTask){
        var taskToAdd = {
            id: uuid.v1(),
            task: newTask
        }
        this.setState({
            todos: [
                ...this.state.todos,
                taskToAdd
            ]
        });
    },

    handleDeleteTodo: function(id){
        var {todos} = this.state;
        var updatedTodos = todos.filter(todo => todo.id !== id);
        this.setState({
            todos: updatedTodos
        });
    },

    handleMarkDone: function(id){
        var {todos} = this.state;
        var updatedTodos = todos.map(todo => todo.id == id ? (todo.task.isComplete = !todo.task.isComplete, todo) : todo);
        this.setState({
            todos: updatedTodos
        });
    },

    render: function(){
        var {todos} = this.state;
        return (
            <div className="todoApp">
                <h1>Todo List:</h1>
                <AddTodo addTodo={this.handleAddTodo}/>
                <TodoList todos={todos} deleteTodo={this.handleDeleteTodo} markDone={this.handleMarkDone}/>
            </div>
        )
    }

});

module.exports = TodoApp;