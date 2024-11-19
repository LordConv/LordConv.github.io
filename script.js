// Example: Alert when the "Shop Now" button is clicked
document.addEventListener("DOMContentLoaded", function() {
    const shopNowButton = document.querySelector(".hero .btn");

    shopNowButton.addEventListener("click", function() {
        alert("Welcome to Arteazy Art Shop! Check out our amazing products below.");
    });
});
