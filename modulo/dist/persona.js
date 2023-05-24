"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.saludo = void 0;
exports.saludo = "Hola.";
class Persona {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    presentarPersona() {
        console.log("mi nombre es " + this.nombre + "y mi identifiacion es " + this.identificacion);
    }
}
exports.Persona = Persona;
let personaCurso = "PROGRAMACION";
