const { Socket } = require("engine.io");
const express = require("express");
const path = require("path");
let app = express();
const PORT = 3000;

//settings
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("./public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("./", (req, res, next) => {
    res.render("index", {});
})

let httpServer = new httpServer(app);
let socketIO = new socketIO(httpServer);


app.listen(PORT , () => {
    console.log("It´s Alive 🙌");
})