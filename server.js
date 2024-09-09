const express = require("express");
const app = express();
const path = require('path');
const hbs = require("hbs");
require('dotenv').config();
const cors = require("cors");
const port = process.env.PORT || 8080;

//uso de express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
//uso de cors
app.use(cors());

// Define la ruta a los parciales
hbs.registerPartials(path.join(__dirname, './views/partials'));
// Configura el motor de vistas
app.set('view engine', 'hbs');

// Ir a la ruta home
app.get("/", (req, res) => {
    res.render("home",{
        nombre:"Pablo Estrella",
        titulo:"Road Trip"
    });
});

// Ir a la ruta generic
app.get("/generic", (req, res) => {
    res.render("generic",{
        nombre:"Pablo Estrella",
        titulo:"Road Trip"
    });
});

// Ir a la ruta elements
app.get("/elements", (req, res) => {
    res.render("elements",{
        nombre:"Pablo Estrella",
        titulo:"Road Trip"
    });
});

// server.js
app.listen(port, () => {
    console.log(`Server started on port {${port}} `);
});


    