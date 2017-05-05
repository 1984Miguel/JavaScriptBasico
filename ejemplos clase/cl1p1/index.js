//cargamos libreria http

const http = require('http');

// definir servidor

const server = http.createServer(function(request , response){
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('Wake up, <b>Neo</b>....\n ¿como estas?');
     


});

//arrancar servidor

server.listen(1984,'127.0.0.1');
console.log('servidor arrancado en 127.0.0.1:1984');