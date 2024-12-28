// Define the navbar HTML
const navbarHTML = `
<nav>
    <ul>
        <li><a href="index.html">home</a></li>
        <li>
            <a href="about.html">about</a>
            <ul class="dropdown">
                <li><a href="#" id="content1">About</a></li>
                <li><a href="#" id="content2">Nations</a></li>
                <li><a href="#" id="content3">World</a></li>
                <li><a href="#" id="content4">Combat</a></li>
            </ul>
        </li>
        <li><a href="latestnews.html">latest news</a></li>
    </ul>
</nav>
`;

// Inject the navbar into the placeholder
document.getElementById('navbar').innerHTML = navbarHTML;
