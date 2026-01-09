//Guardar personas en un array
let personas = []
function guardar(persona) {
    personas.push(persona)
}

function eliminar(persona) {
    personas.splice(personas.indexOf(persona), 1)
}

function mostrarRegistros(){
    for(let i = 0; i < personas.length; i++) {
      console.log(personas[i].getNombre())
    }
}

module.exports = {guardar, eliminar, mostrarRegistros};