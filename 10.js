// let score = 0;

// const numberInput = () => {
//     return new Promise((fulfill, reject) => {

//         // User Input
//         const userInput = Number(prompt("Enter your number from 1 to 6."));

//         // Generate a random number from 1 to 6
//         const randomNum = Math.floor(Math.random() * 6) + 1;

//         // Validate if the user input is a valid number
//         if(isNaN(userInput)) {
//             reject(new Error("Your input is an invalid. It should be a number"));
//         }

//         // Check if the user input and generated number are the same
//         if(userInput === randomNum) {
//             console.log("Here");
//             score++;
//             fulfill({
//                 point: 1,
//                 randomNum
//             })
//         } else {
//             score--;
//             fulfill({
//                 point: 0,
//                 randomNum
//             })
//         }
//     })
// }

// // Function to check if the user still wants to continue the game
// const continueGame = () => {
//     return new Promise((fulfill) => {
//         if(confirm("Do you want to continue the game?")) {
//             fulfill(true);
//         } else {
//             fulfill(false);
//         }
//     })
// }

// // Will handle the guessing game
// const handleGuessingGame = async () => {
//     try {
//         // Invoke numberInput() function
//         const result = await numberInput();
//         alert(`Generated Number: ${result.randomNum}. You got ${result.point}. Your current score is ${score}.`);

//         // Invoke continueGame() function
//         const isContinue = await continueGame();

//         // Check if the user still wants to continue the game
//         if(isContinue) {
//             handleGuessingGame();
//         } else {
//             alert(`Game over! Your total score is ${score}.`);
//         }

//     } catch(e) {
//         alert(e);
//     }
// }

// handleGuessingGame();

// https://swapi.dev/api/people/10?query=test&age=20

// "https://icanhazdadjoke.com"

// "https://swapi.dev/api/people/1"

// XHRs
// const request = new XMLHttpRequest();

// // This will run when there is no error
// request.onload = function() {
//     console.log("It loaded");
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(data.name);
//     console.log(data.hair_color);
//     console.log(data.birth_year);

//     const request2 = dashasdasd;
//     asdljahdsa
//     klhdalk
//     akhsd
// }

// // This will run when there is an error
// request.onerror = function() {
//     console.log("Error");
//     console.log(this);
// }

// request.open("GET", "https://swapi.dev/api/people/1");
// request.send();

//Fetch
// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("Fulfilled: ", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2")
//     })
//     .then(res => {
//         console.log("Second Request Resolved.");
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("Error: ", e);
//     })

// Fetch using Async
// const loadStarWarsChar = async () => {
//     try {
//         const response = await fetch("https://swapi.dev/api/people/1");
//         const data = await response.json();
//         console.log(data);

//         const response2 = await fetch("https://swapi.dev/api/people/1");
//         const data2 = await response2.json();
//         console.log(data2);
//     } catch(e) {
//         console.log("Error: ", e);
//     }
// }

// loadStarWarsChar();


// Axios
// axios.get("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("Response: ", res);
//     })
//     .catch(e => {
//         console.log("Error: ", e);
//     })

// Async
// const getStarWarsChar = async () => {
//     const res = await axios.get("https://swapi.dev/api/people/1");
//     console.log(res.data);
// }

// Using Try/Catch with ID
// const getStarWarsChar = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch(e) {
//         console.log("Error: ", e);
//     }
// }

// getStarWarsChar(5);
// getStarWarsChar(10);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getJoke = async () => {
    try {
        const config = {headers: {Accept: 'application/json'}};
        const res = await axios.get("https://icanhazdadjoke.com", config);
        return res.data.joke;
    } catch(e) {
        return "Joke is not available"
    }
}

button.addEventListener('click', addNewJoke);