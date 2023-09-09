// JS Function Scope

// function collectLife() {
//     let totalLife = 5;
    
// }
// collectLife();
// console.log(totalLife);

// let totalLife = 0;

// function collectLife() {
//     totalLife = 6;
// }
// collectLife();
// console.log(totalLife);

// let score = 10;

// function basketballScore() {
//     let score = 30;
//     console.log(score);
//     if(score > 10) {

//     }
// }

// basketballScore();

// Block Scope
// let nickName = "AJ";

// if(nickName === "AJ") {
//     const firstName = "Aldrin John";
//     const lastName = "Tamayo";
// }

// console.log(nickName);
// console.log(firstName);
// console.log(lastName);

// Lexical Scope
// function outerFunction() {
//     const outer = ["AJ", "Aldrin", "John"];
//     function innerFunction() {
//         for(let name of outer) {
//             console.log(name);
//         }
//     }
//     innerFunction();
// }

// outerFunction();

// Function Expression

// Function Declaration Syntax
// function add(x, y) {
//     return x + y;
// }

// Function Expression Syntax
// const square = function(num) {
//     return num * num;
// }

// console.log(square(7));

// const add = function(x,y) {
//     return x + y;
// }

// Higher Order Function 
// Accepts other functions as arguments
// function call(func) {
//     func();
//     func();
// }

// function dice() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// // call(dice);

// function callTenTimes(f) {
//     for(let i = 0; i < 10; i++) {
//         f();
//     }
// }

// callTenTimes(dice);


// Returns a function as a value within a function
// function yourValentine() {
//     let rand = Math.random();
//     console.log(rand);
//     if(rand > 0.5) {
//         return function() { // Function Expression
//             console.log("Your valentine's day was happy!");
//         }
//     } else {
//         return function() {
//             alert("You had a sad valentine's day!");
//         }
//     }
// }

// yourValentine(); 

// const val = yourValentine();

// function ageBracket(min, max) {
//     return function(num) {
//         return num >= min && num <= max;
//     }
// }

// const teens = ageBracket(13, 19);


// Defining Methods
// const math = {
//     addition: function(x, y) {
//         return x + y;
//     },
//     subtraction: function(x, y) {
//         return x - y;
//     },
//     multiplication: function(x, y) {
//         return x * y;
//     },
//     division: function(x, y) {
//         return x / y;
//     }
// }

// Define an object called circle which will hold methods that have to do with the geometry of circle.
// It should contain two methods: Perimeter and Area


// This Statement
// const student = {
//     firstName: "Aldrin John",
//     lastName: "Tamayo",
//     fullName() {
//         return `${this.firstName} ${student.lastName}`;
//     }
// }

// Try/Catch Statement
// try {
//     // Statement
// } catch(e) {
//     console.log(e);
// }



// try {
//     console.log(hello.toUpperCase());
//     console.log("Testing");
// } catch(e) {
//     console.log(e);
// }

// function student(name) {
//     try {
//         console.log(name.toUpperCase());
//     } catch (e) {
//         console.log(e);
//         console.log("Invalid Input");
//     }
// }

// Ternary Operator
// 1: Condition followed by a question mark, 2: An expression to execute if the condition is true, 3: expression to execute if the condition is false

// if(1 != 1) {
//     console.log("1 is not equal to 1");
// } else {
//     console.log("1 is equal to 1");
// }

// console.log(1 == 1 ? '1 is not equal to 1' : '1 is equal to 1');

const greeting = (person) => {
    const name = person ? person.name : 'Stranger';
    return `Hello, ${name}!`;
}

console.log(greeting({name: "AJ"}));
console.log(greeting(null));