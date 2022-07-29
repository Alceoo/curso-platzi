const nav = document.querySelector('#nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
//EVENT listeners
nav.addEventListener('click', apareceMenu);/*Queremos mostrarlo o quitarlo, si es que se hace click en nav, porque 
nav-emai(es el enlace donde haremos click) pero donde tenemos que agregar
o quitar la clase es en desktop menú */
function apareceMenu(){
  desktopMenu.classList.toggle('inactive');  
}
const menuHamburguesa = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
menuHamburguesa.addEventListener('click', apareceMenuMobile);
function apareceMenuMobile(){
  menuMobile.classList.toggle('inactive');
  const estaCerradoAsideCar =  aside.classList.contains('inactive');
  /*Sí está cerrado */
  if(!estaCerradoAsideCar){
    aside.classList.add('inactive');
  }
}/*Entonces, si tratamos de abrir el menú, cerramos el carrito, y hacemos
el toggle de toda la vida*/
/*CARRITO DE COMPRAS*/
const aside = document.querySelector('.product-detail');
const imgCarrito = document.querySelector('.navbar-shopping-cart');
imgCarrito.addEventListener('click', apareceAside);
function apareceAside(){
  aside.classList.toggle('inactive');
  const estaCerradoMobileMenu = menuMobile.classList.contains('inactive');/*
  Esta cerrado mi menú mobile? */
  if(!estaCerradoMobileMenu){
    menuMobile.classList.add('inactive');
  }/*Ahora, lo mismo con el desktop, nos tocaría preguntar, si el menú
  desktop está cerrado y ponerle o quitarle la clase o ponerle o 
  quitarle la clase al elemento que necesitemos*/
}

//Lista de producstos apartir de un array.
/*ÉSTE ES EL ARRAY QUE NOS DEVOLVERÍA NUESTRO código
js cuando hicieramos las consultas a la api, el back end
etc.

Mientras tanto la escribiremos manualmente...
*/


const productList = [];/*El proceso que lleva 
traernos la info del backend hasta el frontend
implica que nos devuelve un array con los objetos
y la información de estos. */
/*Esta información se guarda en objetos
Los objetos tendrán la información que nosotros queremos mostrar en 
el html como productos*/
productList.push(
  {
    name: 'Faston 1/4',
    image: 'https://www.electronicainsurgentes.com/349/terminal-faston-hembra-desnuda.jpg',
    price: 37,
  },  
);
productList.push(
  {
    name: 'Ojillo',
    image: 'https://www.ciosa.com/imgproductos/08222_.jpg', 
    price: 45
  },
);
/**/
productList.push(
  {
    name: 'Ojillo',
    image: 'https://www.ciosa.com/imgproductos/08222_.jpg', 
    price: 46,
  },
);
productList.push(
  {
    name: 'Ojillo',
    image: 'https://www.ciosa.com/imgproductos/08222_.jpg',
    price: 45,
  },
);
/*Al iterar sobre el arreglo, con el parámetro e, 
le estamos diciendo que pase por toodo lo que haya en nuestro arreglo,
y por cada iteración cree un nuevo elemento*/

productList.forEach((e)=>{/*Éste e tomará el lugar de cada uno de mis productos*/
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  /*Ahora la imagen... con su ruta*/
  const img = document.createElement('img');
  img.src = e.image;/*Si me salió, como a fin de cuentas es un objeto nosotros 
tenemos que agregarle una ruta, esto lo podemos hacer creando el elemento y el
src(su ruta) igualarla a el (e) que ya vimos que toma el valor de todos nuestros
elementos dentro del array y decirle que acceda a la imagen de todos los elementos*/ 
  //NOTA: aquí sólo igualaremos los elementos obviamente que creamos en los objetos
  
  //Después viene un div donde encontramos la información
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  //Después viene otro, pero que no tiene clase, sólo los contiene
  const productInfoDiv = document.createElement('div');
  
  const parrafoPrecio = document.createElement('p');
  parrafoPrecio.textContent = `$ ${e.price}`;/*Creo este 
  lo tendría que convertir en string*/
  const parrafoName = document.createElement('p');
  parrafoName.textContent = `$ ${e.name}`;

  const productFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  /*Aquí en el figure de la imagen no necesitamos que sea dinámica
  por el momento, ya que siempre vamos a querer que sea la misma imagen
  del ícono que tenemos*/
  productFigure.src = 'bt_add_to_cart.svg';/*Aquí pues nos vamos
  a la ruta de donde se encuentra nuestra imagen*/
  productFigure.appendChild(productImgCart);
  productInfoDiv.append(parrafoPrecio, parrafoName);
  productInfo.append(productInfoDiv, productFigure);

  productCard.append(img, productInfo);
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.appendChild(productCard)
});
/*Aquí nos va a soltar un error o algo inesperado, quizás porque mi elemento html guía
no tiene el espacio suficiente para toda la información que estoy poniendo.*/

/*Detalles del producto*/







