document.addEventListener('DOMContentLoaded', (event) => {
    // Create a new div element
    var newDiv = document.createElement("div"); 
    newDiv.innerHTML = "<h1>Your Page Title</h1><p>Your description or content here</p>";

    // Append the new div to the page-header element
    var pageHeader = document.querySelector(".page-header");
    if (pageHeader) {
        pageHeader.appendChild(newDiv);
    }
});
