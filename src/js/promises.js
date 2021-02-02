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
    }, 1000);
}

// Pushing data, adding a parameter called "callback" which receives a function

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;
            if(!error) {
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

//Function that receives an array "Post" and a callback function.

    // createPost({ title: 'Post Three', body: 'This is Post Three'})
    //     .then(getPosts)
    //     .catch(err => console.log(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values), console.log(promise4));

//Async /Await

async function init(){
    await createPost({title: 'Post Four'}, {body: 'This is a post 4'});

    getPosts();
}

init();