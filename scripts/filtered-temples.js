const nav = document.querySelector('#nav');
const hamburgerButton = document.querySelector('#hamburger');

const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');

const temple = document.querySelector('#temples');

hamburgerButton.addEventListener('click', function () {
    nav.classList.toggle('show')
})

const date = new Date()

currentYear.innerHTML = date.getFullYear()
lastModified.innerHTML = `Last Modified ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format(date)}`


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Birmingham England Temple",
        location: "185-187 Penns Lane, Royal Sutton Coldfield, Birmingham, United Kingdom",
        dedicated: "2022, April, 3",
        area: 10800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-england-temple/birmingham-england-temple-45435-main.jpg"
    },
    {
        templeName: "McKinney Texas Temple",
        location: "East Stacy Road, Fairview, Texas, United States",
        dedicated: "2023, December, 4",
        area: 43200,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mckinney-texas-temple/mckinney-texas-temple-45436-main.jpg"
    },
    {
        templeName: "Barcelona Spain Temple",
        location: "Avinguda de la Vía Augusta y Avinguda de la Clota, Sant Cugat del Vallès, Barcelona",
        dedicated: "2022, April, 3",
        area: 27500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015-main.jpg"
    },
    // Add more temple objects here...
];

const res = temples.map((item, i) => {
    return (`<figure>
        <h2>${item.templeName}</h2>
        <br>
        <p>LOCATION: ${item.location}</p>
        <p>DEDICATED: ${item.dedicated}</p>
        <p>SIZE: ${item.area} sq ft</p>
                <img loading='lazy' src=${item.imageUrl} width='200px' alt=${item.templeName}>
            </figure>`)

}).join("")

temple.innerHTML = res