// reda.js

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Change the background color of the header on click
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
        header.style.backgroundColor = "#555"; // Change header background color to gray (#555) on click
    });

    // Add an item to the cart when a product's "Add to Cart" button is clicked
    const addToCartButtons = document.querySelectorAll(".product button");
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Product added to cart!"); // Show an alert when the "Add to Cart" button is clicked
            // You can add more complex logic here, such as updating a shopping cart object.
        });
    });

    // Change the footer text dynamically to include the current year
    const footer = document.querySelector("footer p");
    footer.textContent = `\u00A9 ${new Date().getFullYear()} Clothing Store`; // Update the footer text with the current year

    // Make the image bigger on mouseover and revert on mouseout
    const productImages = document.querySelectorAll(".product img");
    productImages.forEach(function (image) {
        image.addEventListener("mouseover", function () {
            // Increase the size of the image on mouseover
