/*La misma lógica es si quisieramos hacer un menú en un costado
pero que este menú tenga un boton obviamente y los efectos que haga este menú
sean de un translate en horizontal.*/

const nav = document.querySelector('#nav-email');
/*Primer cagada del día...
Tenemos que seleccionar el elemento donde agregaremos o quitaremos esa 
clase*/
const desktopMenu = document.querySelector('.desktop-menu');

//EVENT listeners
nav.addEventListener('click', apareceMenu);
//document.addEventListener('DOMContentLoaded', alIniciarApp)
//Funciones

/*Queremos mostrarlo o quitarlo, si es que se hace click en nav, porque 
nav-emai(es el enlace donde haremos click) pero donde tenemos que agregar
o quitar la clase es en desktop menú */

function apareceMenu(){
  desktopMenu.classList.toggle('inactive');/*Hay que ver después como
  hacer esto de quitar si una clase existe o no existe, pero sin el 
  método.*/
  
}

/*Primero hagamos que aparezca y desaparezca y después hacemos las mediaquerys que
necesitemos*/
/*En js lo primero que tenemos que hacer es crear un selector para el mobile
menu para hacer que aparezca y desaparezca con la misma clase inactive, pero
también NECESITAMOS UN SELECTOR PARA ESE MENÚ AMBURGUESA*/
const menuHamburguesa = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
//EVENTOS
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

//VARIABLES
const aside = document.querySelector('.product-detail');
const imgCarrito = document.querySelector('.navbar-shopping-cart');

//
//eventos
imgCarrito.addEventListener('click', apareceAside);

//funciones

function apareceAside(){
  aside.classList.toggle('inactive');
  
  const estaCerradoMobileMenu = menuMobile.classList.contains('inactive');/*
Esta cerrado mi menú mobile? */
  if(!estaCerradoMobileMenu){
    menuMobile.classList.add('inactive');
  }
  /*Ahora, lo mismo con el desktop, nos tocaría preguntar, si el menú
  desktop está cerrado y ponerle o quitarle la clase o ponerle o 
  quitarle la clase al elemento que necesitemos*/
  
}
/*Ya terminé la primer parte de los componentes por así decirlo, ahora
en este momento lo que quiero es agregarlo a mi proyecto de js...*/












