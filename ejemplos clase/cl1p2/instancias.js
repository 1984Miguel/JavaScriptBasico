"use strict"

// creamos una funcion para usarla como constuctor de objetos

function Fruta(nombre){
//para poner cosas

    this.setNombre = function(valor){

     nombre=valor;
    };
    this.getNombre = function(){
        return nombre;
    };





}

//CREAMOS UN OBJETO CON EN construtror

const limon = new Fruta("limon");

console.log(limon.getNombre());

limon.setNombre("naranja");
console.log(limon.getNombre());