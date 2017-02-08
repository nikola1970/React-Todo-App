var React = require("react");

var TodoItem = React.createClass({
    deleteTodo: function(){
        return this.props.deleteTodo(this.props.id);
    },
    markDone: function(){
        return this.props.markDone(this.props.id);
    },
    render: function(){
        var {task} = this.props;
        return (
            <div className={"todoItem " + (task.isComplete ? "done" : "")}>
                <p><span className="isComplete glyphicon glyphicon-ok" onClick={this.markDone}></span>{task.task} <span onClick={this.deleteTodo} className="glyphicon glyphicon-trash"></span></p>
            </div>
        );
    }
});

module.exports = TodoItem;

