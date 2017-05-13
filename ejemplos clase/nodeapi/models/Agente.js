"use strict";
const mongoose= require("mongoose");
//definimos esquema
const agenteSchema= mongoose.Schema({
name: String,
age: Number,
email:{
type:String,
index: true,
unique : true
}

});

// creamos metodo estatico

agenteSchema.statics.list= function (filter, limit,skip, fields, sort, callback){

   const query= Agente.find(filter) ;
   query.limit(limit);
   query.skip(skip);
   query.select(fields);
   query.sort(sort);

   query.exec(callback);
}


//creamos el modelo

var Agente = mongoose.model("Agente", agenteSchema);

//No es necesario exportar porque con mongoose oidemos 
//recuperarlo con
// mongoose.Agente
module.exports= Agente;
