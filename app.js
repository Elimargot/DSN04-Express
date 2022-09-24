const express = require("express");//Importamos el modulo Express
const path = require("path");//Importamos modulo Path
const app = express();//Inicializamos el objeto de la app Express, app

/*Enrutamiento. Mandamos una solicitud GET por la ruta "/", la respuesta 
a obtener será index.html*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/web.html"))
});

//Para la ruta "/productos" la respuesta a obtener será productos.htzzzml
app.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname + "/productos.html"))
});

//Para la ruta "/clientes" la respuesta a obtener será clientes.html
app.get("/clientes", (req, res) => {
    res.sendFile(path.join(__dirname + "/clientes.html"))
});

//Para correr la aplicación el servidor escuchará el puerto 3000
app.listen(3000, () => {
    //Imprime este mensaje en consola
    console.log("server listening on port", 3000)
});

