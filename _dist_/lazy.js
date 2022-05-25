// aqui vamos a crear todo lo relacionado con el intersaccion observer 
// wqueremos saber que la imagen ha sido creada 
// la api se llama intersection observer recibe una accion o funcion donde especificamos  
//que hacer por cada imagen  
// queremos que las imagenes se vean solo una vez 
// la importancia de eliminar los eventos
const isIntersecting = (entry) => {
    return entry.isIntersecting // true si esta dentro de la pantalla 
    // aqui nos dice si es visible en la pantalla 
}

const loadImage = (entry) => {
    const container = entry.target; // es el contenedor es el div  
    // console.log(nodo.nodeName)// es el div
    const imagen = container.firstChild;
    const url = imagen.dataset.src; // solo les estamos agregando el src cuando estan viendosen en pantalla 
    //load image
    imagen.src = url;

    // deja de escuchar la imagen si ya lo hiciste una vez 

    observer.unobserve(container); // hace que escuche una vez 
}
const observer = new IntersectionObserver((entries) => { // instacie el interseccion observer 
    //el interseccion me va a ejecutar esa funcion y me dara todas las entradas que esta escuchando
    entries // solo me interesa los elementos que se estan intersectando 
    // los que estoy viendo en el viewport 
        .filter(isIntersecting)
        .forEach(loadImage)
})
export const registerImage = (image) => {
    // interseccionobserver = > observe(imagen)
    observer.observe(image)
}