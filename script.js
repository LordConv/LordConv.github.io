let cart = [];

// Track user scroll
document.addEventListener("scroll", () => {
    const productSection = document.getElementById("products").offsetTop;
    const cartIcon = document.getElementById("cart-icon");
    if (window.scrollY >= productSection) {
        cartIcon.classList.remove("hidden");
    } else {
        cartIcon.classList.add("hidden");
    }
});

// Render cart modal
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartItemsContainer.appendChild(itemDiv);
        total += parseFloat(item.price);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    document.getElementById("cart-count").textContent = cart.length;
}
