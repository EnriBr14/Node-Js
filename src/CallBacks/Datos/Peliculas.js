let peliculas = ["Pantera Negra", "Hombre Araña", "Los Vengadores", "Hulk", "Los 4 fantasticos"]


function mostrarPeliculas(usuario,pasword){
    console.log(`Hola ${usuario} tu lista de peliculas es: `)
   setTimeout( function (){
       for(pelicula of peliculas){
           console.log(" - " + pelicula)
       }
   },1500)
}

function exit(){

}

function solcitud(user,contra,solcitudd){
    solcitudd(user,contra);

}

solcitud("Enrique", "1235", mostrarPeliculas)