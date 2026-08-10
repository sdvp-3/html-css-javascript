import {products} from '../data/products.js';
import {formatCurrency} from '../data/money.js'
import {cart, addToCart, updateQuantity} from '../data/cart.js'


let productsHtml='';

products.forEach((product )=> {

  productsHtml+=`
  <div class="product-container">
    <div class="product-container-img">
      <img
        class="product-img"
        src="../${product.image.trim()}"
      />
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-container-rating">
      <img class="product-rating" src="../images/ratings/rating-${product.rating.stars * 10}.png" />
      <div class="product-rating-count">${product.rating.count}</div>
    </div>

    <div class="product-price">$${formatCurrency(product.priceCents)}</div>

    <div class="product-selector-quantity">
      <select class="js-quantity-selector" data-product-id="${product.id}">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img class="icon-ticiket" src="../images/products/icons/checkmark.png" />
      Added
    </div>

    <div class="buttons">
      <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
    </div>
  </div>
  `
});

document.querySelector('.js-product-grid').innerHTML=productsHtml;


function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const quantitySelector = button.closest('.product-container')?.querySelector('.js-quantity-selector');
      const quantity = Number(quantitySelector?.value || 1);
      addToCart(productId, quantity);
      updateCartQuantity();

      const productContainer = button.closest('.product-container');
      const addedMessage = productContainer?.querySelector('.added-to-cart');

      if (addedMessage) {
        if (addedMessage.dataset.timeoutId) {
          clearTimeout(Number(addedMessage.dataset.timeoutId));
        }

        addedMessage.style.opacity = '1';
        const timeoutId = window.setTimeout(() => {
          addedMessage.style.opacity = '0';
        }, 2000);

        addedMessage.dataset.timeoutId = timeoutId;
      }
    });
  });