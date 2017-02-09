var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var uuid = require('node-uuid');
var TodoAPI = require("TodoAPI");
var SearchForm = require("SearchForm");




var TodoApp = React.createClass({

    getInitialState: function(){
        return {
            todos: TodoAPI.getTodos() || [],
            isChanging: true,
            searchText: null
        };
    },

    componentDidUpdate: function(){
        if (this.state.isChanging) { // if we are adding, deleting or marking our TODO item we will modify our DB (localStorage in this case)
            TodoAPI.setTodos(this.state.todos);
        }
    },

    handleAddTodo: function(newTask){
        var taskToAdd = {
            id: uuid.v1(),
            task: newTask
        }
        this.setState(Object.assign({}, this.state, {isChanging: true, todos: [...this.state.todos, taskToAdd]}));
    },

    handleDeleteTodo: function(id){
        var {todos} = this.state;
        var updatedTodos = todos.filter(todo => todo.id !== id);
        this.setState(Object.assign({}, this.state, {isChanging: true, todos: updatedTodos}));
    },

    handleMarkDone: function(id){
        var {todos} = this.state;
        var updatedTodos = todos.map(todo => todo.id == id ? (todo.task.isComplete = !todo.task.isComplete, todo) : todo);
        this.setState(Object.assign({}, this.state, {isChanging: true, todos: updatedTodos}));
    },

    handleFilterItems: function(searchText){
        var regex = new RegExp("^" + searchText, "i");
        this.setState(Object.assign({}, this.state, {isChanging: false, searchText: regex}));
    },

    render: function(){
        var {todos, isChanging, searchText} = this.state;
        if (!isChanging) { // if we are typing in the search field (then we switch 'isChanging' to false) we are filtering actual todo list
            todos = todos.filter(todo => searchText.test(todo.task.task));
        } // else grabbing actual todo list from our state
        return (
            <div className="todoApp">
                <h1>Todo List:</h1> 
                <SearchForm filterItems={this.handleFilterItems}/>
                <TodoList todos={todos} deleteTodo={this.handleDeleteTodo} markDone={this.handleMarkDone}/>
                <AddTodo addTodo={this.handleAddTodo}/>
            </div>
        );
    }

});

module.exports = TodoApp;
