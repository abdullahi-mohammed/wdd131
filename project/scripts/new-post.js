
// Select input fields
const titleInput = document.querySelector('#title');
const blogUrlInput = document.querySelector('#blogUrl');
const blogContentInput = document.querySelector('#blogContent');

let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Function to handle blog post submission
const postBlog = (e) => {
    try {
        e.preventDefault();

        // Capture values from input fields
        let title = titleInput.value;
        let blogUrl = blogUrlInput.value;
        let blogContent = blogContentInput.value;

        // Check if any field is empty
        if (!title || !blogUrl || !blogContent) {
            console.log("All fields are required.");
            return;
        }

        // Create a new blog object and add to blogs array
        const newBlog = {
            title,
            date: new Date().toLocaleDateString(), // Store as readable date
            blogUrl,
            blogContent
        };

        blogs.push(newBlog); // Add the new blog to the blogs array
        localStorage.setItem('blogs', JSON.stringify(blogs)); // Save updated blogs array

        // Display the updated list of blogs
        // displayBlogs();

        // Clear input fields
        titleInput.value = '';
        blogUrlInput.value = '';
        blogContentInput.value = '';
        window.location.href = 'index.html'

    } catch (error) {
        console.log(error);
    }
};

// Attach the `postBlog` function to a submit button
const submitButton = document.querySelector('#submitBlog');
submitButton.addEventListener('click', postBlog);
