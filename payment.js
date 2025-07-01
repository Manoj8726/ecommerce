const cartContainer = document.getElementById('cart');

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';

    const img = document.createElement('img');
    img.src = item.img;

    const title = document.createElement('h3');
    title.textContent = item.name;

    div.appendChild(img);
    div.appendChild(title);
    cartContainer.appendChild(div);
  });
}

window.onload = loadCart;
