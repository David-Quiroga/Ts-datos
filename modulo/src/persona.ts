export let saludo:  string = "Hola.";

export class Persona{
    public nombre          :string;
    public identificacion  :number;
    
    constructor(nombre:string, identificacion:number){
        this.nombre         = nombre;
        this.identificacion = identificacion;
    }
    presentarPersona(): void{
    console.log("mi nombre es " + this.nombre + "y mi identifiacion es " + this.identificacion)
    }   
}   

let personaCurso:string = "PROGRAMACION"