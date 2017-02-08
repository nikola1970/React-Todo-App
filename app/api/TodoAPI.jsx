module.exports = {
    setTodos: function(todos){
        localStorage.setItem("todos", JSON.stringify(todos));
    },
    getTodos: function(){
        var allTodos = localStorage.getItem("todos");
        return JSON.parse(allTodos);
    }
};