var React = require("react");

var TodoItem = require("TodoItem");

var TodoList = React.createClass({

    deleteTodo: function(id){
        return this.props.deleteTodo(id);
    },

    markDone: function(id){
        return this.props.markDone(id);
    },

    render: function(){
        var {todos} = this.props;
        var renderTodos = () => {
           return todos.map(todo => {
                return (
                    <TodoItem key={todo.id} {...todo} deleteTodo={this.deleteTodo} markDone={this.markDone}/>
                 );
           });
        };
        return (
            <div className="todoList">
                {renderTodos()}
            </div>
        );
    }

});

module.exports = TodoList;