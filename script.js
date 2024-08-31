fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const usersList = document.getElementById('users-list');
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('bg-gray-700', 'p-5', 'rounded-lg', 'shadow', 'hover:shadow-xl', 'transition', 'duration-300');
        userCard.innerHTML = `
            <p class="text-lg font-semibold"><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded mt-4 transition duration-200" onclick="fetchPosts(${user.id})">Show Posts</button>
        `;
        usersList.appendChild(userCard);
    });
});

function fetchPosts(userId) {
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
        const postsList = document.getElementById('posts-list');
        postsList.innerHTML = '';
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('bg-gray-700', 'p-5', 'rounded-lg', 'shadow', 'hover:shadow-xl', 'transition', 'duration-300');
            postCard.innerHTML = `
                <p class="text-lg font-semibold"><strong>ID:</strong> ${post.id}</p>
                <p><strong>User ID:</strong> ${post.userId}</p>
                <p><strong>Title:</strong> ${post.title}</p>
                <p class="mt-2"><strong>Body:</strong> ${post.body}</p>
                <button class="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded mt-4 transition duration-200" onclick="fetchComments(${post.id})">Show Comments</button>
            `;
            postsList.appendChild(postCard);
        });
    });
}

function fetchComments(postId) {
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(comments => {
        const commentsList = document.getElementById('comments-list');
        commentsList.innerHTML = ''; 
        comments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.classList.add('bg-gray-700', 'p-5', 'rounded-lg', 'shadow', 'hover:shadow-xl', 'transition', 'duration-300');
            commentCard.innerHTML = `
                <p class="text-lg font-semibold"><strong>ID:</strong> ${comment.id}</p>
                <p><strong>Name:</strong> ${comment.name}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p class="mt-2"><strong>Body:</strong> ${comment.body}</p>
            `;
            commentsList.appendChild(commentCard);
        });
    });
}