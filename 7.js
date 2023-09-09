// const randomColorGenerator = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function colorizer() {
//     this.style.backgroundColor = randomColorGenerator();
//     this.style.color = randomColorGenerator();
// }

// const buttons = document.querySelectorAll("button");
// const paras = document.querySelectorAll("p");

// for(let button of buttons) {
//     button.addEventListener("click", colorizer);
// }

// for(let para of paras) {
//     para.addEventListener("mouseover", colorizer);
// }

// document.querySelector("button").addEventListener("click", function(events) {
//     console.log(events);
//     // alert("Clicked!");
// })

// const inputDown = document.querySelector("input");
// inputDown.addEventListener("keydown", function(e) {
//     console.log(e);
//     console.log(e.key);
//     console.log(e.code);
//     console.log("Key Down!");
// })

// inputDown.addEventListener("keyup", function() {
//     console.log("Key Up!");
// })

// window.addEventListener("keydown", function(e) {
//     switch (e.code) {
//         case "ArrowUp":
//             console.log("Up");
//             break;
//         case "ArrowDown":
//             console.log("Down");
//             break;
//         case "ArrowLeft":
//             console.log("Left");
//             break;
//         case "ArrowRight":
//             console.log("Right");
//             break;
//         default:
//             console.log("Ignored");
//     }
// })

const form = document.querySelector("#testForm");
const input = document.querySelector("input");
const list = document.querySelector("#list");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const userInput = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = userInput;
    list.append(newLI);
    input.value = "";
})