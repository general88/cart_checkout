let cart = document.getElementById("cartContainer");
let cartTotal = document.getElementById("cartTotal");
let checkOutBtn = document.getElementById("checkOutBtn");

let cartItems = [
  {
    id: 1,
    name: "Oraimo 10000mah Power-Bank",
    price: 9000,
    qty: 1,
    img: "Images/oraimo -10000mah.jpg",
    like: false,
  },

  {
    id: 2,
    name: "Oraimo 20000mah Power-Bank",
    price: 17000,
    qty: 1,
    img: "Images/oraimo -20000mah.jpg",
    like: false,
  },
  {
    id: 3,
    name: "Oraimo 30000mah Power-Bank",
    price: 25000,
    qty: 1,
    img: "Images/oraimo -30000mah.jpg",
    like: false,
  },
  {
    id: 4,
    name: "Oraimo 40000mah Power-Bank",
    price: 30000,
    qty: 1,
    img: "Images/oraimo -40000mah.jpg",
    like: false,
  },
];

let totalCostOfItemsInCart;
// A fxn to display Cart Items
// function displayCartItems() {
//   let currencyDisplay = Intl.NumberFormat("en-US");
//   cart.innerHTML = cartItems
//     .map(
//       (x) =>
//         `<div class="cartPreview">
//         <img class="productImage" src="${x.img}" alt="" />
//         <div class="productDetails">
//           <h3 class="productTitle">${x.name}</h3>
//           <p class="productAmount">&#8358 ${currencyDisplay.format(x.price)}</p>
//           <div><button>-</button> ${x.qty} <button onclick="increaseQuantity(${x.id})">+</button></div>
//         </div>
//       </div>`
//     )
//     .join("");
// }

function displayCartItems() {
  let currencyDisplay = Intl.NumberFormat("en-US");
  cart.innerHTML = cartItems
    .map((x) => {
      let { id, name, price, qty, img, like } = x;
      return `<div class="cartPreview">
        <img class="productImage" src="${img}" alt="" />
        <div class="productDetails">
          <h3 class="productTitle">${name}</h3>
          <p class="productAmount">&#8358 ${currencyDisplay.format(x.price)}</p>
          <div>
          <button button onclick="decreaseQuantity(${id})">-</button> ${qty} 
          <button onclick="increaseQuantity(${id})">+</button>
          </div>
                <div>
                <button onclick="removeItem(${id})" class="removeItem">Remove</button>
                <button onclick="updateProductLikeness(${id})" class='likeBtn'>
                ${
                  like === true
                    ? `<i class="fa-solid fa-heart" style="color: #df0707;"></i>`
                    : `<i class="fa-regular fa-heart" style="color: #121212;"></i>`
                }
                </button>
                </div>
                
          </div>
      </div>`;
    })
    .join("");
}

displayCartItems();

// function to increase the quatity in a cart
function increaseQuantity(id) {
  cartItems.forEach((x) => {
    if (x.id === id) {
      x.qty = x.qty + 1;
    }

    console.log(x.qty);
  });
  displayCartItems();
  calculateCartTotal();
}

// function to decrease the quatity in a cart
function decreaseQuantity(id) {
  cartItems.forEach((x) => {
    if (x.qty === 1) {
      return;
    }
    if (x.id === id) {
      x.qty = x.qty - 1;
    }
  });
  displayCartItems();
  calculateCartTotal();
}

// function to remove item from cart

function removeItem(id) {
  cartItems = cartItems.filter((x) => x.id !== id);

  displayCartItems();
  calculateCartTotal();
  return cartItems;
}

//function to calculate cart total

function calculateCartTotal() {
  //   totalCostOfItems = cartItems.reduce((x, y) => x + y, 0);
  totalCostOfItemsInCart = cartItems.reduce((total, value) => {
    return total + value.qty * value.price;
  }, 0);
  cartTotal.textContent = totalCostOfItemsInCart;
}

calculateCartTotal();

// function to check if a customer liked a product
function updateProductLikeness(id) {
  cartItems.forEach((x) => {
    if (x.id === id && x.like === false) {
      x.like = true;
    } else if (x.id === id && x.like === true) {
      x.like = false;
    }
  });

  displayCartItems();
}

//Function to check out

checkOutBtn.addEventListener("click", proceedToCheck);

function proceedToCheck(params) {
  console.log(cartItems, totalCostOfItemsInCart);
}
