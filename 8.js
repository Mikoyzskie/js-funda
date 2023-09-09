// // Selected Elements
// // const lis = document.querySelectorAll('li');
// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');

// // Delete an LI when clicked
// // for(let li of lis) {
// //     li.addEventListener("click", function() {
// //         li.remove();
// //     })
// // }

// // Function to add the input to the Tweets list
// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const strongTag = document.createElement('strong');
//     strongTag.append(username);
//     newTweet.append(strongTag);
//     newTweet.append(` - ${tweet}`);
//     tweetsContainer.append(newTweet);
// }

// // Fetch inputs from the form
// tweetForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value);
//     tweetForm.reset();
// })

// tweetsContainer.addEventListener("click", function(e) {
//     // console.log("Clicked on UL");
//     // console.log(e);
//     e.target.nodeName === "LI" && e.target.remove();
// })

// const multiply = (x,y) => x * y; // 1st Function

// const square = (x) => multiply(x,x); // 2nd Function

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c); // 3rd Function
// }

//isRightTriangle(3, 4, 5); 

//Multiply: 3,3 = 9
//Multiply: 4,4 = 16
// Sum: 25
// Multiple: 5,5 25

//square(3) = 9
//square(4) = 16
//square(5) = 25

// function multiply(x,y) { //1st Function
//     return x*y; 
// }

// function square(x) { //2nd Function
//     return multiply(x,x);
// }

// function isRightTriangle(a,b,c) { //3rd Function
//     return square(a) + square(b) === square(c);
// }

// isRightTriangle(3,4,5);

// http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


// const newTodo = input.value // user input
// saveDatabase(newTodo); // This could take a while
// input.value = ''; // Clear input

// console.log("Sending request to the server!");
// setTimeout(() => {
//     console.log("Here is your data from the server...");
// }, 3000);
// console.log("I am at the end of the file.");

// document.body.style.backgroundColor = 'red';
// document.body.style.backgroundColor = 'green';

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'green';
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'blue';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'pink';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'orange';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'magenta';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('yellow', 1000, () => {
//     delayedColorChange('red', 1000, () => {
//         delayedColorChange('green', 1000, () => {
//             delayedColorChange('blue', 1000, () => {
//                 delayedColorChange('teal', 1000, () => {
//                     delayedColorChange('magenta', 1000, () => {
//                         delayedColorChange('pink', 1000, () => {
//                             delayedColorChange('white', 1000);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// searchMoviesAPI('Bat', () => {
//     saveToMyDB(movies, () => {
//         // If it works, run this
//     }, () => {
//         // If it doesn't work, run this
//     })
// }, () => {
//     // If API is down, or request failed
// })

// // Imaginary request
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     console.log(delay);
//     setTimeout(() => {
//         if(delay > 4000) {
//             failure(`Connection Timeout`);
//         } else {
//             success(`Here is your fake data from ${url}`);
//         }
//     }, delay);
// }

// // Using Callback
// fakeRequestCallback('books.com/1', 
// function(response) {
//     console.log("It worked!");
//     console.log(response);
//     fakeRequestCallback('books.com/2', 
//     function(response) {
//         console.log("It worked!");
//         console.log(response);
//     }, function(response) {
//         console.log("error");
//         console.log(response);
//     })
// }, function(response) {
//     console.log("error");
//     console.log(response);
// })

// // Using Promise
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         console.log(delay);
//         setTimeout(() => {
//             if(delay > 4000) {
//                 reject(`Connection Timeout`);
//             } else {
//                 resolve(`Here is your fake data from ${url}`);
//             }
//         }, delay);
//     })
// }

// // const request = fakeRequestPromise("google.com/api/map");
// // request.then(() => {
// //     console.log("1st request worked!");
// //     fakeRequestPromise("google.com/api/map/page2")
// //         .then(() => {
// //             console.log("2nd request worked!");
// //         }).catch(() => {
// //             console.log("We got an error on your 2nd request!");
// //         })
// // }).catch(() => {
// //     console.log("We got an error on your 1st request!");
// // })

// fakeRequestPromise("google.com/api/map/page1")
//     .then((data) => {
//         console.log(data);
//         return fakeRequestPromise("google.com/api/map/page2")
//     })
//     .then((data) => {
//         console.log(data);
//         return fakeRequestPromise("google.com/api/map/page3")
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//         console.log("We got an error!!!");
//     })


// new Promise((resolve, reject) => {
//     resolve();
// })

// new Promise((resolve, reject) => {
//     reject();
// })

// const fakeRequest = (url) => {
//     return new Promise((fulfill, reject) => {
//         const rand = Math.random();
//         console.log(rand);
//         setTimeout(() => {
//             if(rand < 0.7) {
//                 fulfill('Fake data here:');
//             }
//             reject('Request error!') // Like else statament
//         }, 1000)
//     })
// }

// fakeRequest("test/1")
//     .then((data) => {
//         console.log("Done with the request");
//         console.log(data, " Test data.");
//     })
//     .catch((err) => {
//         console.log("Ooops!: ", err);
//     })

const delayedColorChange = (newColor, delay) => {
    return new Promise((fulfill, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            fulfill();
        }, delay)
    })
}

delayedColorChange("red", 1000)
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("blue", 1000))
    .then(() => delayedColorChange("black", 1000))
    .then(() => delayedColorChange("white", 1000))
    .then(() => delayedColorChange("teal", 1000))
    .then(() => delayedColorChange("magenta", 1000))
    .then(() => delayedColorChange("pink", 1000))