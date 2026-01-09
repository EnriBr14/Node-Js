//Llamar al modulo del sistema de archivo
const fs = require('fs');

const data = fs.readFileSync('Archivo.txt', 'utf8');
console.log(data);