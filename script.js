// You can add interactivity with JavaScript here

// Example: Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#myMap form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thanks for your message! We'll get back to you soon.");
        form.reset();
      });
    }
  });
  const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    // Kiểm tra xem món đã có trong giỏ chưa
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    renderCart();
  });
});

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      ${item.name} (x${item.quantity})
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
}
  
  