function postValues() {

    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            allPosts(data)
        })


    const allPosts = (posts) => {
        // console.log(posts);
        // using for loop
        // for (let i = 0; i <= posts.length; i++) {
        //     console.log(posts[i])
        // }

        //using for of:
        // for (let post of posts) {
        //     console.log(post)
        // }
 
        // 1. get the container:
        const getContainer = document.getElementById("post-container");
        getContainer.innerHTML = "";
        // console.log(getContainer);
        //using for each:
        posts.forEach(post => {
            // console.log(post);

            // 2.create HTML element:
            const li = document.createElement("li")
            li.innerText = post.title;
            // console.log(li);

            //add to container:
            getContainer.appendChild(li);
        }
        )
    }
}