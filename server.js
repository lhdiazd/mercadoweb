const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + 'node_modules/jquery/dist'));
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
    res.render("Main", {        
        partials: ["Menu", "Dashboard"],
        productos: [
            'banana',
        ]

    });
});




