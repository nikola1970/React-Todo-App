module.exports = {
    setTodos: todos => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },
    getTodos: () => {
        var allTodos = localStorage.getItem("todos");
        return JSON.parse(allTodos);
    }
};