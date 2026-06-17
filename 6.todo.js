const allTodo = async () => {

    const url = "https://jsonplaceholder.typicode.com/todos";

    // 1. Fetch data (wait for response)
    const response = await fetch(url);
    // 2. Convert to JSON (wait for parsing)
    const data = await response.json();

    // 3. Get container and clear it
    const getTodos = document.getElementById("all-todo");
    getTodos.innerHTML = '';

    // 4. Render UI
    function todoCard(values) {
        values.forEach(value => {
            const todoBox = document.createElement("div");

            todoBox.innerHTML = `
                <div class="todoBox">
                    <p>
                        ${value.completed
                    ? `<i class="fa-solid fa-square-check"></i>`
                    : `<i class="fa-regular fa-square-check"></i>`
                }
                    </p>
                    <h1>${value.title}</h1>
                </div>
            `;

            getTodos.appendChild(todoBox);
        });
    }
    //Call render
    todoCard(data);
};

allTodo();