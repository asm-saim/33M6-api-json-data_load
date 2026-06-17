const url = "https://jsonplaceholder.typicode.com/todos";


//using then:
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

//using async , await:

async function todo() {
    const respond = await fetch(url);
    const data = await respond.json();

    console.log(data);
}

todo()

// Why Do We Need Them?
// Ans: Fetching data takes time.

// Imagine:

console.log("Start");

fetch(url);

console.log("End");

// Output:

// Start
// End

// JavaScript doesn't wait for the API response.
// That's because fetch() is asynchronous.