var express 	= require('express');
var routes 		= require('./routes/routes');
var bodyParser	= require('body-parser');
var app 		= express();

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/twitterdemo',routes);

//create and start server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});