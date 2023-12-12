// reda.js

document.addEventListener("DOMContentLoaded", function () {
    // Change the background color of the header on click
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
      header.style.backgroundColor = "#555";
    });
  
    // Add an item to the cart when a product's "Add to Cart" button is clicked
    const addToCartButtons = document.querySelectorAll(".product button");
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        alert("Product added to cart!");
        // You can add more complex logic here, such as updating a shopping cart object.
      });
    });
  
    // Change the footer text dynamically
    const footer = document.querySelector("footer p");
    footer.textContent = `\u00A9 ${new Date().getFullYear()} Clothing Store`;
  
    // Make the image bigger on mouseover and revert on mouseout
    const productImages = document.querySelectorAll(".product img");
    productImages.forEach(function (image) {
      image.addEventListener("mouseover", function () {
        // Increase the size of the image on mouseover
        image.style.width = "50%"; // You can adjust the size based on your needs
      });
  
      image.addEventListener("mouseout", function () {
        // Revert the size of the image on mouseout
        image.style.width = "25%"; // Set it back to the original size or adjust as needed
      });
    });
  });
  