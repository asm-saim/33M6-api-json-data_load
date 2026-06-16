function loadPost() {
    const url = ('https://jsonplaceholder.typicode.com/posts#')

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // logs the full array of 100 posts
            displayData(data); // 3️⃣ send the array to displayData()
        });
}

const displayData = (posts) => {
    posts.forEach(post => { //loop through EACH post one by one
        console.log(post)
    });
}