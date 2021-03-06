var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require("./lib/connectmongoose.js");
require("./models/Agente");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//ficheris estaticos
app.use(express.static(path.join(__dirname, 'public')));


app.use((req,res,next)=>{

  console.log("soy un midelware y estoy evaluando lapeticion, ", req.originalUrl);
  //en expres cada midelware tiene que responder
  next();
  //o llamar a nextt
 // res.send("como estas");
  //o llamar next con un error next(err)
  // next/new Error("esto va mal"));
});

 

app.use('/', require('./routes/index'));
app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {

 res.status(err.status || 500);
  // set locals, only providing error in development
if(isApi(req)){
  res.json({success: false, error:err})
}

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
 
  res.render('error');
});

function isApi(req)
{
  return req.originalUrl.indexOf('/apiv') === 0;

}

module.exports = app;
