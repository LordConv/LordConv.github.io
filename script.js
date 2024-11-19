// Cart Array to Store Items
let cart = [];

// Function to Render Cart Modal
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItemsContainer.innerHTML = ""; // Clear old content

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += parseFloat(item.price);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    document.getElementById("cart-count").textContent = cart.length;
}

// Add Item to Cart
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productInfo = {
            name: event.target.parentElement.querySelector("h1").textContent,
            price: event.target.parentElement.querySelector("p:nth-child(3)").textContent.replace("$", ""),
        };
        cart.push(productInfo);
        alert(`${productInfo.name} added to the cart!`);
        renderCart();
    }
});

// Remove Item from Cart
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
        const index = event.target.dataset.index;
        cart.splice(index, 1);
        renderCart();
    }
});

// Open/Close Cart Modal
document.getElementById("cart-icon").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.toggle("hidden");
});

document.getElementById("continue-shopping-button").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.add("hidden");
});

document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Proceeding to checkout!");
});
