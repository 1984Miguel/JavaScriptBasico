"use strict"

console.log("Estamos en el aire");
console.log("ya esta");

function suma(a,b)
{
    return a+b;
}

function resta(a,b)
{

    return a-b;
}
//exports es un objeto vacio que voy añadiendo cosas
module.exports ={
    suma: suma,
    resta: resta
}

//alias si usamos alias sin module. a la izquierda nunca 
//le podemos asignar nada porque rompemos el alias

exports.multiplicar={};