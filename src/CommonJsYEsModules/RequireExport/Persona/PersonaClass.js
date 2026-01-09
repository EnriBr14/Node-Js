class Persona {
    #nombre
    #apellido
    #telefono
    constructor(nombre, apellido, telefono) {
        this.#nombre = nombre;
        this.#apellido = apellido
        this.#telefono = telefono;
    }

    toString() {
        return `Nombre: ${this.#nombre} ${this.#apellido} - Telefono: ${this.#telefono}`;
    }

    //Getter and setters
    getNombre(){return this.#nombre}
    setNombre(nombre){this.#nombre = nombre}

    getApellido(){return this.#apellido}
    setApellido(pellido){this.#apellido = pellido}

    getTelefono(){return this.#telefono}
    setTelefono(telefono){this.#telefono = telefono}

}

module.exports = Persona

