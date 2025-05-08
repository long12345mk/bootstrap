// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission at CONTACT section (optional)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#myMap form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Thanks for your message! We'll get back to you soon.");
      form.reset();
    });
  }
});

// Giỏ hàng
const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const clearCartBtn = document.getElementById('clear-cart');

// Thêm sản phẩm vào giỏ
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    renderCart();
  });
});

// Hiển thị giỏ hàng
function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  let itemCount = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    li.innerHTML = `
      ${item.name} (x${item.quantity})
      <div>
        <span class="text-end me-3">$${(item.price * item.quantity).toFixed(2)}</span>
        <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">×</button>
      </div>
    `;

    cartItems.appendChild(li);

    total += item.price * item.quantity;
    itemCount += item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
  if (cartCount) cartCount.textContent = itemCount;

  attachRemoveEvents();
}

// Gắn sự kiện nút xóa từng món
function attachRemoveEvents() {
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
      const index = parseInt(button.getAttribute('data-index'));
      cart.splice(index, 1);
      renderCart();
    });
  });
}

// Xóa toàn bộ giỏ hàng
if (clearCartBtn) {
  clearCartBtn.addEventListener('click', () => {
    cart.length = 0;
    renderCart();
  });
}
