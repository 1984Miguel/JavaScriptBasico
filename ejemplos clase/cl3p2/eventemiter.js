"use strict"

const EventEmitter = require('events');

//creamos emisor de eventos

const emisor = new EventEmitter();

function suenaTelefono(dato)
{

    console.log("ring ring", dato);
}

function vibrar(){

    console.log("brrr brrr");
}


emisor.on('Llamada de telefono', suenaTelefono );
emisor.once('Llamada de telefono', vibrar );

emisor.emit("Llamada de telefono", "Pepe"); 
emisor.emit("Llamada de telefono", "Paco"); 
