// const banner = document.getElementsByTagName('img');

// for(let img of banner) {
//     img.src = 'jsbanner.jpeg'
// }

// const images = document.getElementsByClassName('images');

// for(let img of images) {
//     img.src = 'jsbanner.jpeg'
// }

// const para = document.querySelector('p');
// const heading = document.querySelector('h1');
// const allParas = document.querySelectorAll('h1');

// const para1 = document.querySelector('#para1');
// const paragraphs = document.querySelectorAll('.classPara');

// const para = document.querySelector('p');

// const banner = document.querySelector('img');

// // console.log(banner.getAttribute('src'));
// // console.log(banner.getAttribute('width'));

// banner.setAttribute('width', '700');



// const allParas = document.querySelectorAll('p');

// for(let p of allParas) {
//     p.style.color = 'blue';
// }

// const heading = document.querySelector('h1');

// let currentClass = heading.getAttribute('class');

// // heading.setAttribute('class', 'purple');
// heading.setAttribute('class', `${currentClass} purple`);
// heading.setAttribute('class', 'border');

// heading.classList.add('purple');
// heading.classList.add('border');
// heading.classList.remove('border');

// const bold = document.querySelector('strong');

// const assortedElements = bold.parentElement.parentElement.parentElement;

// const image = document.querySelector('#imageId');

// const newImage = document.createElement("img");

// newImage.src = 'jsbanner.jpeg';

// document.body.appendChild(newImage);

// newImage.classList.add('banner');

// const h2 = document.createElement("h2");
// h2.innerText = "I am H2";
// document.body.appendChild(h2);

// const h1 = document.querySelector('h1');
// // h1.append('testing');
// h1.append('testing', 'Testing Again');

// const para3 = document.querySelector('p');
// const newElement = document.createElement('strong');
// newElement.append('Hi');
// para3.prepend(newElement);

// Create the new element first
// const h2 = document.createElement('h2');
// // Add the content by using append()
// h2.append('DOM Manipulation is fun!');
// // Select h1
// const h1 = document.querySelector('h1');
// // Then, add the new element after h1
// h1.insertAdjacentElement('afterend', h2);

// const body = document.querySelector('body');
// const h1 = document.querySelector('h1');
// body.removeChild(h1);

// const h1 = document.querySelectorAll('h1');

// for(let heading of h1) {
//     heading.remove();
// }

const para = document.getElementsByClassName('classPara');

for(let p of para) {
    p.remove();
}