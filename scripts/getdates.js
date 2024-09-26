let date = new Date()

let currentyearTag = document.getElementById('currentyear')
let lastmodifiedTag = document.getElementById('lastmodified')

currentyearTag.innerHTML = date.getFullYear()
lastmodifiedTag.innerHTML = `Last Modified - ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format(date)}`