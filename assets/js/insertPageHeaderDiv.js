document.addEventListener('DOMContentLoaded', (event) => {
    // Create a new div element
    var newDiv = document.createElement("div"); 
    newDiv.innerHTML = "<h1>Your Page Title</h1><p>Your description or content here</p>";
    newDiv.style.backgroundImage = "url('/assets/images/cloud-ai-bottom.jpg')";
    newDiv.style.backgroundSize = "cover"; // This ensures that the background covers the entire div
    newDiv.style.backgroundRepeat = "no-repeat"; // This prevents the background from repeating
    newDiv.style.padding = "20px"; // Add padding to ensure the content isn't too close to the edges

    // Append the new div to the page-header element
    var pageHeader = document.querySelector(".page-header");
    if (pageHeader) {
        pageHeader.appendChild(newDiv);
    }
});
