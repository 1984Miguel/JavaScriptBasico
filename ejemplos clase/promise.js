"use strict"

// funcion que da una promesa

function sleep(ms){
    return new Promise((resolve, reject)=>{
        
        setTimeout(() =>{
            //resolve();
            reject("fatal");

        },ms);
    });
}
console.log("Empiezo");
const promesa  = sleep("2000");

promesa.then(() =>{
console.log("Acabo");
}).catch(err =>{

    console.log("hay un error: ", err);
})


