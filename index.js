const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked : false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked : false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked : false
    }
];

const container = document.querySelector(".container");

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const postElement = document.createElement("div");
    postElement.className = "post";

    postElement.innerHTML = `
        <div class="post-header">
            <img src="${post.avatar}" alt="user avater">
            <div class="user-info">
                <p class="name">${post.name}</p>
                <p class="user-location">${post.location}</p>
            </div>
        </div>
        <div class="post-body">
            <img src="${post.post}" alt="${post.name}" id="userPost">
            <div class="user-interraction">
                <i id="likeBtn" class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
            </div>
            <div class="like-comment">
                <p class="user-like-count">${post.likes} likes</p>
                <span class="user-name">${post.username + ' '}</span>${post.comment}
            </div>
        </div>
    `;

    container.appendChild(postElement);

    const userPost = postElement.querySelector("#userPost");
    const likeBtn = postElement.querySelector("#likeBtn")



    userPost.addEventListener("dblclick", function() {
        const likeCountElement = postElement.querySelector(".user-like-count");
        if(post.liked === true) {
            post.likes--;
            likeCountElement.textContent = `${post.likes} likes`;
            post.liked = false
        } else {
            post.likes++; 
            likeCountElement.textContent = `${post.likes} likes`;
            post.liked = true
        }
    });

    likeBtn.addEventListener("click", function() {
        const likeCountElement = postElement.querySelector(".user-like-count");
        if(post.liked === true) {
            post.likes--;
            likeCountElement.textContent = `${post.likes} likes`;
            post.liked = false
        } else {
            post.likes++; 
            likeCountElement.textContent = `${post.likes} likes`;
            post.liked = true
        }
        
        
    });

}