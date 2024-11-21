// Example: Adding an item to the cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
}

// Example: Rendering the cart
function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear the existing items
    cart.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ${item.quantity} x $${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });
}

// Example: Removing an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
