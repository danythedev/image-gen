const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post One', body: 'This is post two'}
];

//Accessing server data
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`; 
        });
        
        document.body.innerHTML = output;
    }, 4000);
}

// Pushing data, adding a parameter called "callback" which receives a function

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
    console.log(setTimeout(2000).toString);
}

//Function that receives an array "Post" and a callback function.

createPost({ title: 'Post Three', body: 'This is Post Three'}, getPosts);


// .---------.
// |.-------.|
// ||>run#  ||
// ||       ||
// |"-------'|etf
// .-^---------^-.
// | ---~   Tutorial|
// "-------------'
// Tutorial: https://www.youtube.com/watch?v=PoRJizFvM7s