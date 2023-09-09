// const form = document.querySelector('#searchForm');

// form.addEventListener('submit', async function(e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = {params: {q: searchTerm}};
//     const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
//     displayImages(res.data);
//     form.elements.query.value = '';
// })

// const displayImages = (shows) => {
//     for(let result of shows) {
//         if(result.show.image) {
//             const img = document.createElement('img');
//             img.src = result.show.image.medium;
//             document.body.append(img);
//         } 
//     }
// }

// Procedural Programming
let basePay = 10000;
let overTime = 10;
let rate = 500;

function getWage(basePay, overTime, rate) {
    return basePay + (overTime * rate);
}

// OOP Way
let employee = {
    baseSalary: 10000,
    overTime: 10,
    rate: 500,
    getWage: function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
}