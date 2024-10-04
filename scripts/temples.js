const nav = document.querySelector('#nav');
const hamburgerButton = document.querySelector('#hamburger');

const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');

hamburgerButton.addEventListener('click', function () {
    nav.classList.toggle('show')
})

const date = new Date()

currentYear.innerHTML = date.getFullYear()
lastModified.innerHTML = `Last Modified ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format(date)}`