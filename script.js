// Cart array to store added items
let cart = [];

// Handle "Add to Cart" button click
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productInfo = {
            name: event.target.parentElement.querySelector("h1").textContent,
            price: event.target.parentElement.querySelector("p:nth-child(3)").textContent,
        };
        cart.push(productInfo);
        alert(`${productInfo.name} has been added to your cart!`);
    }
});
