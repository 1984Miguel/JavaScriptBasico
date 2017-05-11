var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  const segundo = (new Date()).getSeconds()

  res.render('index', { 
    title: 'Express' ,
    valor: '<script> alert("cuidado"); </ script>',
    cond: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    users: [
     {name: 'smith', age:20},
     {name: 'Pepe', age:15},
     {name: 'Paco', age:34}
    ]
});
});

router.get('/hola', (req, res, next) => {
  res.send("bienvenidos");
});


//recibiendo parametros ruta

router.get("/param/:id", (req, res,next)=>{
  console.log("req.params " , req.params )
  res.send("ok recibido el id:" + req.params.id);
});

router.get("/paramopcional/:dato?" , (req, res,next)=>{
  console.log("param opcional " , req.params );
  res.send("opcional");

});

router.get("/paramrango/:id([0-9]+)/piso/:piso/puerta/:puerta(a|b|c)", (req, res,next)=>{
  console.log("varios parametros " , req.params );
  res.send("ok varios");
 

});

//recibiendo parametros query

router.get("/enquery", (req, res,next)=>{

  console.log("res.query" ,req.query);
  res.send(" bien las querys");
});

// recibiendo en bodu

router.put("/body", (req, res, next)=>{
 console.log("res.BODY" ,req.body);
  res.send(" bien en el body");

});









module.exports = router;
