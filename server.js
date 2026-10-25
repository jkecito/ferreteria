require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { DefaultAzureCredential } = require("@azure/identity");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Servidor Ferretería César funcionando");

});

app.post("/chat", async (req, res) => {

    try {

        console.log("=== NUEVA CONSULTA ===");
        console.log(req.body);

        const pregunta = req.body.pregunta;

        const credential =
            new DefaultAzureCredential();

        const token =
            await credential.getToken(
                "https://ai.azure.com/.default"
            );

        const response =
            await fetch(
                "https://gdzcesar-chatbot-resource.services.ai.azure.com/api/projects/gdzcesar-chatbot/agents/Chatbot/endpoint/protocols/openai/responses?api-version=2025-05-15-preview",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":
                            `Bearer ${token.token}`
                    },

                    body: JSON.stringify({

                        model: "gpt-5-mini",

                        input: pregunta

                    })

                }
            );

        const data =
            await response.json();

        const mensaje =
            data.output
                ?.find(item =>
                    item.type === "message"
                )
                ?.content?.[0]?.text;

        res.json({
            respuesta:
                mensaje ||
                "No se obtuvo respuesta del agente."
        });

    }
    catch (error) {

    console.error("ERROR COMPLETO:");
    console.error(error);

    if (error.stack) {
        console.error(error.stack);
    }

    res.status(500).json({
        respuesta:
            error.message || "Error desconocido"
    });

}


});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor iniciado en puerto ${PORT}`
    );

});