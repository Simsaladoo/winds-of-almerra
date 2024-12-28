// Paths to the Markdown files (e.g., files in the same directory or a server)
const markdownFiles = [
    'https://simsaladoo.github.io/winds-of-almerra/js/nations.md',
    'https://simsaladoo.github.io/winds-of-almerra/js/world.md',
    'https://simsaladoo.github.io/winds-of-almerra/js/combat.md',
];

const itemsPerPage = 1; // Number of files per page
let currentPage = 0;


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
    contentDiv.classList.add('fade-out');

    // Wait for fade-out to complete
    await new Promise(resolve => setTimeout(resolve, 500)); // Match duration of fade-out animation

    const htmlContent = await fetchMarkdownContent(markdownFiles[currentPage]);

    contentDiv.innerHTML = htmlContent;
    contentDiv.classList.remove('fade-out');
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('content1').addEventListener('click', function() {
        currentPage = 0;
        renderContent();
    });

    document.getElementById('content2').addEventListener('click', function() {
        currentPage = 1;
        renderContent();
    });

    document.getElementById('content3').addEventListener('click', function() {
        currentPage = 2;
        renderContent();
    });
});



// Initial render
renderContent();
