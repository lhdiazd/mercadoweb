const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static("assets"));



app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/partials/",
    })
);

app.set("view engine", "handlebars");

app.get("/", function (req, res) { 
    const productos = [
        { nombre: 'banana', descripcion: 'Fruta tropical amarilla y alargada.' },
        { nombre: 'cebollas', descripcion: 'Vegetal comúnmente usado en la cocina.' },
        { nombre: 'lechuga', descripcion: 'Verdura de hojas verdes y crujientes.' },
        { nombre: 'papas', descripcion: 'Tubérculo utilizado para cocinar en diversas formas.' },
        { nombre: 'pimenton', descripcion: 'Vegetal de colores variados, dulce o picante.' },
        { nombre: 'tomate', descripcion: 'Fruta roja comúnmente utilizada en ensaladas y salsas.' }
    ];   
    res.render("Main", { productos: productos });
});




