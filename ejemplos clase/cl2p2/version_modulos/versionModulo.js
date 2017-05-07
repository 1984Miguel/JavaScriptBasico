"use strict"

const fs = require("fs");
const path= require('path');


function versionmodulo(nombreModulo,callback){
const fichero= path.join("./node_modules", nombreModulo, "package.json");

// leemos el contenido de un fichero json

fs.readFile(fichero,"utf8",(err,data)=>{
    if(err)
    {
        callback(err);
        return;
    }


//console.log(data);
//parseamos el contenido
const packageJson = JSON.parse(data);

//console.log(packageJson);


//obtenenmos la versio

const version = packageJson.version;


//retornamos version
callback(null,version);

});

}

module.exports = versionmodulo;