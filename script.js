let cart = [];

// Add to Cart functionality
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const id = event.target.dataset.id;
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        alert(`${name} added to cart!`);
        saveCartToLocalStorage();
    }
});

// Save and load cart from localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];
}

// Populate cart on checkout page
function populateCheckoutCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('checkout-item');
        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Initialize PayPal Buttons
function initializePayPalButtons() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: document.getElementById('cart-total').textContent
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
                cart = [];
                saveCartToLocalStorage();
                window.location.href = 'index.html';
            });
        }
    }).render('#paypal-button-container');
}

// Load cart and initialize PayPal on checkout page
if (window.location.pathname.includes('checkout.html')) {
    loadCartFromLocalStorage();
    populateCheckoutCart();
    initializePayPalButtons();
}
