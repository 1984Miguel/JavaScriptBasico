"use strict";

// definimos una funcion constructora de objetos

function Persona(name){
this.name=name;
}
//construir objeto
const luis= new Persona('Luis');
//añadimos propiedades al  prototipo de las personas
Persona.prototype.saluda= function(){
    console.log("hola me llamo " , this.name);
}
//personas creadas y las nuevas podran saludar
luis.saluda();
//Herencia de persona --------

function Agente(name)
{
    Persona.call(this,name);
//heredar constructor de personas
}
//heredamos propiedades y metodos
Agente.prototype= new Persona("soy un prototipo");
const smith=  new Agente("smith");
smith.saluda();

console.log(
    smith instanceof Agente,
    smith instanceof Persona,
    smith instanceof Object
);

function SuperHeroe()
{
    this.vuela= function(){
        console.log(this.name , " vuela");
    }
    this.esquiva= function(){
        console.log(this.name , " esquva balas");
    }


}
//copiamos todas propiedades al prototipod de agentes
Object.assign(Agente.prototype, new SuperHeroe());

smith.vuela();
smith.esquiva();


