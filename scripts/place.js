const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastmodified');
const temperature = document.querySelector('#temperature');
const condition = document.querySelector('#condition');
const wind = document.querySelector('#wind');
const windChill = document.querySelector('#wind_chill');

const date = new Date()
currentYear.innerHTML = date.getFullYear()
lastModified.innerHTML = `Last Modified ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format(date)}`
const temp = 23
const windSpeed = 5

function calculateWindChill(temp, wind) {
    return 35.74 + (0.6215 * temp) - ((35.75 * wind) ** 0.16) + ((0.4275 * temp * wind) ** 0.16)
}

windChill.innerHTML = `Wind Chill: ${temp <= 50 && windSpeed > 3 ? calculateWindChill(23, 5).toFixed(2) : "N/A"}°F`