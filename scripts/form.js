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

const productTag = document.getElementById('product')
const submitTag = document.getElementById('submit')
let date = new Date()

let currentyearTag = document.getElementById('currentyear')
let lastmodifiedTag = document.getElementById('lastmodified')

currentyearTag.innerHTML = date.getFullYear()
lastmodifiedTag.innerHTML = `Last Modified - ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format('2024, oct, 4')}`

let counter = 0

submitTag.addEventListener('click', (e) => {
    e.preventDefault()
    try {
        let counter = counter + 1
        submitTag.textContent = counter

    } catch (error) {
        console.log(error);
    }
})

function addProduct() {
    // the page does not like when i remove i++
    for (let i = 0; i < products.length; i++) {
        let optnElem = document.createElement('option'); // create the new element
        // the option's textContent is the name key's value
        optnElem.textContent = products[i].name;
        optnElem.value = products[i].id; // 
        productTag.appendChild(optnElem); // add it to the parent which was given the variable name 'select' up there
    }
};

addProduct(); // give the function life