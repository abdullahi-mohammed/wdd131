const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let select = document.querySelector('#product');
let date = new Date();

let currentyearTag = document.getElementById('currentyear');
let lastmodifiedTag = document.getElementById('lastmodified');

currentyearTag.innerHTML = date.getFullYear();
lastmodifiedTag.innerHTML = `Last Modified - ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format(new Date('2024-10-04'))}`;

let counter = 0;


const submitReview = () => {
    try {
        counter = localStorage.getItem('counter')
        counter = +counter + 1;
        localStorage.setItem('counter', counter)
    } catch (error) {
        console.log(error);
    }
}


function addProduct() {
    for (let i = 0; i < products.length; i++) {
        let optnElem = document.createElement('option');
        optnElem.textContent = products[i].name;
        optnElem.value = products[i].id;
        select.appendChild(optnElem);
    }
}

addProduct();
