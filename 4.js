// forEach Array Method
// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Create a function that will print the numbers
// function print(element) {
//     console.log(element);
// }

// nums.foreach(print);

// nums.forEach(function(element) {
//     if(element % 2 === 0) {
//         console.log(element);
//     }
// })

// const animes = [
//     {
//         title: "Naruto",
//         score: 100
//     },
//     {
//         title: "Capeta",
//         score: 98
//     },
//     {
//         title: "Hunter X Hunter",
//         score: 95
//     },
//     {
//         title: "Flame of Recca",
//         score: 90
//     }
// ];

// // Title - Score/100

// animes.forEach(function(anime) {
//     console.log(`${anime.title} - ${anime.score}/100`);
// })

// // map Array Method
// const texts = ['lol', 'omg', 'smh'];

// const caps = texts.map(function(txt) {
//     return txt.toUpperCase();
// })

// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// const doubles = nums.map(function(num) {
//     return num * 2;
// })

// const animes = [
//     {
//         title: "Naruto",
//         score: 100
//     },
//     {
//         title: "Capeta",
//         score: 98
//     },
//     {
//         title: "Hunter X Hunter",
//         score: 95
//     },
//     {
//         title: "Flame of Recca",
//         score: 90
//     }
// ];

// const titles = animes.map(function(anime) {
//     return anime.title;
// })

// const names = ["     Aldrin John     ", "          AJ           "];

// const trimmedNames = names.map(function(name) {
//     return name.trim();
// })

// // Practice
// // Declare fullName array and it should have an objects with first name and last name keys (5). Get all the first names from fullName and assign it to firstName. Make sure to map over the existing array fullNames, so that firstNames var contains only the first names from fullName arr. 

// const fullName = [
//     {
//         first: "AJ",
//         last: "Tamayo"
//     }
// ];

// Arrow Functions
// const square = (x) => {
//     return x * x;
// }

// Regular Function Expression
// const square = function(x) {
//     return x * x;
// }

// Single Parameter: no need to have parethesis or optional
// const square = x => {
//     return x * x;
// }

// No argument
// const dice = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// const string = (str) => {
//     return str;
// }

// More compact arrow function
// const string = (str) => (
//     str
// )

// Implicit return
// const string = (str) => str;

// const add = (a, b) => a+b;

// const isEven = function(num) { // Regular Function Expression
//     return num % 2 === 0;
// }

// const isEven = (num) => { //Arrow Function with parenthesis around the argument
//     return num % 2 === 0;
// }

// const isEven = num => { //Arrow Function with no parenthesis around the argument (For Single Argument only)
//     return num % 2 === 0;
// }

// const isEven = num => ( // Implicit Return
//     num % 2 === 0
// )

// const isEven = num => num % 2 === 0; // One-Liner with Implicit Return


// Implicit returns only work if there's only one expression in the body of your function
// const isEven = num => ( // Implicit Return
//     let x = 1
//     num % 2 === 0
// )

// const animes = [
//     {
//         title: "Naruto",
//         score: 100
//     },
//     {
//         title: "Capeta",
//         score: 98
//     },
//     {
//         title: "Hunter X Hunter",
//         score: 95
//     },
//     {
//         title: "Flame of Recca",
//         score: 90
//     }
// ];

// // Using Regular Function Expression
// const titles = animes.map(function(anime) {
//     // return anime.title;
//     return `${anime.title} - ${anime.score}/100`;
// })

// // Using an Arrow Function
// const titles2 = animes.map((anime) => {
//     return `${anime.title} - ${anime.score}/100`;
// })

// setTimeout()
// setTimeout(() => {
//     console.log("Hello!");
// }, 3000);

// console.log("Hello!");
// setTimeout(() => {
//     console.log("Are you still there?");
// }, 3000);

// setTimeout(() => {
//     console.log("Bye!");
// }, 3000);

// setInterval()
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 8000);

// filter() Array Method
// const nums = [9,8,7,6,5,4,3,2,1];

// // nums.filter(n => {
// //     return n === 4;
// // });

// const odds = nums.filter(n => {
//     return n % 2 === 1;
// });

// const smallNums = nums.filter(n => n < 5);

// const students = [
//     {
//         studentName: "Student1",
//         gpa: 99
//     },
//     {
//         studentName: "Student2",
//         gpa: 89
//     },
//     {
//         studentName: "Student3",
//         gpa: 75
//     },
// ];

// const highGpa = students.filter(student => {
//     return student.gpa > 90;
// });

// const highGpa = students.filter(student => student.gpa > 90);
// const lowGpa = students.filter(student => student.gpa <= 90);

// const lowGpaNames = lowGpa.map(stud => stud.studentName);

// const ages = [3,10,18,20,22];

// function checkAge(age) {
//     return age > 18;
// }

// function myFunction() {
//     return ages.find(checkAge);
// }

// every()
// const words = ["dog", "dig", "log", "bag", "four"];

// const test = words.every(word => {
//     return word.length === 3;
// });

// const examScores = [80, 98, 92, 77, 74, 89, 88];

// let isClassPassed = examScores.every(score => score >= 75);

// some()
const words = ["dog", "dig", "log", "bag", "four"];

const test = words.some(word => {
    return word.length >= 4;
})

const examScores = [80, 98, 92, 77, 74, 89, 88];

examScores.some(score => score <= 75)