let date = new Date();

let currentyearTag = document.getElementById('currentyear');
let lastmodifiedTag = document.getElementById('lastmodified');

currentyearTag.innerHTML = date.getFullYear();
lastmodifiedTag.innerHTML = `Last Modified - ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format(new Date('2024-10-04'))}`;


let counterTag = document.getElementById("counter")
counter = localStorage.getItem('counter')
counterTag.textContent = counter