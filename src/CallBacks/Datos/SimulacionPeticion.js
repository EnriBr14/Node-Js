let nombre = "Enrique"
let apellido = "Garcia"
let trabajo = "GMS"

function saludo(){
    return `Hola ${nombre}! bienvenido!`
}

function adios(){
    setTimeout(() => {
        console.log(`Adios! ${nombre}!`)
    },1500)
}

function peticion(nombre,apellido,trabajo, callback){
    let pt = callback(nombre,apellido,trabajo)
    console.log(pt)
}

console.log(peticion(nombre,apellido,trabajo, adios))

