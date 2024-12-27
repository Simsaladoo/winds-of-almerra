// Define the navbar HTML
const navbarHTML = `
<nav>
    <ul>
        <li><a href="index.html">home</a></li>
        <li>
            <a href="about.html">about</a>
            <ul class="dropdown">
                <li><a href="#" id="content1">Nations</a></li>
                <li><a href="#" id="content2">World</a></li>
                <li><a href="#" id="content3">Combat</a></li>
            </ul>
        </li>
        <li><a href="media.html">media</a></li>
        <li><a href="buildinfo.html">build info</a></li>
    </ul>
</nav>
`;

// Inject the navbar into the placeholder
document.getElementById('navbar').innerHTML = navbarHTML;
