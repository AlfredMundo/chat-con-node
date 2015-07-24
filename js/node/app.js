console.log("arrancando servidor");
var puerto = 80;
var express = require('express');
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function (req,res) {
  res.sendFile(__dirname +"/webpages/index.html");
});

io.on("connection",function(socket){
	console.log("usuario conectado");

	socket.on("mensaje",function(msg){
		io.emit("respuesta", msg);
	});
});

http.listen(puerto, function () {
	console.log("servidor arrancado en el puerto: "+ puerto);
});