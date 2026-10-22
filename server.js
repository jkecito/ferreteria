require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Servidor Ferretería César funcionando");

});

app.post("/chat", async (req, res) => {

    const pregunta = req.body.pregunta;

    console.log("Pregunta recibida:", pregunta);

    res.json({
        respuesta: "Conexión con Azure AI Foundry pendiente"
    });

});

app.listen(3000, () => {

    console.log("Servidor iniciado en puerto 3000");

});