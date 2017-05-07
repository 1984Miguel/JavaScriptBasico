"use strict"


const fs = require('fs');
const  versionmodulo = require('./versionmodulo');
const async = require('async');


function versionmodulos(callback){

    //leer contenido de node_modules
    fs.readdir('./node_modules', (err,lista) =>{
     
     if(err)
     {
     callback(err);
        return;
     }
     //console.log(lista);

     // esta funcion la vamos a ejecutar con cada elemento de la lista
     function iterador(item,callbackIterador)
     {

        if(item[0]===".")
        {
            callbackIterador(null);
            return
        }

        versionmodulo(item, (err,listamodulos) =>{
            if (err)
            {
                callbackIterador(err);
                return
            }


            callback(null,{nombre:item,version:version});
        })
     }

     //sacar nombre y version de cada modulo que encontremos

     async.concat(lista,iterador, (err,resultados) => {
         if(err)
         {
             callback(err);
             return
         }

         callback(null,resultados);

        console.log("data" , resultados); 

     })

    })


    // devolvemos la lista






versionmodulos((err,data) => {

    if(err)
    {
        console.error("Hubo un error" , err);
        return;
    }

  //  async.concat(lista,iterador,callback);
   // console.log( data)

   //nos recorremos lista modulos para pintarlos en la consola
   // como console.log no es asincrono podemos hacer un bucle de siempre

  /* for (let i=0; i< listamodulos.length;i++ )
   {
       console.log("el modulo ", listamodulos[i].nombre,
       " tiene la version " , listamodulos[i].version);
   }
*/

  async.concat(lista,iterador,callback);

});

}