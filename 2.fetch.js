//fetch: fetch() is a JavaScript function used to send requests to a server (API) and get data back.
// fetch() does not return the data immediately.
// It returns a Promise because the request takes time.

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json()) // .json() -> parse the json data into object
    .then(json => console.log(json))

// fetch() is a built-in JavaScript function used to make HTTP requests to servers or APIs. It returns a Promise that resolves to a Response object, which can be converted into JavaScript data using methods such as response.json().