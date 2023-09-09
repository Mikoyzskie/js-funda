// async function hello() {
//     return `Hello!`;
// }

// async function ohNo() {
//     throw new Error(`Oh no!`);
// }

// const sing = async() => {
//     throw new Error(`Oh no!`);
//     return `LA LA LA!`;
// }

// sing()
//     .then((data) => {
//     console.log("Promise fulfilled with: ", data);
//     })
//     .catch(err => {
//         console.log("Oh no! Promise rejected");
//         console.log(err);
//     })

// Fake Login
// const login = async (username, password) => {
//     if(!username || !password) throw 'Missing Credentials';
//     if(password === 'pass') return 'Welcome';
//     throw 'Invalid Password'
// }

// login('user','password')
//     .then(msg => {
//         console.log('Logged In');
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log('Error logging in');
//         console.log(err);
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve()
//         }, delay)
//     })
// }

// // delayedColorChange('red', 1000)
// //     .then(() => delayedColorChange('orange', 1000))
// //     .then(() => delayedColorChange('yellow', 1000))
// //     .then(() => delayedColorChange('green', 1000))
// //     .then(() => delayedColorChange('blue', 1000))
// //     .then(() => delayedColorChange('indigo', 1000))
// //     .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
// }

// // rainbow().then(() => console.log("End of the rainbow."));

// async function printRainbow() {
//     await rainbow();
//     console.log("End of the rainbow.");
// }

// printRainbow();

// const fakeRequest = (url) => {
//     return new Promise((fulfill, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7) {
//                 fulfill(`Here is your fake data from ${url}`);
//             }
//             reject('Request Error.');
//         }, 1000);
//     })
// }

// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);
//     } catch(e) {
//         console.log("Caught an error");
//         console.log("Error is: ", e);
//     }
// }

// {
//     price: 12.34,
//     age: undefined
// }

// This is a string of JSON
const data = `{"USD":27861,"JPY":3662260.18,"EUR":25921.86}`;

const parsedData = JSON.parse(data);

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

console.log(JSON.stringify(dog));