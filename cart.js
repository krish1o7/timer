let cart = JSON.parse(localStorage.getItem("cart")) || [];
const itemsDiv = document.getElementById("items");

function render() {
  itemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price * item.qty;
    itemsDiv.innerHTML += `
      <div class="item">
        <span>${item.name} (₹${item.price})</span>
        <div class="qty">
          <button onclick="update(${i},-1)">−</button>
          ${item.qty}
          <button onclick="update(${i},1)">+</button>
        </div>
      </div>
    `;
  });

  document.getElementById("subtotal").innerText = total;
  document.getElementById("total").innerText = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function update(i, change) {
  cart[i].qty += change;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  render();
}

render();
