const main = document.getElementById("main");
const list = document.getElementById("list");
const name = document.getElementById("name");

const userName = localStorage.getItem("user");
const ProductsInCart = localStorage.getItem("ProductsInCart");
const priceElement = document.getElementById("priceElement");
let addItem = ProductsInCart ? JSON.parse(ProductsInCart) : [];

showItems(addItem);

function showItems(products) {
  if (addItem.length) {
    name.innerHTML = `${userName}'s orders : ${addItem.length} `;
    list.innerHTML = products
      .map((item) => {
        if (item.wanted) {
          return `
   <li class="flex justify-between items-center flex-wrap gap-3 py-4">
      <img src="${item.img}" class="h-16 w-16">
     <p class="w-28 md:w-3/6"> ${item.name}</p>
     <p class="w-22">${item.price} EGP</p>
     <p class="w-22 font-bold">${item.price * item.wanted} EGP</p>
 
     <p>
      
        <button
         class="bg-red-400 w-10 h-7 rounded-full text-green-50 mx-2 text-md font-semibold"
        onclick="onDecrease(${item.id})"
         >
         -
       </button>
       <span>
       ${item.wanted}
       </span>
       <button
         class="bg-green-400 w-10 h-7 rounded-full text-green-50 mx-2 text-md font-semibold"
        onclick="onIncrease(${item.id})"
         >
         +
       </button>
     </p>
     <p>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         height="24px"
         viewBox="0 -960 960 960"
         width="24px"
         fill="#0c4a6e"
         class="cursor-pointer"
         onClick="removeCart(${item.id})"
       >
         <path
           d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
         />
       </svg>
     </p>
   </li>
  
       `;
        }
      })
      .join("");

    calculateTotal(products);
  } else {
    main.innerHTML = `
    <p class="flex justify-center text-2xl mt-20 mb-10 font-semibold">Cart is empty</p>

    <a href="index.html" class="flex justify-center text-lg font-semibold text-blue-600 hover:text-blue-400"> start shopping &rarr;</a>

    `;
  }
}
const updateLocalStorage = () => {
  localStorage.setItem("ProductsInCart", JSON.stringify(addItem));
};

const removeCart = (id) => {
  addItem = addItem.filter((item) => item.id !== id);
  updateLocalStorage();
  showItems(addItem);
};

function calculateTotal(products) {
  let totalPrice = products.reduce(
    (sum, item) => sum + item.price * item.wanted,
    0
  );
  priceElement.innerHTML = `Total Price: ${totalPrice} EGP`;
}

function onIncrease(id) {
  let item = addItem.find((item) => item.id === id);
  item.wanted++;
  updateLocalStorage();
  showItems(addItem);
}

function onDecrease(id) {
  let item = addItem.find((item) => item.id === id);
  item.wanted--;
  if (item.wanted) {
    updateLocalStorage();
    showItems(addItem);
  } else {
    removeCart(id);
  }
}
function deleteAll() {
  addItem = [];
  updateLocalStorage();
  showItems(addItem);
}

function orderNow() {
  window.location = "order.html";
}
