"use stict"

const calculadora = require("./ejemplo_modulos/calculadora");

calculadora.marca="Siemens"

console.log(calculadora.suma(10,9));
console.log(calculadora.resta(10,9));

const otra = require("./ejemplo_modulos/calculadora");

console.log(otra.marca);