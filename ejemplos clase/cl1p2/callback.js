"use strict"

function suma(a,b,callback)
{

    const resultado = a + b;
    //algo que tarda mucho
    setTimeout(function(){
    callback(resultado);
},2000);

    
   // v1 return resultado;
}

const dato = suma(3,6, function(resultado){

    console.log("el resultado es ", resultado)
});

console.log("dato ",dato);