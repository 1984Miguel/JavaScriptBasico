"use strict"

// funcion que escribe un  texto en la consola tras dos segundos

console.log("Empiezo");

function escribe2Segundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    },2000);

}

// vamos a hacer un bucle asincrono serie
//lamar a una funcion nveces en serie

function serie(arr, fn,callbackFin){

  
        //escribe tras dos segundos
        if(arr.length==0){

            callbackFin();
            return;
        }
            
            fn("texto"+ arr.shift(), function(){

              serie(arr, fn, callbackFin);  
            });
            
  


}

//invocamos a la funcion ayudante

serie([1,2,3,4,5], escribe2Segundos,function(){

//hemos terminado todas las iteraciones

console.log("Final")

});


