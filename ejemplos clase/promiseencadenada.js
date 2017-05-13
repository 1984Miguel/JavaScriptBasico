"use strict"

// funciones que devuelven promesas

function conarroz(plato){

    return new Promise((resolve,reject) =>{
        resolve(plato + " arroz");
    });
}

function conajo(plato){

    return new Promise((resolve,reject) =>{
        resolve(plato + " ajo");
    });
}

function con(plato, ingrediente){

    return new Promise((resolve,reject) =>{
        resolve(plato + ingrediente);
    });
}


// encadenar promesas

const paella = "paella con";

conarroz(paella)


