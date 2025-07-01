const productData = [
  { name: 'Apple iPhone 15', img: 'https://m.media-amazon.com/images/I/71d7rfSl0wL.jpg' },
  { name: 'Samsung Galaxy S24', img: 'https://m.media-amazon.com/images/I/71+GTLCIJ7L._AC_UF894,1000_QL80_.jpg' },
  { name: 'Sony WH-1000XM5 Headphones', img: 'https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=220&bgcolor=FFFFFF&bgc=FFFFFF' },
  { name: 'Dell XPS 13 Laptop', img: 'https://img-prd-pim.poorvika.com/product/Dell-xps-13-snapdragon-x-elite-gaming-windows-11-home-laptop-oxn9345130001rin-graphite-32gb-1tb-Front-View.png' },
  { name: 'Nike Air Max Shoes', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRbJSi1MDb2isCpLqeiMmrYWtuqSxvRz_woSA5YTEURQGaqnpD61A9C-2TKZsvCOdCyqANqbd77n13lhB-CWxtL7FaJStEMrhIppqbhHHWqOXdkKKM1aQlFg' },
  { name: "Fossil Men's Watch", img: 'https://m.media-amazon.com/images/I/71ftvpDt-gL._AC_UL480_FMwebp_QL65_.jpg' },
  { name: 'JBL Flip 6 Bluetooth Speaker', img: 'https://m.media-amazon.com/images/I/81nT721hWGL._SX522_.jpg' },
  { name: 'Canon EOS 1500D DSLR Camera', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAfji5CmVZwf9l-0dxh2w1INz4zt4D08Zdw&s' },
  { name: 'Kindle Paperwhite 11th Gen', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBL-vaQe6_BTHpluzeJA2nrszLbf3DIPtbw&s' },
  { name: 'Apple iPad Air 5th Gen', img: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111887_sp866-ipad-air-5gen.png' }
];

document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products');

  productData.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = product.img;

    const title = document.createElement('h3');
    title.textContent = product.name;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.onclick = () => addToCart(product);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(addButton);

    productsContainer.appendChild(card);
  });
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product.name + ' added to cart');
}

function proceedToPayment() {
  window.location.href = 'payment.html';
}
