// reduce() Array Method
// [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// const prices = [10, 8.50, 2.50, 20, 30.5];

// Without using reduce()
// let total = 0;
// for(let price of prices) {
//     total += price;
// }

// console.log(total);

// const total = prices.reduce((total, price) => {
//     return total + price;
// });

// const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue);

// Find the minimum price
// const min = prices.reduce((min, price) => {
//     if(price < min) {
//         return price;
//     }
//     return min;

// });


// Find the highest score in animes array using reduce(). You have until 2:15 to finish it. 
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

// const bestAnime = ;

// Default Parameter
// Old way of doing default parameter
// function rollDice(numSides) {
//     if(numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// Newer way of doing default parameter
// function rollDice(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(person, msg = "Hi there") {
//     console.log(`${msg}, ${person}!`);
// }

// Spread Operator
// const nums = [9, 3, 2, 8];

// Math.max(nums); // NaN 

// Math.max(...nums); // 9
// Math.max(9, 3, 2, 8);

// console.log("hello");
// console.log(..."hello");

// Spread with Array

// const students1 = ["Aldrin", "AJ", "John"];
// const students2 = ["Mark", "Pao", "Michael"];

// // Making a third array
// const allStudents = [students1, students2];
// console.log(allStudents);


// const allStudentsSpread = [...students1, ...students2, "JR"];
// const allStudentsSpreadTest = ["Aldrin", "AJ", "John", "Mark", "Pao", "Michael"];
// console.log(allStudentsSpread);

// Spread with Objects
// const student1 = {
//     fname: "Aldrin John",
//     lname: "Tamayo",
//     isMale: true
// }

// const student2 = {
//     fname: "Student 2 First Name",
//     lname: "Student 2 Last Name",
//     isMale: false,
//     gpa: 90
// }

// const students = {...student1, ...student2};
// const studentsTest = {...student2, ...student1};

// console.log(students);
// console.log(studentsTest);


// The user registered his/her personal info
// const dataFromForm = {
//     fname: "Aldrin",
//     lname: "Tamayo",
//     email: "test@test.com"
// };

// // After registering, the user elected his/her credentials
// const credentials = {
//     uname: "username123",
//     pass: "Pass123"
// }

// const user = {...dataFromForm, ...credentials};
// console.log(user);


// Arguments Object
// - Available inside of every functions
// - Array-like object
// - Contains all the arguments passed to the function
// - Not available inside of arrow functions.


// function sum() {
//     console.log(arguments);
// }

// sum(); // No values collected

// sum(1,2,3,4); // With values collected

// function sum() {
//     return arguments.reduce((total, el) => total +el);
// }

// Rest Params
// -Collects all remaining arguments into an actual array

// function sum(...nums) {
//     let total = 0;
//     for(let n of nums) {
//         total += n;
//     }
//     return total;
// }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// Destructuring


// Destructure an Array
// const scores = [100, 95, 90, 85, 80];

// // const top1 = scores[0];
// // const top2 = scores[1];

// const [top1, top2, top3, top4, top5] = scores;

// const scores = [95, 80, 85, 100, 90];

// scores.sort(function(a, b) {
//     return b - a;
// })

// const [top1, top2, top3, top4, top5] = scores;
// // const [top1, top2, ...withHonors] = scores;

// // Destructure an Object
// const dataFromForm = {
//     fname: "Aldrin",
//     lname: "Tamayo",
//     email: "test@test.com"
// };

// // const firstName = dataFromForm.fname;
// // const lastName = dataFromForm.lname;

// // const {email, fname, lname} = dataFromForm;
// const {fname: firstName} = dataFromForm;

// // Adding default valuews
// const dataFromForm2 = {
//     fname: "Jose",
//     lname: "Cruz"
// };

// const {fname, lname, email = "N/A"} = dataFromForm2;

// Destructuring Params
// const dataFromForm = {
//     fname: "Aldrin",
//     lname: "Tamayo",
//     email: "test@test.com"
// };

// function fullName(data) {
//     return `${data.fname} ${data.lname}`;
// }

// function fullName(data) {
//     const {fname, lname, email} = data;
//     return `${fname} ${lname} ${email}`;
// }

// function fullName({fname, lname}) {
//     return `${fname} ${lname} ${email}`;
// }
