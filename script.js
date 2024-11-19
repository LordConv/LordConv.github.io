document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product-item");

    products.forEach((product) => {
        product.addEventListener("click", () => {
            const productId = product.getAttribute("data-id");
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent.replace("$", "");

            window.location.href = `checkout.html?id=${productId}&name=${encodeURIComponent(productName)}&price=${productPrice}`;
        });
    });
});
