
var cartValue = 0;

const navbarRoot = document.getElementById("nav-container");
const mainContainer = document.getElementsByClassName("main-container")[0];
console.log(mainContainer);

const logoContainer = () => {
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logo = document.createElement("i");
  logo.classList.add("logo");
  logo.classList.add("fa-brands");
  logo.classList.add("fa-slack");
  logo.classList.add("fa-2xl");
  logo.style.color = "black";

  const logoText = document.createElement("h2");
  logoText.classList.add("text");
  logoText.style.color = "black";
  logoText.textContent = "Shopify";

  logoContainer.appendChild(logo);
  logoContainer.appendChild(logoText);

  return logoContainer;
};


const searchBar = () => {
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-bar");

  const inputBox = document.createElement("input");
  inputBox.placeholder = "Search";
  inputBox.type = "text";
  inputBox.name = "search";

  const searchIcon = document.createElement("div");
  searchIcon.classList.add("icon");
  searchIcon.classList.add("fa-solid");
  searchIcon.classList.add("fa-magnifying-glass");
  searchIcon.classList.add("fa-lg");
  searchIcon.style.color = "black";

  searchContainer.appendChild(inputBox);
  searchContainer.appendChild(searchIcon);

  return searchContainer;
};


const deliverAddress = () => {
  const deliverContainer = document.createElement("div");
  deliverContainer.classList.add("deliver-container");

  const locationIcon = document.createElement("div");
  locationIcon.classList.add("icon");
  locationIcon.classList.add("fa-solid");
  locationIcon.classList.add("fa-location-dot");
  locationIcon.classList.add("fa-xl");
  locationIcon.style.color = "black";

  const addressContainer = document.createElement("div");
  addressContainer.classList.add("address-container");

  const address1 = document.createElement("div");
  address1.classList.add("address");
  address1.classList.add("text");
  address1.style.color = "black";
  address1.textContent = "Deliver to";

  const address2 = document.createElement("div");
  address2.classList.add("address");
  address2.classList.add("text");
  address2.style.color = "blue";
  address2.textContent = "Gurgaon, Haryana";

  addressContainer.appendChild(address1);
  addressContainer.appendChild(address2);

  deliverContainer.appendChild(locationIcon);
  deliverContainer.appendChild(addressContainer);

  return deliverContainer;
};


const loginContainer = () => {
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login-container");

  const userIcon = document.createElement("div");
  userIcon.classList.add("icon");
  userIcon.classList.add("fa-solid");
  userIcon.classList.add("fa-user");
  userIcon.classList.add("fa-xl");
  userIcon.style.color = "black";

  const loginText = document.createElement("div");
  loginText.classList.add("text");
  loginText.style.color = "black";
  loginText.textContent = "Login & Register";

  loginContainer.appendChild(userIcon);
  loginContainer.appendChild(loginText);

  return loginContainer;
};


const flagContainer = () => {
  const flagContainer = document.createElement("div");
  flagContainer.classList.add("flag-container");

  const flagImage = document.createElement("img");
  flagImage.src = "https://www.happywalagift.com/wp-content/uploads/2015/08/India_flag-2016.jpg";
  flagImage.alt = "AE";
  flagImage.style.height = "20px";
  ;

  const downSvg = document.createElement("div");
  downSvg.innerHTML = `<svg data-testid="ChevronDown" viewBox="0 0 12 14" class="css-2wfeb7"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.21967 5.21967C3.48594 4.9534 3.9026 4.9292 4.19621 5.14705L4.28033 5.21967L7.75 8.689L11.2197 5.21967C11.4859 4.9534 11.9026 4.9292 12.1962 5.14705L12.2803 5.21967C12.5466 5.48594 12.5708 5.9026 12.3529 6.19621L12.2803 6.28033L8.28033 10.2803C8.01406 10.5466 7.5974 10.5708 7.30379 10.3529L7.21967 10.2803L3.21967 6.28033C2.92678 5.98744 2.92678 5.51256 3.21967 5.21967Z" fill="#0E5AA7"></path></svg>`;
  downSvg.style.width = "22px";

  flagContainer.appendChild(flagImage);
  flagContainer.appendChild(downSvg);

  return flagContainer;
};


const cartContainer = (cartValue) => {
  // console.log(navbarRoot.length);
  const lastElem = navbarRoot.lastElementChild;
  if (lastElem) {
    navbarRoot.removeChild(navbarRoot.lastElementChild);
  }
  const cartContainer = document.createElement("div");
  cartContainer.className = "cart-container";
  const cartIcon = document.createElement("div");
  cartIcon.className = "fa-solid fa-cart-shopping fa-xl icon";

  const cartText = document.createElement("div");
  cartText.className = "cart-text";
  cartText.innerHTML = cartValue;
  cartIcon.style.color = "black";

  cartContainer.append(cartIcon, cartText);
  return cartContainer;
};

const asideContainer = () => {
  const asideBar = document.createElement("aside");
  asideBar.className = "sidebar";
  const heading = document.createElement("h2");
  heading.innerHTML = "Categories";
  const productList = document.createElement("ul");
  const list = [
    "Electronics",
    "Home Appliances",
    "Beauty & Personal Care",
    "Groceries",
    "Electronics",
    "Home Appliances",
    "Beauty & Personal Care",
    "Groceries",
    "Electronics",
    "Home Appliances",
    "Beauty & Personal Care",
    "Groceries",
  ];

  for (let i = 0; i < list.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = list[i];
    productList.append(listItem);
  }

  asideBar.append(heading, productList);
  return asideBar;
};

const productContent = () => {
const name =["Apple iphone 14 128GB 5G Midnight","Apple iphone 14 pro","Apple iPhone 14 Pro (128 GB) - Gold","Apple iPhone 14 Pro (128 GB) - white",
              "Apple iphone 13 128GB 5G Midnight","Apple iphone 13 pro","Apple iPhone 13 Pro (128 GB) - Gold","Apple iPhone 13 Pro (128 GB) - white",
              "Apple iphone 14 pro max 128GB 5G Midnight","Apple iphone 13 ","Apple iPhone 13 Pro max(128 GB) - Gold","Apple iPhone SE (128 GB) - white",
              "Apple iphone SE 128GB 5G Midnight","Apple iphone X ","Apple iPhone SE Pro (128 GB) - Gold","Apple iPhone SE Pro (128 GB) - RED"]

const price = ["Rs 1,40,000","Rs 1,15,000","Rs 1,35,000","Rs 2,40,000","Rs 1,05,000","Rs 1,00,000","Rs 1,75,000","Rs 85,000","Rs 75,000",
               "Rs 70,000","Rs 82,000","Rs 81,000"]

  const productContent = document.createElement("div");
  productContent.className = "products";
  for (let i = 0; i < 12; i++) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("img");
    productImage.setAttribute("src", "./iphone.jpg");
    productImage.setAttribute("alt", "iphone.jpg");
    const productName = document.createElement("h3");
    productName.innerHTML = name[i];
    const productDescription = document.createElement("p");
    productDescription.innerHTML =
      "Sell by xyz";
    const productPrice = document.createElement("p");
    productPrice.style.color = "blue";
    productPrice.innerHTML = price[i].bold();
    

    const productButton = document.createElement("button");
    productButton.className = "add-to-cart";
    productButton.innerHTML = "+";

    productCard.append(
      productImage,
      productName,
      productDescription,
      productPrice,
      productButton
    );

    productContent.append(productCard);
  }

  return productContent;
};

navbarRoot.append(
  logoContainer(),
  searchBar(),
  deliverAddress(),
  loginContainer(),
  flagContainer(),
  cartContainer(cartValue)
);
mainContainer.append(asideContainer(), productContent());

//button event listener and updating cart items number
document.addEventListener("DOMContentLoaded", () => {
  var addToCartButtons = document.getElementsByClassName("add-to-cart");
  var cartItemsCount = document.getElementsByClassName("cart-text");
  console.log(cartItemsCount[0]);

  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", function () {
      console.log("->>>>", cartItemsCount[0].innerHTML);
      var itemCount = parseInt(cartItemsCount[0].innerHTML);

      if (this.textContent === "+") {
        itemCount++;
        this.textContent = "-";
      } else {
        itemCount--;
        this.textContent = "+";
      }

      navbarRoot.append(cartContainer(itemCount));
    });
  }

  console.log(cartItemsCount[0].innerHTML);
});
