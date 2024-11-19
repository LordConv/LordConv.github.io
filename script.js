document.addEventListener("DOMContentLoaded", () => {
    // Select all product items
    const products = document.querySelectorAll(".product-item");

    // Attach click event listeners
    products.forEach((product) => {
        product.addEventListener("click", () => {
            const productId = product.getAttribute("data-id"); // Get product ID
            const productName = product.querySelector("h3").textContent; // Get product name
            const productPrice = product.querySelector("p").textContent.replace("$", ""); // Get product price

            // Redirect to checkout.html with product info in URL parameters
            window.location.href = `checkout.html?id=${productId}&name=${encodeURIComponent(productName)}&price=${productPrice}`;
        });
    });
});
