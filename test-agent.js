require("dotenv").config();

const { AIProjectClient } = require("@azure/ai-projects");
const { AzureKeyCredential } = require("@azure/core-auth");

async function main() {

    const client = new AIProjectClient(
        process.env.FOUNDRY_PROJECT_ENDPOINT,
        new AzureKeyCredential(process.env.FOUNDRY_API_KEY)
    );

    console.log("Conectando al agente...");

    const openAIClient =
        client.getOpenAIClient(process.env.FOUNDRY_AGENT_NAME);

    const response =
        await openAIClient.responses.create({

            model: process.env.FOUNDRY_MODEL_DEPLOYMENT,

            input: "¿Dónde se encuentra la Ferretería César?"

        });

    console.log("\nRESPUESTA:\n");
    console.log(response.output_text);

}

main().catch(console.error);