class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }   
    saludar() {
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

let persona1 = new Persona("juan", 23);
persona1.saludar();