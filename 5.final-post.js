function postContainer() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(respond => respond.json())
        .then(data => {
            // console.log(data);
            cardsData(data);
        })

    // {userId: 10, id: 99, title: 'temporibus sit alias delectus eligendi possimus magni', body: 'quo deleniti praesentium dicta non quod\naut est mo…lestias et officia quis nihil\nitaque dolorem quia'}
    function cardsData(posts) {
        //1. get the container and empty that.
        const catchContainer = document.getElementById("all-post");
        catchContainer.innerHTML = "";

        posts.forEach(post => {
            // console.log(post)
            //2. Create a element:
            const card = document.createElement("div");
            card.innerHTML = `
            <div class="card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p>${post.userId}</p>
        </div>
            `
            catchContainer.appendChild(card)
        })
    }
}
postContainer();