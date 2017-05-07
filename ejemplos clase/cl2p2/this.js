"use strict"

// constructor de objetos

function coche(ruedas)
{
this.ruedas=ruedas;

this.cuantas = function(){
    console.log("this " , this);
    console.log("tiene ", this.ruedas , " ruedas.");
     
    };

}

const todoterreno= new coche(4);

// probllema perder el this al llamarse el metodo desde otro sitio
setTimeout(todoterreno.cuantas.bind(todoterreno),2000)

const autobus = new coche(12);

autobus.cuantas.call(todoterreno);


//todoterreno.cuantas();