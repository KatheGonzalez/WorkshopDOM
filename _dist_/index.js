/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//CREAR (1) IMAGEN Y LA VAMOS A 
//AGREGAR 1 IMAGEN EN EN NUESTRO CONTENEDOR 

// funcion para hacer que las imagenes sean random  

// const maximum = 120; 
// const minimum = 1;
 
// const randomNum = () => { // ya tenemos una funcion random de 1 a 122 
//     (Math.floor(Math.random()*(maximum - minimum)+ minimum));
// }

import { registerImage } from "./lazy.js";


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

//ESE ES EL NODO QUE ME QUIERO CREAR  . unicamente el nodo no dentro del contenedor

const createImage = () => {

    const container = document.createElement('div');
    container.className = 'p-4'; // el container debe tener a la imagen 
    const imagen = document.createElement('img'); //creamos el elemento
    //creamos las propiedades
    imagen.className='mx-auto'; //añado los elementos uno a uno con su nombre
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${getRandomInt(1,120)}.jpg`; // pending 
    

    
    container.appendChild(imagen);

    return container;
}; 

//quiero una nueva imagen en una variable  
// poner las imagenes en el contenedor  
const nuevaImagen  = createImage(); // creamos una instacia de la funcion y se la pasamos al contenedor 
// document es nuestro contenedor principal
const mountNode = document.getElementById('images'); 
const addButton = document.querySelector('button');

const addImage = () => {
    //nos interesa agregar imagenes
    const newImage = createImage();
    mountNode.append(newImage);
    registerImage(newImage);

};

addButton.addEventListener('click', addImage)

