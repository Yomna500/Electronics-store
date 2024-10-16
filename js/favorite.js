const main = document.getElementById("main");
const list = document.getElementById("list");
const name = document.getElementById("name");

const userName = localStorage.getItem("user");
const productsInFav = localStorage.getItem("productsInFav");
const priceElement = document.getElementById("priceElement");
let addFav = productsInFav ? JSON.parse(productsInFav) : [];

showItems(addFav);

function showItems(products) {
  if (addFav.length) {
    list.innerHTML = products
      .map((item) => {
        if (item.wanted) {
          return `
     <li class="flex justify-between items-center flex-wrap gap-3 py-4">
        <img src="${item.img}" class="h-16 w-16">
       <p class="w-36 md:w-60"> ${item.name}</p>
       <p class="w-16">${item.price} EGP</p>

   
       
       <p>
         <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="h-6 w-6 cursor-pointer "
            fill="#f93e17"
            onclick="removeFromFav(${item.id})"
            >
        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
       </p>
     </li>
    
         `;
        }
      })
      .join("");
  } else {
    main.innerHTML = `
      <p class="flex justify-center text-2xl mt-20 mb-10 font-semibold">Wishlist is empty</p>
  
      <a href="index.html" class="flex justify-center text-lg font-semibold text-blue-600 hover:text-blue-400"> start shopping &rarr;</a>
  
      `;
  }
}

const updateLocalStorageFav = () => {
  localStorage.setItem("productsInFav", JSON.stringify(addFav));
};
function removeFromFav(id) {
  addFav = addFav.filter((item) => item.id !== id);
  updateLocalStorageFav();
  showItems(addFav);
}
function deleteAll() {
  addFav = [];
  updateLocalStorageFav();
  showItems(addFav);
}
