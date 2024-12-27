// Paths to the Markdown files (e.g., files in the same directory or a server)
const markdownFiles = [
    '../components/nations.md',
    '../components/world.md',
    '../components/combat.md',
];

const itemsPerPage = 1; // Number of files per page
let currentPage = 1;

// Function to fetch and render the content of a Markdown file
async function fetchMarkdownContent(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}`);
        }
        const markdownText = await response.text();
        return marked.parse(markdownText);
    } catch (error) {
        console.error(error);
        return `<p>Error loading content from ${filePath}</p>`;
    }
}

// Function to render content for the current page
async function renderContent() {
    const contentDiv = document.getElementById('content-container');
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    contentDiv.classList.add('fade-out');

    // Wait for fade-out to complete
    await new Promise(resolve => setTimeout(resolve, 500)); // Match duration of fade-out animation

    // Clear current content
    // contentDiv.innerHTML = '';


    // Fetch and render Markdown files for the current page
    for (let i = startIdx; i < endIdx && i < markdownFiles.length; i++) {
        const htmlContent = await fetchMarkdownContent(markdownFiles[i]);
        contentDiv.innerHTML = htmlContent;
    }
    contentDiv.classList.remove('fade-out');
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('content1').addEventListener('click', function() {
        currentPage = 1;
        renderContent();
    });

    document.getElementById('content2').addEventListener('click', function() {
        currentPage = 2;
        renderContent();
    });

    document.getElementById('content3').addEventListener('click', function() {
        currentPage = 3;
        renderContent();
    });
});



// Initial render
renderContent();
