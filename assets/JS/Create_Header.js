// Create the header element and append it to the body
const header = document.createElement("header");
header.className = "Header";
document.body.appendChild(header);
header.innerHTML = `
    <nav class="Navbar">
        <ul class="Navbar_List">
            <li class="Navbar_Item"><a href="#section1">Introduction</a></li>
            <li class="Navbar_Item"><a href="#section2">Getting Started</a></li>
            <li class="Navbar_Item"><a href="#section3">Advanced Topics</a></li>
        </ul>
    </nav>
`;
