const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const purchaseDetail = document.querySelector('.purchase-detail');
// cards-container
const cardsContainer = document.querySelector('.cards-container');
// Product-detail
const productDetail = document.querySelector('.product-detail');
// product-detail-close
const productDetailClose = document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart)
// Close product-detail
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
  const isPurchaseDetailClosed = purchaseDetail.classList.contains('inactive');
  if (!isPurchaseDetailClosed) {
    purchaseDetail.classList.add('inactive');
  }

  closeProductDetail();

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isPurchaseDetailClosed = purchaseDetail.classList.contains('inactive');
  

  if (!isPurchaseDetailClosed) {
    purchaseDetail.classList.add('inactive');
  }

  closeProductDetail();

  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetail.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  } else if (!isProductDetailClosed) {
    productDetail.classList.add('inactive');
  }


  purchaseDetail.classList.toggle('inactive');
}

// Open product-detail function
function openProductDetail() {
  const isPurchaseDetailClosed = purchaseDetail.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isPurchaseDetailClosed) {
    purchaseDetail.classList.add('inactive');
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  productDetail.classList.remove('inactive');
}

// Close product-detail function
function closeProductDetail() {
  productDetail.classList.add('inactive');
}

// Creando dinámicamente los elementos de la sección cards container desde JS:

const productList = [];
productList.push({
  name: 'Bike 1',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike 2',
  price: 130,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike 3',
  price: 150,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(list) {
  for (product of list) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const cartFigure = document.createElement('figure');
    const cartImg = document.createElement('img');
    cartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    cartFigure.append(cartImg);

    productInfo.append(productInfoDiv, cartFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);



/* AÑADIR MÁS ADELANTE PARA UN MAINCONTAINER CUANDO ESTÉ CREADO */
/* 
const mainContainer = document.querySelector(".main-container");

// creamos una funcion que va a validar si alguno de los 2 menus o el carrito de compras este abierto y va a cerrarlo si esta abierto. 
function colseMenusClick() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isCarritoComprasClosed = carritoDeCompras.classList.contains('inactive');
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isCarritoComprasClosed )  {

        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");   
        carritoDeCompras.classList.add("inactive");
   
    }

}


// añadimos un evento de escucha y llamamos a la funcion antes creada  
mainContainer.addEventListener('click', colseMenusClick);

*/