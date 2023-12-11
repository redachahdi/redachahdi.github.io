// reda.js

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners or any dynamic behavior here
  
    // Example: Change the background color of the header on click
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
      header.style.backgroundColor = "#555";
    });
  
    // Example: Add an item to the cart when a product's "Add to Cart" button is clicked
    const addToCartButtons = document.querySelectorAll(".product button");
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        alert("Product added to cart!");
        // You can add more complex logic here, such as updating a shopping cart object.
      });
    });
  
    // Example: Change the footer text dynamically
    const footer = document.querySelector("footer p");
    footer.textContent = `\u00A9 ${new Date().getFullYear()} Clothing Store`;
  
    // Example: Make the image bigger when clicked
    const productImages = document.querySelectorAll(".product img");
    productImages.forEach(function (image) {
      image.addEventListener("click", function () {
        // Increase the size of the image
        image.style.width = "50%"; // You can adjust the size based on your needs
      });
    });
  
    // You can add more dynamic behavior based on your requirements.
  });
  