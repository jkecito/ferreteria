require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.FOUNDRY_API_KEY,
    baseURL: process.env.FOUNDRY_OPENAI_ENDPOINT
});

async function probar() {

    const response = await client.responses.create({

        model: process.env.FOUNDRY_MODEL_DEPLOYMENT,

        input: "Responde únicamente: Hola César"

    });

    console.log(response.output_text);

}

probar();