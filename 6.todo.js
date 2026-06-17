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
            const todoBox = document.createElement("div");
            todoBox.innerHTML = `
            <div class="todoBox">
                <p>${value.completed == true ?
                    `<i class="fa-solid fa-square-check"></i>` :
                    `<i class="fa-regular fa-square-check"></i>`
                }</p>
            <h1>${value.title}</h1>  
            </div>
            `
            getTodos.appendChild(todoBox)
        })
    }

};
allTodo();