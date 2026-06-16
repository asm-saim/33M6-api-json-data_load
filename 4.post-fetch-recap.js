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

        //using for each:
        posts.forEach(post => {
            console.log(post)
        }

        )
    }
}