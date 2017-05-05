"use strict"

// funcion que escribe un  texto en la consola tras dos segundos

console.log("Empiezo");

function escribe2Segundos(texto, callback){
    setTimeout(function(){
        console.log(texto);
        callback();
    },2000);

}


function serie(n, fn,callbackFin){

  
        //escribe tras dos segundos
        if(n==0){

            callbackFin();
            return;
        }
            n--
            fn("texto"+ n, function(){

              serie(n, fn, callbackFin);  
            });
            
  


}

//invocamos a la funcion ayudante

serie(5, escribe2Segundos,function(){

//hemos terminado todas las iteraciones

console.log("Final")

});


