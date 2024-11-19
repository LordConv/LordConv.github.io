// JavaScript to handle product clicks and redirection

document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all product items
    const products = document.querySelectorAll('.product-item');

    products.forEach((product) => {
        product.addEventListener('click', () => {
            const productName = product.querySelector('h3').textContent; // Get product name
            const productLink = product.getAttribute('data-link'); // Get eBay link from data attribute

            // Redirect to the checkout page with product details in the URL
            window.location.href = `checkout.html?product=${encodeURIComponent(productName)}&link=${encodeURIComponent(productLink)}`;
        });
    });
});
