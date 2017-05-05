"use strict"

// funcion que escribe un  texto en la consola tras dos segundos

console.log("Empiezo");

function escribe2Segundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    },2000);



}

//utilizamos la funcion

escribe2Segundos("texto 1", function(){
    escribe2Segundos("texto 2", function(){
         escribe2Segundos("texto 3", function(){

    console.log("fin");
         });
    });    
});

