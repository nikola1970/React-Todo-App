var React = require("react");

var AddTodo = React.createClass({
    addTodo: function(e){
        e.preventDefault();
        
        if (this.refs.task.value.trim().length) {
            var newTask = {
                task: this.refs.task.value,
                isComplete: false
            };
            this.refs.task.value = "";
            this.refs.task.focus();
            return this.props.addTodo(newTask);
        } else {
            alert("Task field cannot be empty!");
        }
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input type="text" ref="task" placeholder="Add new task" className="form-control" />
                    <button type="submit" className="btn btn-primary">Add task</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;