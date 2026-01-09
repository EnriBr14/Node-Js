/*Uso de fetch: En JavaScript, fetch es una función que se usa para
hacer solicitudes HTTP (por ejemplo a una API) y obtener datos desde un servidor de forma asíncrona. */
// Es la forma moderna de reemplazar a XMLHttpRequest.
//Obtener datos (GET)
// Enviar datos (POST)
// Actualizar datos (PUT / PATCH)
// Eliminar datos (DELETE)
 function petcion(){
     fetch("https://rickandmortyapi.com/api/character")
         //Pasar a json la respuesta
         .then(respuesta => respuesta.json())
         //Imprimir los datos que traemos de la url
         .then(data => {
             console.log(data)
         })
         .catch(error => console.log(error))
 }

 petcion();