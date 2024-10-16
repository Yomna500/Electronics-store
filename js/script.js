const products = [
  {
    id: 1,
    name: "Memory Stick USB 16GB",
    img: "image/IMG-20241013-WA0032.jpg",
    price: "200",
    description: "Memory stick USB with 16GB storage",
    quantity: 10,
    wanted: 1,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    img: "image/IMG-20241013-WA0039.jpg",
    price: "150",
    description: "Ergonomic wireless mouse with adjustable DPI",
    quantity: 15,
    wanted: 1,
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    img: "image/IMG-20241013-WA0036.jpg",
    price: "300",
    description: "Bluetooth over-ear headphones with noise cancellation",
    quantity: 8,
    wanted: 1,
  },
  {
    id: 4,
    name: "Laptop Stand",
    img: "image/IMG-20241014-WA0005.jpg",
    price: "100",
    description: "Adjustable aluminum laptop stand",
    quantity: 25,
    wanted: 1,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    img: "image/IMG-20241014-WA0008.jpg",
    price: "400",
    description: "RGB mechanical keyboard with blue switches",
    quantity: 0,
    wanted: 1,
  },
  {
    id: 6,
    name: "4K Monitor",
    img: "image/IMG-20241014-WA0007.jpg",
    price: "1200",
    description: "27-inch 4K monitor with IPS display",
    quantity: 5,
    wanted: 1,
  },
  {
    id: 7,
    name: "External Hard Drive 1TB",
    img: "image/IMG-20241014-WA0006.jpg",
    price: "250",
    description: "Portable 1TB external hard drive USB 3.0",
    quantity: 30,
    wanted: 1,
  },
  {
    id: 8,
    name: "USB-C Hub",
    img: "image/IMG-20241014-WA0017.jpg",
    price: "80",
    description: "Multi-port USB-C hub with HDMI and card reader",
    quantity: 20,
    wanted: 1,
  },
  {
    id: 9,
    name: "Gaming Chair",
    img: "image/IMG-20241014-WA0009.jpg",
    price: "900",
    description: "Ergonomic gaming chair with adjustable armrests",
    quantity: 0,
    wanted: 1,
  },
  {
    id: 10,
    name: "Smartwatch",
    img: "image/IMG-20241013-WA0033.jpg",
    price: "500",
    description: "Smartwatch with heart rate and fitness tracking",
    quantity: 18,
    wanted: 1,
  },
  {
    id: 11,
    name: "Wireless Charger",
    img: "image/IMG-20241014-WA0011.jpg",
    price: "120",
    description: "Fast wireless charger for smartphones",
    quantity: 40,
    wanted: 1,
  },
  {
    id: 12,
    name: "Portable Speaker",
    img: "image/IMG-20241013-WA0035.jpg",
    price: "180",
    description: "Bluetooth portable speaker with deep bass",
    quantity: 0,
    wanted: 1,
  },
  {
    id: 13,
    name: "Smartphone Gimbal",
    img: "image/IMG-20241014-WA0010.jpg",
    price: "350",
    description: "3-axis gimbal stabilizer for smartphones",
    quantity: 8,
    wanted: 1,
  },
  {
    id: 14,
    name: "Action Camera",
    img: "image/IMG-20241014-WA0012.jpg",
    price: "600",
    description: "4K waterproof action camera with accessories",
    quantity: 10,
    wanted: 1,
  },
  {
    id: 15,
    name: "Tablet 10-inch",
    img: "image/WhatsApp Image 2024-10-14 at 16.58.05_f989a06b.jpg",
    price: "700",
    description: "10-inch tablet with 64GB storage and stylus support",
    quantity: 7,
    wanted: 1,
  },
  {
    id: 16,
    name: "Gaming Mouse",
    img: "image/IMG-20241014-WA0013.jpg",
    price: "200",
    description: "High-precision gaming mouse with RGB lighting",
    quantity: 22,
    wanted: 1,
  },
  {
    id: 17,
    name: "Webcam 1080p",
    img: "image/IMG-20241014-WA0014.jpg",
    price: "180",
    description: "1080p HD webcam with built-in microphone",
    quantity: 14,
    wanted: 1,
  },
  {
    id: 18,
    name: "Smart Light Bulb",
    img: "image/IMG-20241014-WA0015.jpg",
    price: "100",
    description: "Wi-Fi controlled smart light bulb with RGB colors",
    quantity: 50,
    wanted: 1,
  },
  {
    id: 19,
    name: "Fitness Tracker",
    img: "image/IMG-20241014-WA0018.jpg",
    price: "300",
    description: "Fitness tracker with GPS and sleep monitoring",
    quantity: 10,
    wanted: 1,
  },
  {
    id: 20,
    name: "Noise Cancelling Earbuds",
    img: "image/IMG-20241014-WA0016.jpg",
    price: "400",
    description: "Wireless earbuds with active noise cancellation",
    quantity: 12,
    wanted: 1,
  },
];

const list = document.getElementById("list");
const search = document.getElementById("search");

const getEmail = localStorage.getItem("email");
let addItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

let addFav = localStorage.getItem("productsInFav")
  ? JSON.parse(localStorage.getItem("productsInFav"))
  : [];

displayProducts(products);

search.addEventListener("input", handleSearch);

function displayProducts(products) {
  list.innerHTML = products
    .map(
      (product) => `
        <li class="flex gap-4 py-2">
          <img
            src='${product.img}'
            alt='${product.name}'
            class='h-24 w-24 ${product.quantity ? "" : "opacity-40"}'
          />
          <div class="flex grow flex-col pt-0.5 w-full">
          <div class="flex grow w-full justify-between">
            <p class="font-medium">${product.name}</p>
             ${
               product.quantity
                 ? addFav.some((item) => item.id === product.id)
                   ? `
                <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                 class="h-6 w-6 cursor-pointer "
                 fill="#f93e17"
                 onclick="removeFromFav(${product.id})"
                 >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                </svg>
                `
                   : `
                <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"

              class="h-6 w-6 cursor-pointer"
              onclick="addToFav(${product.id})"
              >
             <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
             </svg>`
                 : ``
             }
             </div>
           <p class="text-sm capitalize italic text-stone-500">
              ${product.description}
            </p>

            <div class="mt-auto flex items-center justify-between">
            ${
              product.quantity
                ? `<p class="text-sm">${product.price} EGP</p>
              `
                : `<p class="text-sm font-medium font-semibold uppercase text-stone-500">
              Sold out
            </p>`
            }
            <div class="flex gap-1 md:gap-4 items-center">
            ${
              product.quantity
                ? `<button onclick='addCart(${product.id})'
              class="rounded-full 
              ${
                addItem.some((item) => item.id === product.id)
                  ? "bg-white"
                  : " bg-blue-400 "
              } 
             
              font-semibold uppercase tracking-wide 
              ${
                addItem.some((item) => item.id === product.id)
                  ? "text-blue-400"
                  : " text-white  "
              } 
              
              transition-colors duration-300 hover:bg-blue-300 
               focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2 px-4 sm:px-5 sm:py-2.5 text-xs">
              ${
                addItem.some((item) => item.id === product.id)
                  ? "Remove From cart"
                  : "Add to cart"
              } 
              </button>`
                : ``
            }

           
             </div>
            </div>
          </div>
        </li>
      `
    )
    .join("");
}
function addCart(id) {
  if (!getEmail) {
    window.location = "login.html";
    return;
  }
  let choosed = products.find((item) => item.id === id);
  let existingItem = addItem.find((item) => item.id === choosed.id);
  if (existingItem) {
    removeCart(id);
  } else {
    choosed.wanted = 1;
    addItem.push(choosed);
    updateLocalStorage();
    displayProducts(products);
  }
}
const updateLocalStorage = () => {
  localStorage.setItem("ProductsInCart", JSON.stringify(addItem));
};

const removeCart = (id) => {
  addItem = addItem.filter((item) => item.id !== id);
  updateLocalStorage();
  displayProducts(products);
};

function handleSearch() {
  let value = search.value.toLowerCase();
  let searchedItems = products.filter((item) =>
    item.name.toLowerCase().includes(value)
  );
  displayProducts(searchedItems);
}
function addToFav(id) {
  if (!getEmail) {
    window.location = "login.html";
    return;
  }
  let choosed = products.find((item) => item.id === id);
  let existingItem = addItem.find((item) => item.id === choosed.id);
  if (existingItem) {
    removeCart(id);
  } else {
    addFav.push(choosed);
    updateLocalStorageFav();
    displayProducts(products);
  }
}
const updateLocalStorageFav = () => {
  localStorage.setItem("productsInFav", JSON.stringify(addFav));
};
function removeFromFav(id) {
  addFav = addFav.filter((item) => item.id !== id);
  updateLocalStorageFav();
  displayProducts(products);
}
