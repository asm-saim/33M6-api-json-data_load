const allTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
        .then(response => response.json())
        .then(data => todoCard(data));

    // 1. get the container, empty that.
    const getTodos = document.getElementById("all-todo")
    getTodos.innerHTML = ''

    function todoCard(values) {
        values.forEach(value => {
            console.log(value)
        })
    }

};
allTodo();