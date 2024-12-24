const markdownFile = 'posts/post1.md'; // Replace with your markdown file path
const maxCharacters = 300; // Character limit
const contentDiv = document.getElementById('content');

// Fetch and render the markdown
fetch(markdownFile)
    .then((response) => response.text())
    .then((markdown) => {
        const htmlContent = marked.parse(markdown);
        contentDiv.innerHTML = htmlContent.length > maxCharacters
            ? htmlContent.substring(0, maxCharacters) + '...'
            : htmlContent;
    })
    .catch((error) => console.error('Error fetching markdown:', error));