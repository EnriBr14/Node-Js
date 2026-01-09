//Realizar una peticion con uso de Async and Await function
//Usar try y catch con este tipo de funciones
async function peticionApi() {
    try{
        console.log("Ejecutando peticion")
        let respuesta = await fetch("https://rickandmortyapi.com/api/character")
        let datos = respuesta.json()
        console.log(datos.then(res => console.log(res)))
    }catch(error){
        console.log(error)
    }
}

peticionApi()