let persona = require("./PersonaClass.js");
let servicio = require("./GuardarYElmininar");


const p1 = new persona("Enrique", "Garcia", "7226632451");
const p2 = new persona("Sergio", "Sanchez", "7131452147");
const p3 = new persona("Carlos", "Sanchez", "7131452147");
servicio.guardar(p2)
servicio.guardar(p1)
servicio.guardar(p3)
console.log(servicio.mostrarRegistros());

console.log(p1.getNombre());
