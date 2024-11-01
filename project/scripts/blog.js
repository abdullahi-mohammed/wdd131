let date = new Date();

let currentyearTag = document.getElementById('currentyear');
let lastmodifiedTag = document.getElementById('lastmodified');
let blogTag = document.getElementById('blogs');

// Display current year and last modified date
currentyearTag.innerHTML = date.getFullYear();
lastmodifiedTag.innerHTML = `Last Modified - ${new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "medium" }).format(new Date('2024-10-04'))}`;

// Retrieve and parse blogs from localStorage, or initialize as an empty array
let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Function to display blogs on the page
const displayBlogs = () => {
    blogs.forEach(item => {
        // Create a div element for each blog item
        let blogDiv = document.createElement('div');
        blogDiv.innerHTML = `
            <img src="${item.blogUrl}" alt="${item.title} image" loading="lazy">
            <div class="blog_title">
                <h4>${item.title}</h4> <span>${item.date}</span>
            </div>
            <p>${item.blogContent}</p>
        `;
        // Append the created div to the blog container
        blogTag.appendChild(blogDiv);
    });
};

// Display all blogs initially
displayBlogs();
