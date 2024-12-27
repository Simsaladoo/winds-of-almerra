// Paths to the Markdown files (e.g., files in the same directory or a server)
import markdownFiles from '../components/post_list.json'

const itemsPerPage = 1; // Number of files per page
let currentPage = 1;
const totalPages = Math.ceil(markdownFiles.length / itemsPerPage);

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
    const contentDiv = document.getElementById('blogcontent');
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    // Clear current content
    contentDiv.innerHTML = '';

    // Fetch and render Markdown files for the current page
    for (let i = startIdx; i < endIdx && i < markdownFiles.length; i++) {
        const htmlContent = await fetchMarkdownContent(markdownFiles[i]);
        contentDiv.innerHTML += htmlContent;
    }
}

// Function to render pagination
function renderPagination() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    // Prev button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderContent();
            renderPagination();
        }
    };
    paginationDiv.appendChild(prevButton);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.disabled = i === currentPage;
        pageButton.onclick = () => {
            currentPage = i;
            renderContent();
            renderPagination();
        };
        paginationDiv.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderContent();
            renderPagination();
        }
    };
    paginationDiv.appendChild(nextButton);
}

// Initial render
renderContent();
renderPagination();
