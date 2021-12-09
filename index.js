const express = require('express');
let {Server: SocketIO} = require("socket.io");
let path = require("path");
const PORT = 5001;

//Import HTTP para funcionamiento de modulos
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

//Inicializacion del server
const app = express();

//Paso a una instacia  httpServer a nuestro Servidor
const httpServer = new HttpServer(app);

// Pasamos nuestra instacia a SocketIO
const io = new IOServer(httpServer);

//settings
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("./public"));

//EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    res.render('index', {});
});

//Inicializar funcion express
httpServer.listen(PORT, () => {
    console.log("It's Alive 👻");
});