const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
  const isProductDetailClosed = productDetail.classList.contains('inactive');
  if (!isProductDetailClosed) {
    productDetail.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isProductDetailClosed = productDetail.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetail.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  productDetail.classList.toggle('inactive');
}

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