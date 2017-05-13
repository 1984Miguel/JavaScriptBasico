"use strict"
var express = require('express');
var router = express.Router();
const Agente= require("../../models/Agente");
//no seria necesario requerir el modulo de agente
// ya que podriamos recuperar el modelo con:
// const mongoose= require('mongoose') 
// mongoose.model("agente")

const basiAuth= require("../../lib/basicAuth");
router.use(basiAuth);


/* GET home page. apiv1/agentes*/
router.get('/', function(req, res, next) {

    const name= req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const fields= req.query.fields;
    const sort = req.query.sort;
    

    const filter={}

    if (name){
        filter.name =name;
    }

     if (age){
        filter.age =age;
    }

    Agente.list(filter,limit,skip,fields,sort, (err,agentes) =>
   {
        if(err)
       {
           next(err); // le dedimos a expres que devuelva error
           return;
       }

        res.json({ success : true , result:agentes});

  
});

});

// post apiv1/agentes

router.post("/", (req,res,next) =>{
    console.log(req.body);

    // creamos un objeto tipo agente
const agente= new Agente(req.body);
//lo guardamos en la base de datos
agente.save((err ,agenteguardado) =>{
    if(err)
   {
       next(err);
       return
   }
   res.json({success: true, result: agenteguardado});
});


});






module.exports = router;