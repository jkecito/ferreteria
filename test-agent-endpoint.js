require("dotenv").config();

const OpenAI = require("openai");

async function main() {

    const client = new OpenAI({

        apiKey: process.env.FOUNDRY_API_KEY,

        baseURL:
            "https://gdzcesar-chatbot-resource.services.ai.azure.com/api/projects/gdzcesar-chatbot/agents/Chatbot/endpoint/protocols/openai?api-version=2025-05-15-preview"

    });

    const response =
        await client.responses.create({

            model: "gpt-5-mini",

            input:
                "¿Dónde se encuentra la Ferretería César?"

        });

    console.log(response.output_text);

}

main().catch(console.error);